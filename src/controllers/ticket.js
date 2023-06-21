const { RunCommandCursor } = require("mongodb");
const Ticket = require("../models/ticket")


async function addTicket(req, res){
    try{
        const ticket = new Ticket(req.body.contactForm)

        // console.log("this is ticket 1 ", ticket)
        // console.log(contactForm)

        const result = await ticket.save();

        res.status(201).json(result)
    }

    catch(err){
        console.log(err)
        res.status(500).json({"message":err})
    }

}

async function getAllTickets(req, res){
    try{
        const tickets = await Ticket.find();
        res.status(200).json(tickets)
    }
    catch(err){
        // console.log(err)
        res.status(500).json({'message':err})
    }
}


async function updateTicket(req, res){
    try{
        const ticket = new Ticket(req.body.ticket)
        const result = await Ticket.findOneAndUpdate({_id:ticket._id}, ticket)
        res.status(200).json(result)
    }

    catch(err){
        console.log(err, " While Updating ")
        res.status(500).json(err)
    }
}


module.exports = {addTicket, getAllTickets, updateTicket}