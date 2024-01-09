import express, { type Express } from 'express'
import productApp from './product/product.app'
import { PORT } from './config'
import cors from 'cors'

const app: Express = express()

app.use(cors())

app.use('/products', productApp)

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`)
})
