import React from 'react'
const Navbar = ({darkMode}) => {
  const modeStyles = {
    light: {
      backgroundColor: '#4949ec',
      boxtxt:'#4949ec',
    },
    dark: {
      backgroundColor: '#19193c',
      boxtxt:'#19193c',
    },
  };
  const styles = darkMode ? modeStyles.dark : modeStyles.light;
  return (

<div className=" fixed w-full grid z-50 grid-cols-[0.65fr_0.35fr] justify-items-center  items-center  text-white text-xl px-40 py-4 border-b-2 border-solid border-white" style={{ backgroundColor: styles.backgroundColor}}>
      
    <div className="grid grid-cols-[repeat(5,minmax(0,1fr))]  items-center">
        <a href="#" className="text-center pb-2"><span className='text-3xl'>Blockchain</span>.com</a>
        <a href="#" className="text-center">Wallet</a>
        <a href="#" className="text-center">Exchange</a>
        <a href="#" className="text-center">Explorer</a>
        <a href="#" className="text-center">Institutional</a>
    </div>

    <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-6 items-center ">
        <i className="fa-solid fa-magnifying-glass text-center"></i>
        <a href="#"className="text-center  border-[2px] border-[solid] border-[white] rounded-[8px] p-1">Log In</a>
        <a href='#' className="text-center bg-[white] rounded-[8px] p-1 font-semibold" 
        style={{ color: styles.boxtxt }}>Sign Up</a>
    </div>

</div>

  )
}

export default Navbar
