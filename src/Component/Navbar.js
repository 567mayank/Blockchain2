import React from 'react'

const Navbar = () => {
  return (

<div className=" fixed w-full grid grid-cols-[0.65fr_0.35fr] justify-items-center  items-center bg-blue-950 text-white text-xl px-40 py-4 border-b-2 border-solid border-white">
      
    <div className="grid grid-cols-[repeat(5,minmax(0,1fr))]  items-center">
        <a href="#" className="text-center pb-2"><span className='text-3xl'>Blockchain</span>.com</a>
        <a href="#" className="text-center">Wallet</a>
        <a href="#" className="text-center">Exchange</a>
        <a href="#" className="text-center">Explorer</a>
        <a href="#" className="text-center">Institutional</a>
    </div>

    <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-6 items-center ">
        <i className="fa-solid fa-magnifying-glass text-center"></i>
        <button className="text-center  border-[2px] border-[solid] border-[white] rounded-[8px] p-0.5">Log In</button>
        <button className="text-center bg-[white] text-blue-950 rounded-[8px] p-0.5 font-semibold">Sign Up</button>
    </div>

</div>

  )
}

export default Navbar
