const express=require("express")
require('dotenv/config')
const db_connect=require("./db/mysql_connect")
const router=require("./router")
const app=express()
const port=process.env.PORT
/* / işareti index.html*/
app.get("/",(req,res)=>{
    res.json({
        message:"Hoş geldiniz"
    })
})
app.use(express.json({
    limit:"50mb",extended:true,parameterLimit:50000
}))

app.use("/api",router)

app.listen(port,()=>{
    console.log(`Sunucu ${port} portunda çalışıyor`)
})