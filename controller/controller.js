const dbConn=require("../db/mysql_connect")
const bcrypt=require("bcrypt")
const APIError=require("../middleware/errorHandler")
const Response=require("../utils/response")
const kullanici_ekle = async (req, res) => {
    try {
        const { kullanici_adi, sifre, eposta, adi, soyadi, tel_no, cinsiyet, dogum_tarihi, yas } = req.body;

        // Hashing password
        const hashedPassword = await bcrypt.hash(sifre, 10);

        // Check if email already exists
        const [rows] = await dbConn.query("SELECT * FROM kullanicilar WHERE eposta=?", [eposta]);

        if (rows.length > 0) {
            return res.status(409).json({
                success: false,
                data: req.body,
                message: "Kayıt Mevcut"
            });
        } else {
            // Insert user data into the database
            const [insertResult] = await dbConn.query(
                "INSERT INTO kullanicilar (kullanici_adi, sifre, eposta, adi, soyadi, tel_no, cinsiyet, dogum_tarihi, yas) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [kullanici_adi, hashedPassword, eposta, adi, soyadi, tel_no, cinsiyet, dogum_tarihi, yas]
            );
            
            return res.json({
                success: true,
                data: req.body,
                message: "Kayıt Başarıyla Oluşturuldu"
            });
        }
    } catch (error) {
        console.error("Database Error", error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Bir hata oluştu"
        });
    }
};
module.exports={kullanici_ekle}