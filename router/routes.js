const router=require("express").Router()
const {kullanici_kontrol,kullanici_ekle}=require("../controller/controller")
router.post("/login",kullanici_kontrol)
router.post("/register",kullanici_ekle)
module.exports=router