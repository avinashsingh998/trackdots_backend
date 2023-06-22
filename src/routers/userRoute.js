const express = require('express')
const cors = require('cors')
const { getAllPackages } = require('../controllers/package')
const { addFeedback } = require('../controllers/feedback')
const { addTicket } = require('../controllers/ticket')
const { validateNewUser, addNewUser } = require('../controllers/user')

const router = express.Router()

router.use(cors())


router.get('/packages', getAllPackages)
router.post('/feedback', addFeedback)
router.post('/contact', addTicket)
router.post('/newUser', validateNewUser).post('/verifyWithOTP', addNewUser )

module.exports = router