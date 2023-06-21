const user = require('../models/user');
const jwt = require('jsonwebtoken');


require('dotenv').config();


async function verifyAdmin(req, res, next){

        try {
          const authHeader = req.headers.authorization;

          if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Authorization header missing or invalid' });
          }

          const token = authHeader.split(' ')[1];
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
            next();
          }
          // res.status(200).json({user:decoded})
        } catch (error) {
          console.error('Error verifying token:', error.message);
          res.status(401).json({error:error, 'error hia ye ': "cdjkj"})
        }

}

async function loginAdmin(req, res){

    const {id, password} = req.body;
    console.log(id, "  ", password)  

   try{
    const admin = await user.findOne({_id:id, password:password, role:"admin"})
    console.log(admin)
       
  

   if(admin){
    const payload = {
        email:admin.email,
        name:admin.name,
        role:admin.role,
        iat: Math.floor(Date.now() / 1000), // Issued at time (current time in seconds)
        exp: Math.floor(Date.now() / 1000) + (10 * 60) // Expiration time (current time + 10 minutes in seconds)
      };

      const user = {
        name:admin.name,
        email:admin.email,
        imageUrl:admin.imageUrl
      }
      // console.log(payload)

      const token = jwt.sign(payload, process.env.KEY)
      res.status(200).json({'token':token, "user":user})
   }

   else{
    res.status(401).json({"message":"You are not an authorized person"})
   }
   }
   catch(err){
    res.status(500).json({"message":err})
    console.log(err)

   }
        


}






module.exports = {verifyAdmin, loginAdmin};