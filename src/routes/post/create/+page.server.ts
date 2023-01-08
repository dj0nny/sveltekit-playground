import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

import prisma from '../../../hooks.server';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const newPostTitle = formData.get('post_title');
		const newPostBody = formData.get('post_body');

		if (!newPostTitle) {
			return fail(400, {
				errorField: 'title',
			});
		}
		if (!newPostBody) {
			return fail(400, {
				errorField: 'body',
			});
		}

		try {
			await prisma.post.create({
				data: {
					title: newPostTitle.toString(),
					body: newPostBody.toString(),
				},
			});
		} catch (error) {
			return fail(400, {
				message: error,
			});
		}
		throw redirect(301, '/');
	},
};
