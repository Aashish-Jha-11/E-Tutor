import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeDebug = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [hasDarkClass, setHasDarkClass] = useState(false);
  const [storedTheme, setStoredTheme] = useState('');

  useEffect(() => {
    // Check if document has dark class
    const hasClass = document.documentElement.classList.contains('dark');
    setHasDarkClass(hasClass);
    
    // Check localStorage
    const theme = localStorage.getItem('theme');
    setStoredTheme(theme || 'not set');
  }, [isDarkMode]);

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg text-sm z-50 opacity-70 hover:opacity-100">
      <h4 className="font-bold mb-1 text-black dark:text-white">Theme Debug:</h4>
      <ul className="list-disc pl-4 text-gray-700 dark:text-gray-300">
        <li>isDarkMode state: {isDarkMode ? 'true' : 'false'}</li>
        <li>Dark class on html: {hasDarkClass ? 'yes' : 'no'}</li>
        <li>localStorage theme: {storedTheme}</li>
      </ul>
    </div>
  );
};

export default ThemeDebug;
