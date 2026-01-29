import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


export const verifyToken = async (req,res, next) =>{
  const token = req.headers.authorization?.split(" ")[1];
  // console.log(req.headers);
  
  if(!token) return res.status(401).json({message : "No Token Provided."});

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  }
  catch(error) {
    return res.status(403).json({message : "Invalid Token"});
  }
}


export const authorizeRoles = (...allowedRoles) =>{
  return (req,res,next) =>{
    // console.log(req.user.role);
    if(!allowedRoles.includes(req.user.role)){
      return res.status(403).json({message : "Access denied"});
    }
    next();
  }
}

export const hasPermission = (permissions = []) =>{
  return (req, res, next) =>{
    const user = req.user;

    if(user.role==="super_admin") return next();

    const hasAccess = permissions.some(p =>
      user.permissions.includes(p)
    );

    if(!hasAccess) {
      return res.status(403).json({message : "Forbidden"});
    }
    next();
  }
}