import axios from 'axios';

const BASE_URL = 'http://hn.algolia.com/api/v1';

export const searchStories = async (query:string | null, hitsPerPage:number, page:number): Promise<number[]> => {
    const response = await axios.get(`${BASE_URL}/search`,{params: {query, page, hitsPerPage}});
    if(query === null){
        return [];
    }
    return response.data;
}