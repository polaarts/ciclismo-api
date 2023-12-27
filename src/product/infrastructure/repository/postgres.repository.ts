/* eslint-disable @typescript-eslint/consistent-type-imports */
import { ProductRepository } from '../../domain/product.repository'
import { ProductEntity } from '../../domain/product.entity'

import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from '../../../config'

import pg from 'pg'
const { Pool } = pg

const config = {
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: 5432,
  database: DB_NAME
}

const pool = new Pool(config)

export class PostgresRepository implements ProductRepository {
  async findProductById (id: string): Promise<ProductEntity | null> {
    const query = `SELECT * FROM products WHERE id = '${id}'`
    try {
      const product = await pool.query(query)
      return product.rows[0]
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async getProducts (page: number, quantity: number): Promise<ProductEntity[] | null> {
    const query = `SELECT * FROM products LIMIT ${quantity} OFFSET ${(page - 1) * quantity}`
    try {
      const product = await pool.query(query)
      return product.rows
    } catch (error) {
      console.error(error)
      return null
    }
  }
}
