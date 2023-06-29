async function alreadyVerifiedUser(req, res){
    try{
        const user = req.body.user;
    const sendUser = {
        name:user.name,
        email:user.email,
        id:user._id,
        imageUrl:user.imageUrl

    }
    console.log(sendUser)
    res.status(200).json(sendUser);
    }
    catch(e){
        console.log(e)
        res.statud(500).json(e)
    }
}


module.exports = {alreadyVerifiedUser}