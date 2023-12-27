/* eslint-disable @typescript-eslint/consistent-type-imports */
import { ProductRepository } from '../../domain/product.repository'
import { ProductEntity } from '../../domain/product.entity'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class PrismaRepository implements ProductRepository {
  async findProductById (id: string): Promise<ProductEntity | null> {
    const product = await prisma.products.findUnique({
      where: {
        id
      }
    })
    return product
  }

  async getProducts (): Promise<ProductEntity[] | null> {
    const products = await prisma.products.findMany()
    return products
  }

  async getProductsPaginated (quantity: number): Promise<ProductEntity[] | null> {
    const products = await prisma.products.findMany({
      take: quantity
    })
    return products
  }
}
