import { error, log } from 'console'
import dotenv from 'dotenv'
import mysql from 'mysql'
dotenv.config()

const dbPort = parseInt(process.env.DB_PORT || '3300', 10)

const databaseConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  port: dbPort,
  connectionLimit: 50,
}



export default databaseConfig
