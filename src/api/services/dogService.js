const axios = require('axios');

exports.getBreeds = async() => { // here is where we make the api call and return the information to 'dogController.js'...
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/list/all');
        return response.data;
    } catch {
        throw new Error('Failed to fetch breeds (dogService)');
    }
}

exports.getImagesByBreed = async (breed) => {
    try {
        const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
        return response.data
    }
    catch {
        throw new Error('Failed to fetch image by breed (dogServices)');
    }
}


exports.getFacts = async() => {
    try {
        const response = await axios.get('https://dogapi.dog/api/v2/facts');
        return response.data;
    } catch {
        throw new Error('Failed to fetch facts (dogService)');
    }
}