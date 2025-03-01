import { useEffect, useState } from 'react';

const useLocalStorage = (
  key: string,
  value?: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const valueFromStorage =
    typeof window !== 'undefined' ? localStorage.getItem(key) : '';
  const [storedValue, setStoredValue] = useState(
    valueFromStorage || value || ''
  );

  useEffect(() => {
    localStorage.setItem(key, storedValue);
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
