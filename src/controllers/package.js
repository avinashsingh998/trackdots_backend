const express = require('express')

const router = express.Router();

router.route('/').get((req, res)=>{
    res.end("Get request fulfilled")
});




module.exports = router;