import React from 'react'

const Ninthpart = ({darkMode}) => {
  const modeStyles = {
    light: {
      backgroundColor: 'white',
      txt:'black',
      txt2:'gray'
    },
    dark: {
      backgroundColor: '#080820',
      txt:'white',
      txt2:'gray'
    },
  };
  const styles = darkMode ? modeStyles.dark : modeStyles.light;
  return (
    <div className=' flex flex-col items-center gap-y-4 p-16 pb-4 bg-[#080820]'
      style={{backgroundColor:styles.backgroundColor}}>

      <div className=' flex flex-row gap-x-[200px] text-[gray] text-xl '>
        <div className=' flex flex-col gap-y-2'>
            <div className=' text-3xl font-semibold text-black mb-6'
                style={{color:styles.txt}}>Blockchain</div>
            <div>   
                <i class="fa-brands fa-twitter text-black" style={{color:styles.txt}}></i>
                <a href='#'> Twitter</a>
            </div>
            <div>   
                <i class="fa-brands fa-instagram text-black" style={{color:styles.txt}}></i>
                <a href='#'> Instagram</a>
            </div>
            <div>   
                <i class="fa-brands fa-medium text-black" style={{color:styles.txt}}></i>
                <a href='#'> Medium</a>
            </div>
        </div>
        <div className=' flex flex-row gap-x-[50px]'>
            <div className=' flex flex-col gap-y-2'>
                <div className=' text-2xl font-normal text-black mb-6' style={{color:styles.txt}}>Products</div>
                <a href='#'>Wallet</a>
                <a href='#'>Exchange</a>
                <a href='#'>Pay</a>
                <a href='#'>NFT</a>
                <a href='#'>Charts</a>
                <a href='#'>Prices</a>
                <a href='#'>Card</a>
            </div>
            <div className=' flex flex-col gap-y-2'>
                <div className=' text-2xl font-normal text-black mb-6' style={{color:styles.txt}}>Rescources</div>
                <a href='#'>API's</a>
                <a href='#'>Status</a>
                <a href='#'>Blog</a>
                <a href='#'>Podcast</a>
                <a href='#'>Security</a>
                <a href='#'>Research</a>
            </div>
            <div className=' flex flex-col gap-y-2'>
                <div className=' text-2xl font-normal text-black mb-6' style={{color:styles.txt}}>Company</div>
                <a href='#'>About</a>
                <a href='#'>Prime</a>
                <a href='#'>Ventures</a>
                <a href='#'>Press Center</a>
            </div>
        </div>
      </div>
      <br/>
      <div className=' flex flex-row items-center text-xl gap-x-3'>
        <i class="fa-solid fa-copyright" style={{color:styles.txt}}></i>
        <a href='#' style={{color:styles.txt}}>Blockchain.com</a>
      </div>

    </div>
  )
}

export default Ninthpart
