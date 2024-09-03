import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();
    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setIsLoading(false);
          setData(response.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setIsLoading(false);
          setData([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    fetchData(dataUrl);

    const cleanUp = () => {
      isMounted = false;
      source.cancel("Operation canceled by the user.");
    };

    return () => {
      cleanUp();
    };
  }, [dataUrl]);

  return { data, isLoading, fetchError };
};

export default useAxiosFetch;
