const express = require('express')
const jwt =  require('jsonwebtoken')
const cors = require('cors');
const fs = require('fs')

require('dotenv').config();

const secretKey = process.env.KEY;

const router = express.Router();

router.use(cors())

router.route('/login').post((req, res)=>{
    res.end("Get request fulfilled")
});


router.route('/verify').get((req, res)=>{

})

router.post('/bookings')


router.route('/bookings').get((req, res)=>{
    console.log("called")

    fs.readFile('./assets/bookings.json', (err, data)=>{

        if(err) res.status(500).json({"message": "Internal server error"+err})
        else         res.status(200).json(JSON.parse(data));

    })

})




module.exports = router;