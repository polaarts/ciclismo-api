import { type ProductRepository } from '../domain/product.repository'
import { type ProductValue } from '../domain/product.value'
export class ProductUseCase {
  constructor (private readonly productRepository: ProductRepository) {}

  public async findProductById (id: string): Promise<ProductValue | null> {
    const product = await this.productRepository.findProductById(id)
    if (product === null) return null
    return product
  }

  public async getProducts (): Promise<ProductValue[]> {
    const products = await this.productRepository.getProducts()
    if (products === null) return []
    return products
  }

  public async getProductsPaginated (page: number, quantity: number): Promise<ProductValue[]> {
    const products = await this.productRepository.getProductsPaginated(page, quantity)
    if (products === null) return []
    return products
  }
}
