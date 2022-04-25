import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [errorLS, setErrorLS] = useState(false);
  const [loadingLS, setLoadingLS] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoadingLS(false);
      } catch (error) {
        setErrorLS(error);
      }
    }, 1000);
  }, []);
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setErrorLS(error);
    }
  };
  return {
    item,
    saveItem,
    loadingLS,
    errorLS,
  };
}
export { useLocalStorage };