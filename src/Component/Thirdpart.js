import React, { useEffect, useState } from 'react';
import ThirdCom from './ThirdCom';
import axios from 'axios';


function Thirdpart({darkMode}) {
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,stellar,solana')
      .then(res => {
        if (res.data.data.length > 0) {
          setValue(res.data.data);
        }
      })
      .catch(() => prompt('error'));
  }, []);

  return (
    <div className='absolute bottom-8 w-full flex justify-center'>
      <div className='flex flex-row gap-x-10 items-center'>
        {value.map((coin, index) => (
          <ThirdCom
            key={index}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.priceUsd}
            change={coin.changePercent24Hr}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  );
}

export default Thirdpart;
