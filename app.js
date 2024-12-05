const express=require("express")
require('dotenv/config')
const router=require("./router")
const app=express()
const port=process.env.PORT
app.use(express.json({limit:"50mb",extended:true,parameterLimit:50000}))
app.use("/api",router)

app.listen(port,()=>{
    console.log(`Sunucu ${port} portunda çalışıyor`)
})