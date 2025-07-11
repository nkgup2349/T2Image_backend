import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/routes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 4000 ; 

const app = express();

app.use(express.json())
app.use(cors())

await connectDB()

app.use('/api/user' , userRouter)
app.use('/api/image' , imageRouter)

app.get('/', (req, res)=>{
    return res.send("API WORKING")
})
app.get('/newapi', (req, res)=>{
    return res.send("Are are new api WORKING")
})


app.listen(PORT, ()=>console.log("Server running on port " + PORT))
