import React, { useState } from 'react';

const Fourthpart = () => {
    
    const [value,setValue]=useState(0);

    const image=['https://www.blockchain.com/static/img/home/products/app-ease.png',
                    'https://www.blockchain.com/static/img/home/products/app-earn-rewards.png',
                    'https://www.blockchain.com/static/img/home/products/app-self-custody.png',
                    'https://www.blockchain.com/static/img/home/products/app-connect-defi.png'];
    const setImage = () => {
        return <img src={image[value]} alt='image'></img>
    };

    const msg1 = () => {
        if(value==0){
            return <div className='border-[2px] border-[solid] border-[#f58ff5] rounded-lg p-2 bg-[#e6abf53e]'>
                <div className=' font-medium'>
                Buy, sell, and swap with ease
                </div>
                <div>
                Use a card or bank account to buy BTC, ETH, stablecoins, and other assets.
                </div>
            </div>
        }
        else{
            return <div className='border-[2px] border-[solid] border-[#f58ff5] rounded-lg p-2 font-medium'>
                Buy, sell, and swap with ease
            </div>
        }
    }
    const msg2 = () => {
        if(value==1){
            return <div className='border-[2px] border-[solid] border-[#f58ff5] rounded-lg p-2 bg-[#e6abf53e]'>
                <div className=' font-medium'>
                Earn rewards on your crypto
                </div>
                <div>
                Get up to 10% in annual rewards by putting your crypto to work.
                </div>
            </div>
        }
        else{
            return <div className='border-[2px] border-[solid] border-[#f58ff5] rounded-lg p-2 font-medium'>
                Earn rewards on your crypto
            </div>
        }
    }
    const msg3 = () => {
        if(value==2){
            return <div className='border-[2px] border-[solid] border-[#f58ff5] rounded-lg p-2 bg-[#e6abf53e]'>
                <div className=' font-medium'>
                Self-custody your crypto
                </div>
                <div>
                Sleep better at night knowing only you can access your funds.
                </div>
            </div>
        }
        else{
            return <div className='border-[2px] border-[solid] border-[#f58ff5] rounded-lg p-2 font-medium'>
                Self-custody your crypto
            </div>
        }
    }
    const msg4 = () => {
        if(value==3){
            return <div className='border-[2px] border-[solid] border-[#f58ff5] rounded-lg p-2 bg-[#e6abf53e]'>
                <div className=' font-medium'>
                Connect to DeFi
                </div>
                <div>
                Use dapps, collect NFTs, and unlock the power of web3.
                </div>
            </div>
        }
        else{
            return <div className='border-[2px] border-[solid] border-[#f58ff5] rounded-lg p-2 font-medium'>
                Connect to DeFi
            </div>
        }
    }
    return (
        <div className='flex justify-center mt-[170px] text-[#a347d5] items-center'>
        <div className='  w-4/5 h-[600px] bg-[#e599ef21] rounded-lg flex flex-row  px-24 py-10 '>
            
            <div className='flex flex-col justify-evenly gap-y-4 w-1/2'>
                <div className='rounded-[5px] w-1/5 bg-[#e37afd29] text-center py-2 font-medium'>Wallet</div>
                <h1 className=' text-4xl font-semibold'>Lightning-fast crypto trading</h1>
                <div onClick={()=>setValue(0)} className=' cursor-pointer'>{msg1()}</div>
                <div onClick={()=>setValue(1)} className=' cursor-pointer'>{msg2()}</div>
                <div onClick={()=>setValue(2)} className=' cursor-pointer'>{msg3()}</div>
                <div onClick={()=>setValue(3)} className=' cursor-pointer'>{msg4()}</div>
                <button className='rounded-[5px] p-[10px] bg-[#c542f8] text-[white] w-2/6'>
                    Get Started
                </button>
            </div>

            <div className='ml-16 w-[370px]'>
                {setImage()}
            </div>

        </div>
    </div>

    );
};

export default Fourthpart;
