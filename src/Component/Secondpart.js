import React from 'react'

const SecondPart = ({darkMode}) => {
  const modeStyles = {
    light: {
      textcol:'black',
      bgurl:'https://t4.ftcdn.net/jpg/01/30/50/59/240_F_130505941_aHM5DQifhmVGcs80xVUPPMfDjg5BBm3c.jpg',
      inpcol:'rgba(211,211,211,0.45)',
      btncol:"#6464f3",
    },
    dark: {
      textcol:'white',
      bgurl:'https://c4.wallpaperflare.com/wallpaper/687/185/231/blue-purple-color-blur-wallpaper-thumb.jpg',
      inpcol:'rgba(211,211,211,0.15)',
      btncol:"#1c1c45",
    },
  };
  const styles = darkMode ? modeStyles.dark : modeStyles.light;
  return (

    <div className='bg-[url()] 
        h-[600px] w-full bg-cover flex justify-center items-center text-[white]' 
        style={{color:styles.textcol,backgroundImage: `url(${styles.bgurl})`}}>
      
      <div className=' w-3/5 flex flex-col justify-evenly gap-y-5'>
        <h1 className='text-5xl font-[500]'> Be early to the future of finance </h1>
        <h2 className='text-3xl'>Buy Bitcoin, Ethereum, and other leading cryptocurrencies on a platform trusted by millions.</h2>
        <div>
          <input type='text' placeholder='Your Email Address' className=' opacity-[20px] rounded-md text-white-400 border-[none] p-2 pr-[150px]' style={{ backgroundColor:styles.inpcol}}></input>
          <button className='bg-[white] rounded-md p-2 px-5 font-semibold ml-8' style={{color:styles.btncol}}>Sign Up</button>
        </div>
      </div>

    </div>
    
  )
}

export default SecondPart
