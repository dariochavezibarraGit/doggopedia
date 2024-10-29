const express = require('express');
const app = express();

const dogController = require('../controllers/dogController')

const router = express.Router();

router.get('/', (req, res) => {
   res.render('index')
});

router.get('/dogs/images', dogController.getImages); // this line calls 'dogController.js' to see if it can call the api to receive the solicited information...
router.get('/dogs/breeds', dogController.getBreeds);

module.exports = router;