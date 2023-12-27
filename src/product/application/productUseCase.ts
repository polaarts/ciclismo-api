import { type ProductRepository } from '../domain/product.repository'
import { type ProductValue } from '../domain/product.value'
export class ProductUseCase {
  constructor (private readonly productRepository: ProductRepository) {}

  public async findProductById (id: string): Promise<ProductValue | null> {
    const product = await this.productRepository.findProductById(id)
    if (product === null) return null
    return product
  }

  public async getProducts (page: number, quantity: number): Promise<ProductValue[]> {
    const products = await this.productRepository.getProducts(page, quantity)
    if (products === null) return []
    return products
  }

  public async searchProductByName (keyword: string, page: number, quantity: number): Promise<ProductValue[]> {
    const products = await this.productRepository.searchProductByName(keyword, page, quantity)
    if (products === null) return []
    return products
  }
}
