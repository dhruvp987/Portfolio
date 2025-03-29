import { useState, useEffect } from 'react';

function useFetchJson(url, dep) {
  const [result, setResult] = useState<object | undefined>(undefined);

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(json => setResult(json))
    .catch(err => console.error(err));
  }, [dep]);

  return result;
}

export default useFetchJson;
