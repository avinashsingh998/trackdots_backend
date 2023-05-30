const express = require('express')
const jwt =  require('jsonwebtoken')
const cors = require('cors');
const fs = require('fs');
const { getAllBookings } = require('../controllers/bookings');
const { verifyAdmin, loginAdmin } = require('../auth/adminAuth');

require('dotenv').config();

const secretKey = process.env.KEY;

const router = express.Router();

router.use(cors())

router.post('/login', loginAdmin);

router.post('/verify', verifyAdmin);


router.get('/bookings',  getAllBookings)






module.exports = router;