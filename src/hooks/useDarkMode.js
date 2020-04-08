import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export default function useDarkMode(key, initialValue) {
  
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
     
   

    const handleDarkMode = e => {
      e.preventDefault();
     return darkMode ? setDarkMode(false) : setDarkMode(true);
    };
    
    var body = document.body;

    useEffect(() => {
        if (darkMode) {
            body.classList.add("dark-mode");
        } else {
              body.classList.remove("dark-mode");
        }
    }, [ darkMode ]);
    
    return [ darkMode, setDarkMode, handleDarkMode ];
};

  
  
  