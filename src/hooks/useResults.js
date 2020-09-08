import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

const useResults = term => {
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                term,
                limit: 50,
                location: 'bahia'
            }
        });

        setResults(response.data.businesses);
    }

    useEffect(() => {
        searchApi();
    }, []);

    return [searchApi, results];
}

export default useResults;