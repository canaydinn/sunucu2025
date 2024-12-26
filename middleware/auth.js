const jwt=require("jsonwebtoken")
const createToken=async(req,res)=>{
    const eposta=req.body.eposta
    const payload={
        name:eposta
    }
    const token=await jwt.sign(payload,process.env.JWT_SECRET_KEY,{
        algorithm:"HS512",
        expiresIn:process.env.JWT_EXPIRES_IN
    })
    return res.status(201).json({
        success:true,
        token:token
    })
}

const tokenCheck=async(req,res,next)=>{
const headerToken=req.header.authorization&&req.headers.authorization.startsWith("Bearer")
console.log(headerToken)
if(!headerToken)
    return res.status(401).json({
        success:false,
        message:"Geçersiz oturum"
    })
const token=req.headers.authorization.split("")[1]
const decoded=await jwt.verify(token,process.env.JWT_SECRET_KEY,async(err,decoded)=>{
    if(err)
        return res.status(401).json({
            success:false,
            message:"Geçersiz oturum"
        })
        req.user=decoded
})
next()
}
module.exports={createToken,tokenCheck}
