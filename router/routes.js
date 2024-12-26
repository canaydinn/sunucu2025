const router=require("express").Router()
const {kullanici_ekle,kullanici_getir,satis_getir,siparis_getir,siparis_getir_by_tarih}=require("../controller/controller")
const Validation=require("../middleware/validation")
const auth=require("../middleware/auth")
const validation = new Validation();

router.post("/register",validation.kullanici_ekleme,auth.createToken,kullanici_ekle)
router.get("/kullanici_getir",auth.tokenCheck,kullanici_getir)
router.get("/satis_getir",auth.tokenCheck,satis_getir)
router.get("/siparis_getir",auth.tokenCheck,siparis_getir)
router.get("/siparis_tarih",auth.tokenCheck,siparis_getir_by_tarih)
module.exports=router