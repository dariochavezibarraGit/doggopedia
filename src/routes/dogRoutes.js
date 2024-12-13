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

router.get('/dogs/images/:breed', dogController.getImagesByBreed); // when ':' is added after a word, this means that the value of, in this case, 'breed', is susceptible to change...

router.get('/dogs/facts', dogController.getFacts); // this line calls 'dogController.js' to see if it can call the api to receive the solicited information...

module.exports = router;