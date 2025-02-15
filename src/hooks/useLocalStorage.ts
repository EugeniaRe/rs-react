import { useEffect, useState } from 'react';

const useLocalStorage = (
  key: string,
  value?: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [storedValue, setStoredValue] = useState(
    localStorage.getItem(key) || value || ''
  );

  useEffect(() => {
    localStorage.setItem(key, storedValue);
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
