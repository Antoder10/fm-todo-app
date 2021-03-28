import React from 'react';
import { ThemeContext } from './themeContext';

import Moon from '../images/half-moon.svg';
import Sun from '../images/sun.svg';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="flex items-center sm:ml-auto pt-4 sm:pt-0">
      <span className="mr-4 font-bold">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'} On</span>
      <div className="flex flex-col text-grayish-blue items-center ml-auto sm:ml-0">
        <div
          className={`w-16 h-8 flex items-center rounded-full p-1 mx-4 ${theme === "dark" ? "bg-dark-desaturated-blue" : "bg-light-grayish-blue"} `}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
        <img src={theme === 'dark' ? Moon : Sun} alt="toggle icon" className={`w-6 transform transition duration-500 ease-in-out ${theme === 'light' && "translate-x-8"}`}/>
        </div>
      </div>
    </div>
  )
}

export default Toggle;