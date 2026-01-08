import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { SUPABASE_EDGE_NOTIFY_URL, SUPABASE_ANON_KEY } from '$env/static/private';

const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

function isValidEmail(email: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const actions: Actions = {
	contact: async ({ request, fetch }) => {
		const data = await request.formData();

		// Honeypot (spam trap)
		const company = String(data.get('company') ?? '').trim();
		if (company) return fail(400, { error: 'Invalid submission.' });

		const name = String(data.get('name') ?? '').trim();
		const email = String(data.get('email') ?? '').trim();
		const message = String(data.get('message') ?? '').trim();

		if (!name || name.length < 2) return fail(400, { error: 'Please enter your name.' });
		if (!email || !isValidEmail(email)) return fail(400, { error: 'Please enter a valid email.' });
		if (!message || message.length < 10)
			return fail(400, { error: 'Please enter a longer message.' });

		// 1) Save to Supabase table (your existing behavior)
		const { error } = await supabase
			.from('contact_messages')
			.insert([{ name, email, message, source: 'learnwithmrj.com' }]);

		if (error) return fail(500, { error: 'Could not save your message. Please try again.' });

		// 2) Notify via Edge Function -> Postmark (new)
		// If this fails, we still keep the saved message, but we show an error so you know.
		const resp = await fetch(SUPABASE_EDGE_NOTIFY_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${SUPABASE_ANON_KEY}`
			},
			body: JSON.stringify({
				record: {
					name,
					email,
					message,
					created_at: new Date().toISOString(),
					source: 'learnwithmrj.com'
				}
			})
		});

		if (!resp.ok) {
			const text = await resp.text().catch(() => '');
			return fail(500, { error: `Saved, but email failed: ${text || resp.status}` });
		}

		return { success: true };
	}
};
