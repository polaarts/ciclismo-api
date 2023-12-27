// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ProductEntity } from '../domain/product.entity'

export interface ProductRepository {
  findProductById: (id: string) => Promise<ProductEntity | null>
  getProducts: () => Promise<ProductEntity[] | null>
  getProductsPaginated: (page: number, quantity: number) => Promise<ProductEntity[] | null>
}
