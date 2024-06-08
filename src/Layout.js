import React from 'react'
import Navbar from './Component/Navbar'
import { Outlet } from 'react-router-dom'
import Togglebuttton from './Component/Togglebuttton'
import { useState } from 'react'
function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
        <Navbar darkMode={darkMode}/>
        <Outlet />
        <Togglebuttton darkMode={darkMode} setDarkMode={setDarkMode}/>
    </>
  )
}

export default Layout
