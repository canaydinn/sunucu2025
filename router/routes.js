const router=require("express").Router()
const {kullanici_ekle}=require("../controller/controller")
router.post("/login")
router.post("/register",kullanici_ekle)
module.exports=router