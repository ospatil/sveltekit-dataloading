import type { LayoutLoad } from './$types'

export const load = (async ({ fetch, data }) => {
	const env = typeof window === 'undefined' ? 'Server' : 'Client'
	const log = `LayoutLoad function called on: ${env}`

	try {
		await fetch(`http://localhost:8787?msg=${log}`)
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (err) {
		// ignore error
	}

	return {
		...data,
		layoutLoad: true
	}
}) satisfies LayoutLoad
