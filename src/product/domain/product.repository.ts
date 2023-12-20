// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ProductEntity } from './product.entity'

export interface ProductRepository {
  findProductById: (id: string) => Promise<ProductEntity | null>
  getAllProducts: () => Promise<ProductEntity[] | null>
}
