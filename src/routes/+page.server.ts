import type { PageServerLoad } from './$types';

import prisma from '../hooks.server';

export const load = (async () => {
	const posts = await prisma.post.findMany();

	return {
		posts,
	};
}) satisfies PageServerLoad;
