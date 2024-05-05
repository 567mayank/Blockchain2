import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import Coin from './Coin'


const Cart = ({darkMode}) => {
  const modeStyles = {
    light: {
      navcol:'#5353f2',
      backgroundColor: 'white',
      txt:'black',
      bg2col:'#4141f832',
    },
    dark: {
      navcol:'#171754',
      backgroundColor: 'black',
      txt:'white',
      bg2col:'#0b0b31',
    },
  };
  const styles = darkMode ? modeStyles.dark : modeStyles.light;

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [value,setValue]=useState([])
  const [imageUrl,setImage]=useState( `https://assets.coincap.io/assets/icons/btc@2x.png`)
  const [Quantity,setQuantity] = useState(1)
  useEffect(()=>{
    axios
    .get(
      'https://api.coincap.io/v2/assets'
    )
    .then( res => {
      setCoins(res.data.data);
      if (res.data.data.length > 0) {
        const firstCoin = res.data.data[0];
        setValue([firstCoin.name, firstCoin.symbol, firstCoin.priceUsd,firstCoin.changePercent24Hr]);
        setQuantity(1)
      }
    })
    .catch(()=> prompt("error"));
  },[]);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleCoinClick = coinData => {
    console.log(coinData);
    setValue([coinData.name, coinData.symbol, coinData.price,coinData.change]);
    console.log(value);
    setImage( `https://assets.coincap.io/assets/icons/${coinData.symbol.toLowerCase()}@2x.png`)
    setQuantity(1)
  };

  return (
    <>
    <div className=' text-white text-4xl text-center p-5' 
        style={{backgroundColor:styles.navcol}}>
      <a href='#'>Blockchain<span className=' text-gray-200'>.com</span></a>
    </div>
    <div className=' w-full h-[623px] flex flex-row'>

        {/* left part -> search for Crypto*/}
    <div className='  h-full w-[75%]   items-center gap-4 px-16 pt-8'
          style={{backgroundColor:styles.backgroundColor,color:styles.txt}}>
        <div className=' font-medium text-3xl h-[50px]  mb-4'>Search for your favourite Crypto</div>
        <div className=' h-[50px]  text-black mb-4'>
          <input onChange={handleChange} className=' bg-[#7143f035] text-black pr-16 pl-2 py-1 text-2xl rounded-lg border-[2px] border-[solid] border-[#e4abe4]' placeholder='Search' ></input>
        </div>
        <div>
        {filteredCoins.slice(0, 8).map(coin => {
          return (
            <Coin
              name={coin.name}
              symbol={coin.symbol}
              price={coin.priceUsd}
              change={coin.changePercent24Hr}
              marketcap={coin.marketCapUsd} 
              onClick={handleCoinClick}
              darkMode={darkMode}
            />
          );
        })}
        </div>
    </div>


        
        <div className=' w-[25%] pr-8 py-11'
            style={{backgroundColor:styles.backgroundColor}}>

          <div className='border-[2px] border-[solid] rounded-xl text-center p-2 pt-6 flex flex-col gap-y-5 
            pb-8 mt-9' style={{borderColor:styles.txt,backgroundColor:styles.bg2col,color:styles.txt}}>   

            <div className=' text-3xl font-bold text-[#4586ee]'>BUY</div>
            <div className=' flex flex-row items-center gap-4 justify-center'>
              <img className=" h-12"src={imageUrl} alt='crypto'></img>
              <div className=' text-3xl'>{value[0]}</div>
              <div className=' text-2xl text-gray-500'>{value[1]}</div>
            </div>

            <div className=' flex flex-col'>
              <div className=' text-2xl'>${parseFloat(value[2]).toFixed(10)}</div>
              {value[3] < 0 ? (
              <p className='text-red-800 text-xl'>{parseFloat(value[3]).toFixed(5)}%</p>
                ) : (
                <p className='text-green-500 text-xl'>{parseFloat(value[3]).toFixed(5)}%</p>
              )}
            </div>

            <div className='flex flex-row gap-3'>
              <label className=' text-xl'>Total Quantity</label>
              <input className="border-[2px] border-[solid] border-[black] rounded-xl pl-3 text-black"type="text" value={Quantity} onChange={e=>{
                setQuantity(e.target.value)
              }}></input>
            </div>

            <div className=' flex flex-row'>
              <div className=' text-xl'>Estimated Total:  $ </div>
              <div className=' text-xl'> {parseFloat(Quantity*value[2]).toFixed(8)}</div>
            </div>
            <div className=' flex justify-center'>
              <button className=' bg-blue-800 w-3/5 py-2 text-2xl text-white rounded-md'>Proceed To Buy</button>
            </div>

          </div>

        </div>
    </div>
    </>
  )
}

export default Cart;