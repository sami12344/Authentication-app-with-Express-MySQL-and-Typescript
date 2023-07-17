import { log } from 'console'
import express,{Request,Response} from 'express'


const app = express()
app.use(express.json())
app.get('/api',(req:Request,res:Response)=>{
res.json({
 succes:1,
 message:'Rest api working'
})
})
const port = 3000
app.listen(port,():void=>{
 log(`server running at http://localhost:${port}/`)
})