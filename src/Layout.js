import React, { useContext } from 'react'
import Navbar from './Component/Navbar'
import { Outlet } from 'react-router-dom'
import Togglebuttton from './Component/Togglebuttton'
import UserContextProvider from './Context/UserContextProvider'
import UserContext from './Context/UserContext'
function Layout() {
  // const [darkMode, setDarkMode] = useState(false);
  // const {darkMode,setDarkMode}=useContext(UserContext);
  return (
    <UserContextProvider>
        <Navbar/>
        <Outlet />
        <Togglebuttton/>
    </UserContextProvider>
  )
}

export default Layout
