import { app }  from './app.js'
import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({path: './.env'})
const PORT  = process.env.PORT || 8000

connectDB()
.then(() =>{
    
app.listen(PORT, console.log(`Server is runing on port: ${PORT}`)
)
})
.catch(error => console.log('Mongodb connection error ',error)
)

