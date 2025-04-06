import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Create a state variable first with a default value of false (light mode)
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Use useEffect to initialize theme from localStorage or system preference
  useEffect(() => {
    // Check if we have a theme stored in localStorage
    const storedTheme = localStorage.getItem('theme');
    
    // Check system preference for dark mode
    const prefersDark = window.matchMedia && 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme based on localStorage or system preference
    const shouldBeDark = storedTheme 
      ? storedTheme === 'dark' 
      : prefersDark;
    
    // Update state
    setIsDarkMode(shouldBeDark);
    
    // Apply theme immediately to document
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    console.log('Theme initialized:', shouldBeDark ? 'dark' : 'light');
  }, []);

  // Create a more direct toggle function with explicit logging
  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      console.log('Toggling theme from', prevMode ? 'dark' : 'light', 'to', newMode ? 'dark' : 'light');
      
      // Update localStorage
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      
      // Update document class
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
