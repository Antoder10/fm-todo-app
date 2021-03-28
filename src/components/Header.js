import React from 'react';

import Toggle from './Toggle';

const Header = () => {
  return (
    <header className="flex h-2/5 py-24 justify-center bg-cover bg-no-repeat bg-header-mobile-light dark:bg-header-mobile-dark sm:bg-header-desktop-light sm:dark:bg-header-desktop-dark sm:flex-row pt-8 sm:items-center text-white">
      <div className="flex items-center min-w-2/3">
        <h1 className="font-bold text-6xl uppercase">Todo</h1>
      <Toggle />
      </div>
    </header>
  )
}

export default Header;