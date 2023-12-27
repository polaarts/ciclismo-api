import { PostgresRepository } from '../repository/postgres.repository'
import { ProductUseCase } from '../../application/productUseCase'
import { type Request, type Response } from 'express'

const postgresRepository = new PostgresRepository()
const productUseCase = new ProductUseCase(postgresRepository)

const ProductController = {

  getProducts: async (req: Request, res: Response) => {
    const products = await productUseCase.getProducts()
    res.send(products)
  },

  // getProductsPaginated: async (req: Request, res: Response) => {
  //   const { quantity } = req.query
  //   if (typeof quantity === 'string') {
  //     const products = await productUseCase.getProductsPaginated(parseInt(quantity))
  //     res.send(products)
  //   }
  // },

  getProductById: async (req: Request, res: Response) => {
    const id = req.params.id
    const product = await productUseCase.findProductById(id)
    res.send(product)
  }

}

export default ProductController
