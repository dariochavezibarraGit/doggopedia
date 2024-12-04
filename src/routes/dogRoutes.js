const express = require('express');
const app = express();

const dogController = require('../controllers/dogController')

const router = express.Router();

router.get('/', async (req, res) => {
   try {
      const breedList = await dogController.getBreeds(); // in order to retrieve information, use 'await' function to wait for promise to resolve...
      res.render('index', { breeds: breedList });
   } catch (error) {
      res.status(500).send('Error loading breeds');
   }
});


router.get('/dogs/images', dogController.getImages); // this line calls 'dogController.js' to see if it can call the api to receive the solicited information...
router.get('/dogs/breeds', dogController.getBreeds);
router.get('/dogs/facts', dogController.getFacts);

module.exports = router;