import { PostgresRepository } from '../repository/postgres.repository'
import { ProductUseCase } from '../../application/productUseCase'
import { type Request, type Response } from 'express'

const postgresRepository = new PostgresRepository()
const productUseCase = new ProductUseCase(postgresRepository)

const ProductController = {

  getProducts: async (req: Request, res: Response) => {
    const { page, quantity } = req.query

    if (typeof quantity === 'string' && typeof page === 'string') {
      const products = await productUseCase.getProducts(parseInt(page), parseInt(quantity))
      res.send(products)
    } else {
      const products = await productUseCase.getProducts(1, 20)
      res.send(products)
    }
  },

  getProductById: async (req: Request, res: Response) => {
    const id = req.params.id
    const product = await productUseCase.findProductById(id)
    res.send(product)
  },

  searchProductByName: async (req: Request, res: Response) => {
    const keyword = req.params.keyword
    const { page, quantity } = req.query

    if (typeof quantity === 'string' && typeof page === 'string') {
      const products = await productUseCase.searchProductByName(keyword, parseInt(page), parseInt(quantity))
      res.send(products)
    } else {
      const products = await productUseCase.searchProductByName(keyword, 1, 20)
      res.send(products)
    }
  }
}

export default ProductController
