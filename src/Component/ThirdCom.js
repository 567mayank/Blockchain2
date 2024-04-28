import React from 'react'

const ThirdCom = ({name,symbol,price,change}) => {
    const imgUrl = `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`;

  return (
    <div className=' bg-white rounded-md p-2 [box-shadow:0px_4px_6px_rgba(0,_0,_0,_0.3)] flex flex-col gap-y-2'>
      <div className=' flex flex-row items-center gap-x-6'>
        <img className=" h-12" src={imgUrl} alt="image"></img>
        <a href="#" className=' border-[2px] border-[solid] border-[#8262ba] p-0.5 bg-[#8e62ba7e] px-3 rounded-md'>BUY</a>
        <a href="#" className=' border-[2px] border-[solid] border-[#71ba62] p-0.5 bg-[#62ba747e] px-4 rounded-md'>Sell</a>
      </div>
      <div className=' flex flex-row text-xl gap-x-3'>
        <div>{name}</div>
        <div className=' text-gray-500'>{symbol}</div>
      </div>
      <div className=' flex flex-row  items-end gap-x-4'>
        <div className=' text-xl'>${parseFloat(price).toFixed(5)}</div>
        {change < 0 ? (
            <p className='text-[red]'>{parseFloat(change).toFixed(2)}%</p>
          ) : (
            <p className='text-[#224919]'>{parseFloat(change).toFixed(2)}%</p>
        )}
      </div>
    </div>
  )
}

export default ThirdCom