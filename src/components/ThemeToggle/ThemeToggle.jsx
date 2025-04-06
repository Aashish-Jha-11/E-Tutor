import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  // Create a handler that explicitly logs the click
  const handleToggle = () => {
    console.log('Toggle button clicked, current mode:', isDarkMode ? 'dark' : 'light');
    toggleTheme();
  };

  return (
    <button 
      onClick={handleToggle} 
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform duration-200 flex items-center justify-center"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <FaSun className="text-yellow-400 text-xl" />
      ) : (
        <FaMoon className="text-gray-700 text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
