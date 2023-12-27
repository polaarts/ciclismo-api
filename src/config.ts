import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT ?? 3000

export const DB_HOST = process.env.DB_HOST ?? 'localhost'
export const DB_PORT = process.env.DB_PORT ?? 27017
export const DB_NAME = process.env.DB_NAME ?? 'test'
export const DB_USER = process.env.DB_USER ?? 'test'
export const DB_PASSWORD = process.env.DB_PASSWORD ?? 'test'
