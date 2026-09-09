import { useEffect, useState } from "react";

export const useFetch = (url, options = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setData(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!url) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, [url]);

  return {
    isLoading,
    data,
    error,
    fetchData,
  };
};
