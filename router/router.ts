import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getProducts, getProduct, delProduct } from '../controller/controller.ts';
const router = new Router()

router.get('/api/list', getProducts)
  .get('/api/list/:id', getProduct)
  .delete('/api/del/:id', delProduct)

export default router