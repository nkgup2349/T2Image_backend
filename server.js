import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/routes.js'
import imageRouter from './routes/imageRoutes.js'

import path from 'path'                          
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)     
const __dirname = path.dirname(__filename)  

const PORT = process.env.PORT || 4000 ; 

const app = express();

app.use(express.json())
app.use(cors())

await connectDB()

app.use('/api/user' , userRouter)
app.use('/api/image' , imageRouter)

app.use(express.static(path.join(__dirname, 'dist'))) 

app.get('/', (req, res)=>{
    return res.send("API WORKING")
})
app.get('/newapi', (req, res)=>{
    return res.send("Are are new api WORKING")
})

app.get('*', (req, res) => {        
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, ()=>console.log("Server running on port " + PORT))
