require('dotenv').config();
const jwt = require('jsonwebtoken');
const JWT_SECRET= process.env.SECERET_KEY

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, JWT_SECRET, {
        expiresIn: '48h'
    })
    return token;
}
    const getUserIdFromToken = (token)=>{
        const decodedToken=jwt.verify(token, JWT_SECRET)
        return decodedToken.userId
    }
    module.exports={generateToken,getUserIdFromToken};