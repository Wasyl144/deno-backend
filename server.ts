import { Application } from 'https://deno.land/x/oak/mod.ts';
import router from './router/router.ts';

const port = 5000
const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log("server is running at: " + port)
await app.listen({ port })

