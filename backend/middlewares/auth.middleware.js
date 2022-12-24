const jwt = require("jsonwebtoken");
const authMiddle = (req,res,next)=>{
    try {
        const token = req.headers["token"];
        const check = jwt.decode(token)
            if(check){ 
                req.body.userID = check.id
                next();
            }
            else{
                return res.status(401).json({
                    message:"invalid token"
                })
        }
    } catch (error) {
        return res.status(401).json({
            message:"invalid token"
        })
    }
}

module.exports = authMiddle;