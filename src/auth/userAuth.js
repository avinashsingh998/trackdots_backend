const user = require('../models/user');
const jwt = require('jsonwebtoken');


require('dotenv').config();


async function verifyUser(req, res, next){

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
          }else if(decoded.role != 'user'){
            console.log('You don\'t have access to this page');
            res.status(401).json({"message":"You don\'t have access to this page", "user":decoded})  
          }
         else if(decoded && decoded.role == 'user')
          {
            const currentUser = await user.findOne({email:decoded.email, role:'user'})
            req.body.user = currentUser
            next();
          }
          // res.status(200).json({user:decoded})
        } catch (error) {
          console.error('Error verifying token:', error.message);
          res.status(401).json({error:error})
        }

}

async function loginUser(req, res){

    const {id, password} = req.body;
    console.log(id, "  ", password, req.body)  

   try{
    const userObj = await user.findOne({_id:id, password:password, role:"user"})
    console.log(userObj)
       
   if(userObj){
    const payload = {
        email:userObj.email,
        name:userObj.name,
        role:userObj.role,
        iat: Math.floor(Date.now() / 1000), // Issued at time (current time in seconds)
        exp: Math.floor(Date.now() / 1000) + (10 * 60) // Expiration time (current time + 10 minutes in seconds)
      };

      const user = {
        name:userObj.name,
        email:userObj.email,
        imageUrl:userObj.imageUrl
      }
      // console.log(payload)

      const token = jwt.sign(payload, process.env.KEY)
      res.status(200).json({'token':token, "user":user})
   }

   else{
    res.status(401).json({"message":"You are not an authenticated person"})
   }
   }
   catch(err){
    res.status(500).json({"message":err})
    console.log(err)

   }
        


}






module.exports = {verifyUser, loginUser};