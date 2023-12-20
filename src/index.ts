import express, { type Express } from 'express'
import productApp from './product/product.app'
import { PORT } from './config'

const app: Express = express()

app.use('/products', productApp)

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`)
})
