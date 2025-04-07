import { useState, useEffect } from 'react';

function useFetchJson<T extends object>(url: string, deps: any[]): T | undefined {
  const [result, setResult] = useState<T | undefined>(undefined);

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(json => setResult(json))
    .catch(err => console.error(err));
  }, deps);

  return result;
}

export default useFetchJson;
