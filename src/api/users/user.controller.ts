import { Request, Response } from 'express'
import create from './user.service'
import { genSaltSync, hashSync } from 'bcrypt'

const createUser = (req: Request, res: Response) => {
  const { body } = req
  const salt = genSaltSync(10)
  body.password = hashSync(body.password, salt)
  create(body, (err, results) => {
    if (err) {
      console.log(err) // Use console.log instead of log.
      return res.status(500).json({
        success: 0,
        message: 'Database connection error',
      })
    }
    // Handle the successful response here.
    res.json({
      success: 1,
      message: 'User created successfully',
      data: results,
    })
  })
}


export default createUser