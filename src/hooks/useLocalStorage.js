import { useState, useEffect } from 'react';

// Create a custom hook called useLocalStorage that takes a key and an initial value as arguments
export const useLocalStorage = (key, initialValue) => {
  // Initialize the state using the initialValue provided or the value saved in localStorage under the key
  const [state, setState] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
        // If there is an error parsing the saved data, log it and return the initial value
        console.error(error);
        return initialValue;
    }
  });

  // Use an effect to save the state to localStorage whenever it changes
  useEffect(() => {
    try {
      const serializedState = JSON.stringify(state);
      window.localStorage.setItem(key, serializedState);
    } catch (error) {
      // If there is an error saving the state, log it
      console.error(error);
    }
  }, [state, key]);

  // Create a function called clean that clears the localStorage and sets the state to an empty array
  const clean = () => {
    window.localStorage.clear();
    setState([]);
  };

  // Return an array containing the state, setState function to update the state, and the clean function
  return [state, setState, clean];
};
