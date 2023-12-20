import { ProductEntity } from './product.entity'

export interface ProductRepository {
  findProductById: (id: string) => Promise<ProductEntity | null>
  getAllProducts: () => Promise<ProductEntity[] | null>
}
