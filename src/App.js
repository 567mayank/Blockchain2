import './App.css';
import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
import { useContext, useState } from 'react';
import Navbar from './Component/Navbar';
import Secondpart from './Component/Secondpart';
import Thirdpart from './Component/Thirdpart';
import Fourthpart from './Component/Fourthpart';
import Fifthpart from './Component/Fifthpart';
import Seventhpart from './Component/Seventhpart';
import Eighthpart from './Component/Eighthpart';
import Ninthpart from './Component/Ninthpart';
import Togglebuttton from './Component/Togglebuttton';
import Cart from './Component/Cart';
import UserContext from './Context/UserContext';

function App() {
  const {darkMode}=useContext(UserContext);
  return (
    <>
      <Secondpart darkMode={darkMode}/>
      <Thirdpart darkMode={darkMode}/>
      <Fourthpart/>
      <Fifthpart darkMode={darkMode}/>
      <Seventhpart darkMode={darkMode}/>
      <Eighthpart darkMode={darkMode}/>
      <Ninthpart darkMode={darkMode}/>
      {/* <Togglebuttton darkMode={darkMode} setDarkMode={setDarkMode} /> */}
    </>
  );
}

export default App;

