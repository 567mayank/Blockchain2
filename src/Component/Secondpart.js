import React from 'react'

const SecondPart = () => {
  return (

    <div className='bg-[url(https://c4.wallpaperflare.com/wallpaper/687/185/231/blue-purple-color-blur-wallpaper-thumb.jpg)] 
        h-[600px] w-full bg-cover flex justify-center items-center text-[white]' >
      
      <div className=' w-3/5 flex flex-col justify-evenly gap-y-5'>
        <h1 className='text-5xl font-[500]'> Be early to the future of finance </h1>
        <h2 className='text-3xl'>Buy Bitcoin, Ethereum, and other leading cryptocurrencies on a platform trusted by millions.</h2>
        <div>
          <input type='text' placeholder='Your Email Address' className=' bg-[rgba(211,211,211,0.15)] opacity-[20px] rounded-md text-white-400 border-[none] p-2 pr-[150px]'></input>
          <button className='bg-[white] text-[#6464f3] rounded-md p-2 px-5 font-semibold ml-8'>Sign Up</button>
        </div>
      </div>

    </div>
    
  )
}

export default SecondPart
