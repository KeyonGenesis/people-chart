const express = require('express');
const router = express.Router();
const PeopleRouter = require('./PeopleRouter')

router.get('/', (req, res) => {
    res.send("Inside Index Router")
})

router.use('/api', PeopleRouter)

module.exports = router