import { type productRepository } from '../domain/product.repository'
import { type ProductValue } from '../domain/product.value'
export class ProductUseCase {
  constructor (private readonly productRepository: productRepository) {

  }

  public async findProductById ({ id }: { id: string }): Promise<ProductValue | null> {
    const product = await this.productRepository.findProductById(id)
    if (product === null) return null
    return product
  }

  public async getAllProducts (): Promise<ProductValue[]> {
    const products = await this.productRepository.getAllProducts()
    if (products === null) return []
    return products
  }
}
