import type { PageLoad } from './$types'

export const load = (async ({ fetch, data }) => {
	const env = typeof window === 'undefined' ? 'Server' : 'Client'
	const log = `PageLoad function called on: ${env}`

	try {
		await fetch(`http://localhost:8787?msg=${log}`)
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (err) {
		// ignore error
	}

	const resp = await fetch(`/api/message`)
	const { message } = await resp.json()

	return {
		...data,
		pageLoad: true,
		apiMessage: message
	}
}) satisfies PageLoad
