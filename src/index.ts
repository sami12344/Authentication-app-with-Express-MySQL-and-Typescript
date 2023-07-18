import { log } from 'console'
import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import mysql from 'mysql'
import databaseConfig from './config/database'
// import UserRouter from './api/users/user.router'
// import databaseConfig from './config/database';

dotenv.config()

const con = mysql.createConnection(databaseConfig)

con.connect(function (err) {
  if (err) console.log(err)
  console.log('Connected!')
})



const app = express()
app.use(express.json())
// app.use('/api/users', UserRouter)
app.get('/api', (req: Request, res: Response) => {
  res.json({
    succes: 1,
    message: 'Rest api working',
  })
})

const port = process.env.APP_PORT
app.listen(port, (): void => {
  log(`server running at http://localhost:${port}/`)
})
