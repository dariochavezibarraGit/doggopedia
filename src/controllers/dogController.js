const dogService = require('../api/services/dogService')

exports.getBreeds = async(req, res) => {
    try {
        const breedsData = await dogService.getBreeds();
        res.status(200).json(breedsData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching breeds' });
    }
}