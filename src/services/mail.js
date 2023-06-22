const TempUser = require("../models/tempUser");
const nodemailer = require('nodemailer')
require('dotenv').config();


const min = 100000
const max = 999999
function getRandomNumber() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


async function generateOTP(newUser){
   try{
    const otp = getRandomNumber();

    newUser.otp = otp;
    console.log(newUser)

    const user = new TempUser(newUser)
    await user.save();
    setTimeout(async () => {
       const deleted =  await TempUser.findOneAndDelete({_id:user._id})
        console.log(user._id, deleted)
        console.log("deleted")
    }, 600000);
   
    console.log(user,"This is the user")
    sendMail( newUser.email, otp);
    return {id:user._id}
   }

   catch(err){
    console.log(err)
   }

}


async function sendMail(id, otp){
const template = 
`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>TrackDots Account Verification</title>
</head>
<body style="font-family: Arial, sans-serif;">
  <h2>TrackDots Account Verification</h2>
  <p>Dear User,</p>
  <p>Thank you for registering with TrackDots! To complete your account verification, please use the OTP (One-Time Password) provided below:</p>
  <h3>OTP: ${otp}</h3>
  <p>Please enter the OTP on the registration page to verify your account. If you didn't initiate this registration, please disregard this email.</p>
  <p>Thank you for choosing TrackDots!</p>  
  <p>Best Regards,<br>
  TrackDots Team</p>
</body>
</html>`

try{
   const transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
         user:process.env.NodemailerUser,
         pass:process.env.NodemailerPass
      }
   })
   console.log({
      from:process.env.NodemailerUser,
     to:id,
     subject:"TrackDots Account Verification OTP",
     html:template
})
    
   const info =await transporter.sendMail({
            from:process.env.NodemailerUser,
           to:id,
           subject:"TrackDots Account Verification OTP",
           html:template
   })
   console.log("This is result of sending mail ",info)
   
}
catch(err){
   console.log("Error occured, whilre sending the mail ",err)
}


}
  


module.exports = {generateOTP}