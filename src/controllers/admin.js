const User = require('../models/user');
const jwt = require('jsonwebtoken');


require('dotenv').config();

async function verifyAdminController(req, res, next){

  res.header('Access-Control-Allow-Credentials', true);


    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization header missing or invalid' });
      }

      const token = authHeader.split(' ')[1];
      // console.log(token)
      const decoded = jwt.verify(token, process.env.KEY);
      const currentTimestamp = Math.floor(Date.now() / 1000);
  
      // Check if the token has expired
      if (decoded.exp < currentTimestamp) {
        console.log('Token has expired');
        res.status(401).json({"message":"token is expired", "user":decoded})
      }
      if(decoded)
      {
        // console.log(decoded);
        const user = await User.findOne({email:decoded.email, name:decoded.name, role:decoded.role})
        // console.log(user,'this is user')
        // console.log({"user":{"name":user.name, "email":user.email, imageUrl:user.imageUrl}})
        res.status(200).json({"user":{"name":user.name, "email":user.email, imageUrl:user.imageUrl}})
      }
      // res.status(200).json({user:decoded})
    } catch (error) {
      console.error('Error verifying token:', error);
      res.status(401).json({error:error})
    }

}

module.exports = {verifyAdminController}