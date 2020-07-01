export interface Product {
  id: string,
  name: string,
  prize: number,
  prop: {
    color: string,
    size: number,
  }
}