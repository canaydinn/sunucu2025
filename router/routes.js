const router=require("express").Router()
const {kullanici_ekle,kullanici_getir,satis_getir}=require("../controller/controller")
router.post("/register",kullanici_ekle)
router.get("/kullanici_getir",kullanici_getir)
router.get("/satis_getir",satis_getir)
module.exports=router