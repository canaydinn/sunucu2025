const express=require("express")
require('dotenv/config')
const db_connect=require("./db/mysql_connect")
const app=express()
const port=process.env.PORT
/* / işareti index.html*/
app.get("/",(req,res)=>{
    res.json({
        message:"Hoş geldiniz"
    })
})
app.listen(port,()=>{
    console.log(`Sunucu ${port} portunda çalışıyor`)
})