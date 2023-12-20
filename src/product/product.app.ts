import express, { type Request, type Response } from 'express'
import dotenv from 'dotenv'
import ProductController from './infrastructure/controller/product.controller'

dotenv.config()

const productApp = express.Router()

productApp.get('/', (req: Request, res: Response, next) => {
  ProductController.getAllProducts(req, res).catch(next)
})

productApp.get('/:id', (req: Request, res: Response, next) => {
  ProductController.getProductById(req, res).catch(next)
})

export default productApp
