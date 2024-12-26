const router=require("express").Router()
const {kullanici_ekle,kullanici_getir,satis_getir,siparis_getir,siparis_getir_by_tarih}=require("../controller/controller")
const Validation=require("../middleware/validation")
const validation = new Validation();

router.post("/register",validation.kullanici_ekleme,kullanici_ekle)
router.get("/kullanici_getir",kullanici_getir)
router.get("/satis_getir",satis_getir)
router.get("/siparis_getir",siparis_getir)
router.get("/siparis_tarih",siparis_getir_by_tarih)
module.exports=router