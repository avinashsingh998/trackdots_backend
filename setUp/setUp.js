const connectToDatabase = require("../src/DB/connection");
const user = require("../src/models/user");
const fs = require('fs');
const booking = require("../src/models/booking");
const Feedback = require("../src/models/feedback");
const Package = require("../src/models/package");
const Ticket = require("../src/models/ticket");

async function setUPDatabase(){
try{
    await connectToDatabase();
    await booking.insertMany(JSON.parse(fs.readFileSync('./setUp/setUpdata/trackdots.bookings.json').toString()))
    await Feedback.insertMany(JSON.parse(fs.readFileSync('./setUp/setUpdata/trackdots.feedbacks.json').toString()))
    await Package.insertMany(JSON.parse(fs.readFileSync('./setUp/setUpdata/trackdots.packages.json').toString()))
    await Ticket.insertMany(JSON.parse(fs.readFileSync('./setUp/setUpdata/trackdots.tickets.json').toString()))
    await user.insertMany(JSON.parse(fs.readFileSync('./setUp/setUpdata/trackdots.users.json').toString()))
    
    console.log("Set Up complete, now you can run 'npm start' to run the server.......")
}
catch(err){
    console.log(err)
}


}

setUPDatabase().then(()=>{
    process.exit(1)
});