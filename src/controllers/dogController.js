const dogService = require('../api/services/dogService')

exports.getBreeds = async(req, res) => { // from code line 3-10, this function expects an answer from the api call in the file 'dogService.js' to see if it can return the info to 'dogRoutes.js'...
    try {
        const breedsData = await dogService.getBreeds();
        res.status(200).json(breedsData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching breeds' });
    }
}

exports.getImages = async(req, res) => {
    try {
        const imageData = await dogService.getImages();
        res.status(200).json(imageData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching images' });
    }
}