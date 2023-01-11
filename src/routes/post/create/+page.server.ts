import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

import prisma from '../../../hooks.server';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const title = formData.get('post_title');
		const body = formData.get('post_body');

		if (typeof title !== 'string' || typeof body !== 'string') {
			return fail(400, {
				fieldErrors: null,
				fields: null,
				formError: `Form not submitted correctly.`,
			});
		}

		const fieldErrors = {
			name: title === '' ? 'Name is empty' : null,
			body: body === '' ? 'Body is empty' : null,
		};

		const fields = {
			title,
			body,
		};

		if (Object.values(fieldErrors).some(Boolean)) {
			return fail(400, {
				fieldErrors,
				fields,
				formError: null,
			});
		}
		try {
			await prisma.post.create({ data: fields });
		} catch (error) {
			return fail(400, {
				message: error,
			});
		}
		throw redirect(301, '/');
	},
};
