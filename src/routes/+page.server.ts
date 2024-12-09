import type { PageServerLoad } from './$types'

export const load = (async ({ fetch }) => {
	const log = 'PageServerLoad function called'

	try {
		await fetch(`http://localhost:8787?msg=${log}`)
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (err) {
		// ignore error
	}

	return {
		pageServerLoad: true
	}
}) satisfies PageServerLoad
