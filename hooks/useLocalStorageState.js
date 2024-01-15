// useLocalStorageState.js
import { useState } from 'react';

function useLocalStorageState(key, defaultValue) {
  const storedValue = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
  const initial = storedValue ? JSON.parse(storedValue) : defaultValue;
  const [value, setValue] = useState(initial);

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}

export default useLocalStorageState;
