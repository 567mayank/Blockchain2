// import './App.css';
// import Navbar from './Component/Navbar';
// import Secondpart from './Component/Secondpart';
// import Thirdpart from './Component/Thirdpart';
// import Fourthpart from './Component/Fourthpart';
// import Fifthpart from './Component/Fifthpart';
// import Cart from './Component/Cart';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// const appRouter = createBrowserRouter([
//   {
//     path:"/cart",
//     element: <Cart/>
//   }
// ])
// function App() {
//   return (
//     <>
//     <RouterProvider router={appRouter}>
//       <Navbar/>
//       <Secondpart/>
//       <Thirdpart/>
//       <Fourthpart/>
//       <Fifthpart/>
//     </RouterProvider>
//     </>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
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

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Use the single BrowserRouter to manage all routes
  const appRouter = createBrowserRouter([
    {
      path:"/cart",
      element: <Cart/>
    }
  ])
  return (
    <BrowserRouter>
      <Navbar darkMode={darkMode} />
      <Secondpart darkMode={darkMode}/>
      <Thirdpart darkMode={darkMode}/>
      <Fourthpart/>
      <Fifthpart darkMode={darkMode}/>
      <Seventhpart darkMode={darkMode}/>
      <Eighthpart darkMode={darkMode}/>
      <Ninthpart darkMode={darkMode}/>
      <Cart darkMode={darkMode}/>
      {/* <Routes>
        <Route path="/" element={<Secondpart darkMode={darkMode} />} />
        <Route path="/third" element={<Thirdpart darkMode={darkMode} />} />
        <Route path="/fourth" element={<Fourthpart />} />
        <Route path="/fifth" element={<Fifthpart />} />
        <Route path="/seventh" element={<Seventhpart darkMode={darkMode} />} />
        <Route path="/eighth" element={<Eighthpart darkMode={darkMode} />} />
        <Route path="/ninth" element={<Ninthpart darkMode={darkMode} />} />
        <Route path="/cart" element={<Cart darkMode={darkMode} />} />
      </Routes> */}
      <Togglebuttton darkMode={darkMode} setDarkMode={setDarkMode} />
    </BrowserRouter>
  );
}

export default App;

