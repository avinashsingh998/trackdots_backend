const Package = require("../models/package")


async function getAllPackages(req, res){
    console.log(req.cookies)    
    try{
        let bookings = await Package.find();
        // console.log(bookings)
        res.status(200).json(bookings)
    }catch(err){
        res.status(500).json({"message":err})
    }
}




module.exports = {getAllPackages}