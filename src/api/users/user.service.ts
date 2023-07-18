import { error } from "console";
import pool from "../../config/database";



interface UserData {
  first_name: string
  last_name: string
  gender: string
  password: string
  number: string
}
type CallbackFunction = (
  error: Error | null,
  results?: any,
  fields?: any
) => void
const create = (data: UserData, callback: CallbackFunction) => {
  pool.query(
    `inser into registration(firstname,lastname,gender,email,password,number)
  values(?,?,?,?,?,?)
  `,
    [data.first_name, data.last_name, data.gender, data.password, data.number],
    (error, results, fields) => {
      if (error) {
        callback(error)
      }
      return callback(null, results)
    }
  )
} 

export default create