import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getProducts, getProduct, delProduct, addProduct, updateProduct } from '../controller/controller.ts';
const router = new Router()

router.get('/api/list', getProducts)
  .get('/api/list/:id', getProduct)
  .delete('/api/del/:id', delProduct)
  .post('/api/add', addProduct)
  .put('/api/update/:id', updateProduct)

export default router