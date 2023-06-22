const TempUser = require("../models/tempUser");
const User = require("../models/user");
const { generateOTP } = require("../services/mail");

async function validateNewUser(req, res) {
  try {
    const formdata = await req.body.newUserData;
    console.log("this is from controller", formdata);
    const user1 = await User.find({ email: formdata.email });
    console.log(user1);
    if (user1.length > 0) {
      res.status(409).json(user1.name);
    } else {
      const cred = await generateOTP(formdata);
      res.status(200).json(cred);
    }
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
}

async function addNewUser(req, res) {
  try {
    const { otp, id } = req.body;
    if (isNaN(otp)) res.status(401).json({ message: "Wrong OTP" });
    else {
      const verified = await TempUser.findOne({ otp: otp, _id: id });
      if (!verified) {
        res.status(401).json({ message: "Wrong OTP" });
      } else {
        const tempuser = await TempUser.findOne({ _id: verified._id });

        const new_user = new User({
          _id: tempuser.email.split("@")[0],
          name: tempuser.name,
          role: "user",
          email: tempuser.email,
          password: tempuser.password,
        });

        await new_user.save();
        res.status(200).json({ user_id: new_user._id });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = { validateNewUser, addNewUser };
