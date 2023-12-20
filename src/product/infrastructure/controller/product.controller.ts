import { PostgresRepository } from '../repository/postgres.repository'
import { ProductUseCase } from '../../application/productUseCase'
import { type Request, type Response } from 'express'

const postgresRepository = new PostgresRepository()
const productUseCase = new ProductUseCase(postgresRepository)

const ProductController = {
  getAllProducts: async (req: Request, res: Response) => {
    const products = await productUseCase.getAllProducts()
    res.send(products)
  },
  getProductById: async (req: Request, res: Response) => {
    const id = req.params.id
    const product = await productUseCase.findProductById(id)
    res.send(product)
  }
}

export default ProductController
