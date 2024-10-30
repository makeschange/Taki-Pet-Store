import React, { useState, useCallback } from "react";

const useHttps = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const fetchMovies = useCallback(async (requestConfig, applyData) => {
    try {
      setIsLoading(true);
      setFetchError(null);
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      applyData(data);
    } catch (err) {
      setFetchError(err.message);
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    fetchError,
    fetchMovies,
  };
};

export default useHttps;
