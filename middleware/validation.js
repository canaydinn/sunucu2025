const joi = require("joi");
const APIError =require("../utils/errors")
class Validation {
  constructor() {
    // Bind the method to the class instance, so you can use `this`
    this.kullanici_ekleme = this.kullanici_ekleme.bind(this);
  }

  // Middleware function for validation
  async kullanici_ekleme(req, res, next) {
    try {
      await joi.object({
        kullanici_adi: joi.string().trim().strict().min(3).max(100).required().messages({
          "string.base": "Kullanıcı Adı alanı Normal metin olmalı",
          "string.empty": "Kullanıcı Adı Boş Olamaz",
          "string.min": "Kullanıcı Adı en az 3 Karakter Olmalıdır",
          "string.max": "Kullanıcı Adı en fazla 100 Karakter Olmalıdır",
        }),
        sifre: joi.string().trim().strict().min(3).max(10).required().messages({
          "string.base": "Şifre alanı Normal metin olmalı",
          "string.empty": "Şifre Boş Olamaz",
          "string.min": "Şifre en az 3 Karakter Olmalıdır",
          "string.max": "Şifre en fazla 10 Karakter Olmalıdır",
        }),
        eposta: joi.string().email().trim().min(3).max(100).required().messages({
          "string.base": "Eposta alanı Normal metin olmalı",
          "string.empty": "Eposta Boş Olamaz",
          "string.email": "Geçersiz e-posta formatı",
          "string.min": "Eposta en az 3 Karakter Olmalıdır",
          "string.max": "Eposta en fazla 100 Karakter Olmalıdır",
        }),
        adi: joi.string().trim().strict().min(3).max(100).required().messages({
          "string.base": "Adı alanı Normal metin olmalı",
          "string.empty": "Adı Boş Olamaz",
          "string.min": "Adı en az 3 Karakter Olmalıdır",
          "string.max": "Adı en fazla 100 Karakter Olmalıdır",
        }),
        soyadi: joi.string().trim().strict().min(3).max(100).required().messages({
          "string.base": "Soyadı alanı Normal metin olmalı",
          "string.empty": "Soyadı Boş Olamaz",
          "string.min": "Soyadı en az 3 Karakter Olmalıdır",
          "string.max": "Soyadı en fazla 100 Karakter Olmalıdır",
        }),
        tel_no: joi.string().min(3).max(20).required().messages({
          "string.base": "Telefon numarası alanı Normal metin olmalı",
          "string.empty": "Telefon numarası Boş Olamaz",
          "string.min": "Telefon numarası en az 3 Karakter Olmalıdır",
          "string.max": "Telefon numarası en fazla 20 Karakter Olmalıdır",
        }),
        cinsiyet: joi.string().trim().strict().min(3).max(20).required().messages({
          "string.base": "Cinsiyet alanı Normal metin olmalı",
          "string.empty": "Cinsiyet Boş Olamaz",
          "string.min": "Cinsiyet en az 3 Karakter Olmalıdır",
          "string.max": "Cinsiyet en fazla 20 Karakter Olmalıdır",
        }),
        dogum_tarihi: joi.string().trim().strict().min(3).max(20).required().messages({
          "string.base": "Doğum tarihi alanı Normal metin olmalı",
          "string.empty": "Doğum tarihi Boş Olamaz",
          "string.min": "Doğum tarihi en az 3 Karakter Olmalıdır",
          "string.max": "Doğum tarihi en fazla 20 Karakter Olmalıdır",
        }),
        yas: joi.number().integer().min(1).max(120).required().messages({
          "number.base": "Yaş alanı bir sayı olmalıdır",
          "number.integer": "Yaş bir tam sayı olmalıdır",
          "number.min": "Yaş en az 1 olmalıdır",
          "number.max": "Yaş en fazla 120 olmalıdır",
          "any.required": "Yaş alanı gereklidir"
        }),
      }).validateAsync(req.body);

      // If validation is successful, pass control to the next middleware
      next();
    } catch (error) {
      // If there are validation errors, throw an APIError with the first error message
      return res.status(500).json({
        success:false,
        message:error.details[0].message
    })
    }
  }
}

module.exports = Validation;
