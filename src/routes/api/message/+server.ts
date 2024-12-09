import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async () => {
	const log = `Server API endpoint called`

	try {
		await fetch(`http://localhost:8787?msg=${log}`)
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (err) {
		// ignore error
	}
	return json({ message: 'Bonjour from the server API endpoint' })
}
