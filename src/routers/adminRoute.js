const express = require('express')
const cors = require('cors')
const { getAllBookings } = require('../controllers/bookings')
const { verifyAdmin, loginAdmin } = require('../auth/adminAuth')
const { verifyAdminController } = require('../controllers/admin')
const { getAllFeedbacks, markAsRead } = require('../controllers/feedback')
const { getAllTickets, updateTicket } = require('../controllers/ticket')


const router = express.Router()

router.use(cors())

router.post('/login', loginAdmin)
router.get('/verify', verifyAdminController)

router.get('/bookings', verifyAdmin, getAllBookings)

router.get('/feedback',verifyAdmin, getAllFeedbacks)
      .get('/feedbackUpdate', verifyAdmin, markAsRead)

router.route('/tickets').get(verifyAdmin, getAllTickets).put(verifyAdmin, updateTicket)






module.exports = router