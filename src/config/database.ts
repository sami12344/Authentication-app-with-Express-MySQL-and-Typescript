import dotenv from 'dotenv'
import { createPool } from 'mysql2'
dotenv.config()

const dbPort = parseInt(process.env.DB_PORT || '3300', 10)

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  port: dbPort,
  connectionLimit: 50,
})

export default pool
