const dbConn=require("../db/mysql_connect")
const bcrypt=require("bcrypt")
const APIError=require("../middleware/errorHandler")
const Response=require("../utils/response")
const kullanici_ekle=async (req,res)=>{
    const kullanici_adi=req.body.kullanici_adi
    const sifre=await  bcrypt.hash(req.body.sifre,10)
    const eposta=req.body.eposta
    const adi=req.body.adi
    const soyadi=req.body.soyadi
    const tel_no=req.body.tel_no
    const cinsiyet=req.body.cinsiyet
    const dogum_tarihi=req.body.dogum_tarihi
    const yas=req.body.yas
    const [result]=await dbConn.query("SELECT * FROM kullanicilar WHERE eposta=?",eposta);
        if(result.length>0){
            return res.json({
                success:true,
                data:null,
                message:"Kayıt Mevcut"
            })
        }else{
            const [result_insert]=dbConn.query("INSERT INTO kullanicilar (kullanici_adi,sifre,eposta,adi,soyadi,tel_no,cinsiyet,dogum_tarihi,yas) VALUES (?,?,?,?,?,?,?,?,?)",[kullanici_adi,sifre,eposta,adi,soyadi,tel_no,cinsiyet,dogum_tarihi,yas])
                return res.json({
                    success:true,
                    data:null,
                    message:"Kayıt Başarıyla Oluşturuldu"
                })
        }         
}
const login=async(req,res)=>{
    const kullanici_adi=req.body.kullanici_adi
    const sifre=req.body.sifre
    dbConn.query("SELECT * FROM kullanicilar WHERE kullanici_adi=? AND sifre=?",[kullanici_adi,sifre],(error,results)=>{
        if(results>0){
            return res.json({
                success:true,
                message:"Giriş Başarılı bir şekilde gerçekleşti"
            })
        }else{
            return res.json({
                success:false,
                message:"Giriş Başarısız"
            })
        }
        
    })
}

module.exports={kullanici_ekle}