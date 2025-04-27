// Header.js
import React from 'react';
import { useTheme } from '../theme-context';

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header style={{ backgroundColor: darkMode ? '#333' : '#fff' }}>
      <h1>Doctor Appointment</h1>
      <button onClick={toggleTheme}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
