import { useEffect, useState } from 'react';
import { fetchData } from '../utils/api';

const useFetchData = (endpoint) => {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const getData = async () => {
         try {
            const response = await fetchData(endpoint);
            setData(response);
            setLoading(false);
         } catch (err) {
            setError(err);
            setLoading(false);
         }
      };

      getData();
   }, [endpoint]);

   return { data, loading, error };
};

export default useFetchData;
