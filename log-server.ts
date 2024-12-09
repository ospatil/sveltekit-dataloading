import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()
app.use(cors())

app.get('/', (c) => {
	const date = new Intl.DateTimeFormat('en-CA', { dateStyle: 'short', timeStyle: 'long' }).format(
		new Date()
	)
	console.log(`[${date}]: ${c.req.query('msg')}`)
	return c.text('ok')
})

serve({
	fetch: app.fetch,
	port: 8787
})
