import express, { type Request, type Response } from 'express'
import ProductController from './infrastructure/controller/product.controller'

const productApp = express.Router()

productApp.get('/', (req: Request, res: Response, next) => {
  ProductController.getAllProducts(req, res).catch(next)
})

productApp.get('/:id', (req: Request, res: Response, next) => {
  ProductController.getProductById(req, res).catch(next)
})

export default productApp
