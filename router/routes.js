const router=require("express").Router()
const {kullanici_ekle,kullanici_getir}=require("../controller/controller")
router.post("/register",kullanici_ekle)
router.get("/kullanici_getir",kullanici_getir)
module.exports=router