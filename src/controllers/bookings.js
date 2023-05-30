const booking = require("../models/booking")


getAllBookings = async (req, res)=>{
    try{
        let bookings = await booking.find();
        // console.log(bookings)
        res.status(200).json(bookings)
    }catch(err){
        res.status(500).json({"message":err})
    }
}

addBooking = async(req, res)=>{
    try{
        

    }catch(err){
        res.status(500).json({"message":err})
    }
}


module.exports = {getAllBookings}