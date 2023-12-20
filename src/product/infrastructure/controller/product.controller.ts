import { PostgresRepository } from '../repository/postgres.repository'
import { type Request, type Response } from 'express'

const postgresRepository = new PostgresRepository()

const ProductController = {
  getAllProducts: async (req: Request, res: Response) => {
    const products = await postgresRepository.getAllProducts()
    res.send(products)
  },
  getProductById: async (req: Request, res: Response) => {
    const id = req.params.id
    const product = await postgresRepository.findProductById(id)
    res.send(product)
  }
}

export default ProductController
