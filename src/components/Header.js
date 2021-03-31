import React from 'react';

import Toggle from './Toggle';

const Header = () => {
  return (
    <header className="flex px-24 sm:px-72 items-center h-2/5 py-24 bg-cover bg-no-repeat bg-header-mobile-light dark:bg-header-mobile-dark sm:dark:bg-header-desktop-dark sm:bg-header-desktop-light sm:flex-row sm:items-center text-white">
      <h1 className="font-bold text-4xl sm:text-6xl uppercase">Todo</h1>
      <Toggle />
    </header>
  )
}

export default Header;