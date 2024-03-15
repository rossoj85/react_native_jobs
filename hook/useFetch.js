import { useState, useEffect } from "react";
import axios from "axios";

import {RAPID_API_KEY} from '@env'

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  

  // console.log('endpoint', endpoint);
  // console.log('query', query);
  // console.log('rapidapikey typeof', typeof rapidApiKey);

  const rapidApiKey = RAPID_API_KEY;
  // const rapidApiKey = RAPID_API_KEY.split("'").join('');


  // console.log('rapidApiKey ~~>',rapidApiKey);
  // console.log('rapidApiKey:', rapidApiKey);
  // console.log('Comparison:', '46295265fbmsh444f925c00f2060p115214jsn3155d3b38b66');
  // console.log('key comparison', '46295265fbmsh444f925c00f2060p115214jsn3155d3b38b66'===rapidApiKey)
  
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      console.log('try');
      const response = await axios.request(options);

      setData(response.data.data);

      console.log('~~ repsonse data',response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log('CATCH');
      setError(error);
      console.log(error)
    } finally {
      console.log('FINALLY');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;