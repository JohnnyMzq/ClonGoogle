import React, {useState} from 'react';

import './App.css';

import {Navbar, Rutas, Footer} from './components'

const App =() => {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Rutas />
        <Footer />
      </div>
    </div>
  );
}

export default App;
