import { Product } from "../types.ts";


//DATA
let products: Product[] = [
  {
    id: "1",
    name: "Kurtka",
    prize: 201.99,
    prop:
      {
        color: "red",
        size: 9
      }
  },
  {
    id: "2",
    name: "Koszula",
    prize: 21.99,
    prop:
      {
        color: "blue",
        size: 8
      }
  },
  {
    id: "3",
    name: "Kurtka",
    prize: 12.50,
    prop:
      {
        color: "white",
        size: 2
      }
  }
];
// END OF DATA

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

// Delete one item
// Router: /api/del/:id

export const delProduct = ({ params, response }: { params: { id: string }, response: any }) => {
  let indexOfProduct: number | undefined = products.findIndex(el => el.id === params.id)
  console.log(products)

  if (indexOfProduct == -1)
  {
    response.status = 404
    response.body = {
      isOk: false,
      mess: "Product not found"
    }
    console.error("Product not found ")
    console.log(products)
  }
  else {
    products.splice(indexOfProduct, 1)
    response.status = 200
    response.body = {
      isOk: true,
      data: products
    }
    console.log(products)
  }
}

// add item POST
// /api/add

export const addProduct = async ({ request, response }: { request: any, response: any }) => {
  const body = await request.body()
  let numId: number = products.length
  if (!request.hasBody) {
    response.status = 400
    response.body = {
      isOk: false,
      mess: "Data problem"
    }
  }
  else {
    numId++
    const product: Product = body.value
    product.id = numId.toString();
    products.push(product)
    response.status = 201
    response.body = {
      isOk: true,
      data: product
    }
    console.log("Product added")
  }
}

//Update product PUT
// /api/update

export const  updateProduct = async ({ params, request, response }: { params: {id: string}, request:any, response: any }) => {
  const product: Product | undefined = products.find(el => el.id === params.id)
  if (product)
  {
    const body = await request.body()

    const updateData: { name?: string, prize?: number } = body.value
    
    products = products.map(p => p.id === params.id ? { ...p, ...updateData } : p)
    
    response.status = 200
    response.body = {
      isOk: true,
      data: products
    }
    console.log("product updated")
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