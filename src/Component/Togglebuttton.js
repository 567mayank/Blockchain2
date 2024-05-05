import React from 'react';

const Togglebuttton = ({ darkMode, setDarkMode }) => {
  return (
    <div className='fixed bottom-5 left-[1440px] cursor-pointer'>
      {darkMode ? 
        <i className="fa-regular fa-sun text-6xl text-[#f5f5b6]" onClick={() => setDarkMode(false)}></i> : 
        <i className="fa-regular fa-moon text-6xl " onClick={() => setDarkMode(true)}></i>
      }
    </div>
  );
};

export default Togglebuttton;
