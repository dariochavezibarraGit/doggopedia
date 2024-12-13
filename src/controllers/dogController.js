const dogService = require('../api/services/dogService')

exports.getBreeds = async (req, res) => {
    try {
        const breedsData = await dogService.getBreeds();
        const breedList = [];

        for (const breed in breedsData.message) {   // the attribute '.message' converts .json type information into useful data for the program to understand...
            if (breedsData.message[breed].length > 0) {
                breedsData.message[breed].forEach((subBreed) => {
                    breedList.push(`${breed} (${subBreed})`); // to specify which data will be included to array, use '.push' attribute...
                });
            } else {
                breedList.push(breed);
            }
        }
        return breedList;
    } catch (error) {
        res.status(500).json({ message: 'Error fetching breeds: ', error })
        return [];
    }
};

exports.getImagesByBreed = async(req, res) => {
    const { breed } = req.params; // this line of code is the same as writing 'const breed = req.params.breed', which is a way of saying 'deconstruct the received url'...

    try {
        const imageData = await dogService.getImagesByBreed(breed);
        res.status(200).json(imageData);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching images by breeds' });
    }
}

exports.getFacts = async(req, res) => {
    try {
        const factsData = await dogService.getFacts();
        res.status(200).json(factsData);
    } catch {
        res.status(500).json({ message: 'Error fetching facts' });
    }
}