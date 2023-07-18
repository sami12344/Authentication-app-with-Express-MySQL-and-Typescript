import { log } from 'console'
import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import UserRouter from './api/users/user.router'
dotenv.config()

const app = express()
app.use(express.json())
app.use('/api/users', UserRouter)
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
