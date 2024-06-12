import jwt from "jsonwebtoken";
import TokenModel from "../model/auth/index.js";
const SEC_KEY = process.env.SECRET_KEY;
const AuthMiddleWare = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  token = token.replace("Bearer ", "");
  const checkToken = await TokenModel.findOne({
    where: {
        token
    }
  });
  if(!checkToken){
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, SEC_KEY);
    // console.log(decoded, "<===========req.body");
    req.user = decoded;
    next();
    
  } catch (error) {
    return res.status(401).json({ message: `UnAuthorized: Error: ${error}` });
  }
};

export default AuthMiddleWare;
