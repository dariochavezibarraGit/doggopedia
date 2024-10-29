const axios = require('axios');

exports.getBreeds = async() => { // here is where we make the api call and return the information to 'dogController.js'...
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/list/all');
        return response.data;
    } catch {
        throw new Error('Failed to fetch bone');
    }
}

exports.getImages = async() => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random')
        return response.data;
    } catch {
        throw new Error('Failed to fetch bone');
    }
}