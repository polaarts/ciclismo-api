import { type ProductEntity } from './product.entity'

export interface productRepository {
  findProductById: (id: string) => Promise<ProductEntity | null>
  getAllProducts: () => Promise<ProductEntity[] | null>
}
