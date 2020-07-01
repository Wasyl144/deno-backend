import products from "./data.ts";
import { Product } from "../types.ts";

// Get all products
// Router: /api/list

export const getProducts = ({ response }: { response: any }) => {
  response.status = 200
  response.body = {
    isOk: true,
    data: products
  }
  console.log("Showing all id")
}

// Get all products
// Router: /api/list:id

export const getProduct = ({ params, response }: { params: {id: string}, response: any }) => {
  const product: Product | undefined = products.find(el => el.id === params.id)
  if (product)
  {
    response.status = 200
    response.body = {
      isOk: true,
      data: product,
    }
    console.log("Product found id: " + params.id)
  }
  else {
    response.status = 404
    response.body = {
      isOk: false,
      mess: "No product"
    }
    console.error("Id not found")
  }
}