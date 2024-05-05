import React from 'react';
const Coin = ({ name, symbol, price, change, marketcap,onClick,darkMode}) => {
  const modeStyles = {
    light: {
      backgroundColor: 'white',
      boxtxt:'black',
    },
    dark: {
      backgroundColor: 'black',
      boxtxt:'white',
    },
  };
  const styles = darkMode ? modeStyles.dark : modeStyles.light;
  const imageUrl = `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`;
  const handleClick = () => {
    onClick({ name, symbol, price, change });
  };
  return (
    <div className='grid grid-cols-[1fr_1fr_1fr_1fr] mb-4 border-b-[2px] border-[solid] pb-1 items-center'
        style={{backgroundColor:styles.backgroundColor,color:styles.boxtxt,borderColor:styles.boxtxt}}>
      <div className='flex flex-row gap-x-4 items-center' onClick={handleClick}>
        <img src={imageUrl} alt="crypto" className='h-8' ></img>
        <div className='font-semibold'>{name}</div>
        <div >{symbol}</div>
      </div>
      <div className='flex justify-start'>${parseFloat(price).toFixed(10)}</div>
      {change < 0 ? (
          <p className='text-red-800'>{parseFloat(change).toFixed(7)}%</p>
        ) : (
          <p className='text-green-500'>{parseFloat(change).toFixed(7)}%</p>
      )}
      <div className=" flex flex-row">
        <div>Mkt Cap: $</div>
        <div>{parseFloat(marketcap).toLocaleString('en-US')}</div> 
      </div>
    </div>
  );
};

export default Coin;
