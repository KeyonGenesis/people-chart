const express = require('express');
const router = express.Router();
const PeopleController = require('../Controllers/PeopleController')

router.get('/', (req, res) => {
    res.send("Inside People Router");
})

router.get('/getBar', PeopleController.getBar)
router.get('/getPie', PeopleController.getPie)
router.post('/addChart', PeopleController.addChart)
router.get('/getChart', PeopleController.getChart)

module.exports = router;