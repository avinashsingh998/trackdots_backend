const express = require('express')
const cors = require('cors')
const { getAllPackages } = require('../controllers/package')
const { addFeedback } = require('../controllers/feedback')
const { addTicket } = require('../controllers/ticket')
const { validateNewUser, addNewUser } = require('../controllers/user')
const { loginUser, verifyUser } = require('../auth/userAuth')
const { alreadyVerifiedUser } = require('../controllers/utility')

const router = express.Router()

router.use(cors())


router.get('/packages', getAllPackages)
router.post('/feedback', addFeedback)
router.post('/contact',verifyUser, addTicket)
router.post('/newUser', validateNewUser).post('/verifyWithOTP', addNewUser )
router.post('/login', loginUser)
router.get("/verifyUser", verifyUser, alreadyVerifiedUser )

module.exports = router