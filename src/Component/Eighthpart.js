import React from 'react'

const Eighthpart = ({darkMode}) => {
  const modeStyles = {
    light: {
      backgroundColor: '#6767ff',
    },
    dark: {
      backgroundColor: '#151548',
    },
  };
  const styles = darkMode ? modeStyles.dark : modeStyles.light;
  return (
    <div className=' mt-[100px] flex flex-row bg-[#151548] gap-x-16 justify-center items-center p-9'
        style={{ backgroundColor:styles.backgroundColor}}>
        <div className=' text-4xl text-white font-bold'>
            Let us take you from zero to crypto
        </div>
        <div >
            <button className=' bg-white text-[#151548] p-4 text-2xl rounded-xl font-medium'
                style={{ color:styles.backgroundColor}}>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Eighthpart
