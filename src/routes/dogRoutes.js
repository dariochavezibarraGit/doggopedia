const express = require('express');
const dogController = require('../controllers/dogController')

const router = express.Router();

router.get('/', dogController.getBreeds);

module.exports = router;