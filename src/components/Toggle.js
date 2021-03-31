import React from 'react';
import { ThemeContext } from './themeContext';

import Moon from '../images/icon-moon.svg';
import Sun from '../images/icon-sun.svg';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <img
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      src={theme === 'dark' ? Moon : Sun}
      alt="toggle icon"
      className="w-8 h-8 ml-auto"
    />
  )
}

export default Toggle;