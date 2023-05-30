const user = require('../models/user');
const jwt = require('jsonwebtoken');


require('dotenv').config();


async function verifyAdmin(req, res){

    const token = req.cookies.tokenJwt;
    console.log("this is cookies " , req.cookies)


        try {
          const decoded = jwt.verify(token, process.env.KEY);
          const currentTimestamp = Math.floor(Date.now() / 1000);
      
          // Check if the token has expired
          if (decoded.exp < currentTimestamp) {
            console.log('Token has expired');
            res.status(401).json({"message":"token is expired", "user":decoded})
          }
      
          res.status(200).json({user:decoded})
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
        exp: Math.floor(Date.now() / 1000) + (5 * 60) // Expiration time (current time + 2 minutes in seconds)
      };
      console.log(payload)

      const token = jwt.sign(payload, process.env.KEY)
      res.status(200).json({'token':token})
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