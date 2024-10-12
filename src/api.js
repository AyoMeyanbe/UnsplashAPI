import axios from 'axios';
const searchImages = async (term) => {

    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID ul4O975cTJOhALsdgaOxQBaY-Iz3Z1ZcwgEcl9r-zXE'
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;