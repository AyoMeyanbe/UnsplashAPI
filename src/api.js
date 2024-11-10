import axios from 'axios';
import staticData from './staticData.json'
const searchImages = async (term, page) => {
    console.log(term, page, "Api.js")

    const response = await axios.get(`https://api.unsplash.com/search/photos?page=${page}`,{
        headers: {
            Authorization: 'Client-ID ul4O975cTJOhALsdgaOxQBaY-Iz3Z1ZcwgEcl9r-zXE'
        },
        params: {
            query: term,
        },
     });

     return response.data.results;

    // const response = staticData;

    // return response.results;
};

export default searchImages;