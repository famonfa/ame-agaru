const express = require("express")
const app = express()
const db = require('./src/models')
const  cors  = require('cors')
const router = require('./src/routes')
const morgan = require('morgan')




 //MIDDLEWARES 

app.use(cors())
app.use(morgan("dev"))
app.use(express.json()) 
app.use('/', router)
app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", "true")
    res.send("API is running...")
}) 


db.sequelize.sync().then((req)=> {
app.listen(3001, async() => {
})
})