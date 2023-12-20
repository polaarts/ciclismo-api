import express, { type Express } from 'express'
import dotenv from 'dotenv'

import productApp from './product/product.app'

dotenv.config()

const app: Express = express()
const port = process.env.PORT ?? 3000

app.use('/products', productApp)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
