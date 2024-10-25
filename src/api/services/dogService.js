const axios = require('axios');

exports.getBreeds = async() => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/list/all');
        return response.data;
    }
    catch {
        throw new Error('Failed to fetch bone');
    }
}