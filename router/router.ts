import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getProducts, getProduct } from '../controller/controller.ts';
const router = new Router()

router.get('/api/list', getProducts)
      .get('/api/list/:id', getProduct)

export default router