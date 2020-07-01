import { Product } from '../types.ts'

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

export default products;