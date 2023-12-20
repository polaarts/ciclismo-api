import { type productRepository } from '../../domain/product.repository'
import { type ProductEntity } from '../../domain/product.entity'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class PostgresRepository implements productRepository {
  async findProductById (id: string): Promise<ProductEntity | null> {
    const product = await prisma.products.findUnique({
      where: {
        id
      }
    })
    return product
  }

  async getAllProducts (): Promise<ProductEntity[] | null> {
    const products = await prisma.products.findMany()
    return products
  }
}
