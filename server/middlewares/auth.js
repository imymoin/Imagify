import jwt from "jsonwebtoken";

const userAuth = async(req, res, next) => {
    const {token} = req.headers;

    if(!token){
        return res.json({ success: false, message: "Not authorized. Login Again" }); 
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if(tokenDecode.UserId){
            req.body.UserId = tokenDecode.UserId;
        }
        else{
            return res.json({ success: false, message: "Not authorized." });
        }

        next();
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export default userAuth;