import React, { useState } from 'react';

const Seventhpart = () => {
    
    const [value,setValue]=useState(0);

    const image=['https://www.blockchain.com/static/img/home/products/prod-explore-blockchains.png',
                    'https://www.blockchain.com/static/img/home/products/prod-explore-api.png',
                    'https://www.blockchain.com/static/img/home/products/prod-explore-charts.png',
                    'https://www.blockchain.com/static/img/home/products/prod-explore-prices.png'];
    const setImage = () => {
        return <img className="ml-12 h-[500px] w-[1000px]" src={image[value]} alt='image'></img>
    };

    const msg1 = () => {
        if(value==0){
            return <div className='border-[2px] border-[solid] border-[#f5da8f] rounded-lg p-2 bg-[#f5dfab3e]'>
                <div className=' font-medium'>
                Explore the top blockchains
                </div>
                <div>
                Confirm transactions, analyze the market, or simply learn more about crypto.
                </div>
            </div>
        }
        else{
            return <div className='border-[2px] border-[solid] border-[#f5da8f] rounded-lg p-2 font-medium'>
                Explore the top blockchains
            </div>
        }
    }
    const msg2 = () => {
        if(value==1){
            return <div className='border-[2px] border-[solid] border-[#f5da8f] rounded-lg p-2 bg-[#f5dfab3e]'>
                <div className=' font-medium'>
                Powerful Blockchain Data API
                </div>
                <div>
                We’ve powered exchanges, data analysts, enthusiasts, and more.
                </div>
            </div>
        }
        else{
            return <div className='border-[2px] border-[solid] border-[#f5da8f] rounded-lg p-2 font-medium'>
                Powerful Blockchain Data API
            </div>
        }
    }
    const msg3 = () => {
        if(value==2){
            return <div className='border-[2px] border-[solid] border-[#f5da8f] rounded-lg p-2 bg-[#f5dfab3e]'>
                <div className=' font-medium'>
                Industry leading charts
                </div>
                <div>
                From hashrate, to block details, to mining information, and more.
                </div>
            </div>
        }
        else{
            return <div className='border-[2px] border-[solid] border-[#f5da8f] rounded-lg p-2 font-medium'>
                Industry leading charts
            </div>
        }
    }
    const msg4 = () => {
        if(value==3){
            return <div className='border-[2px] border-[solid] border-[#f5da8f] rounded-lg p-2 bg-[#f5dfab3e]'>
                <div className=' font-medium'>
                Real-time crypto prices
                </div>
                <div>
                Get the latest prices and charts along with key market signals
                </div>
            </div>
        }
        else{
            return <div className='border-[2px] border-[solid] border-[#f5da8f] rounded-lg p-2 font-medium'>
                Real-time crypto prices
            </div>
        }
    }
    return (
        <div className='flex justify-center mt-[100px] text-[#fd8f4f] items-center'>
        <div className='  w-4/5 h-[600px] bg-[#efd99921] rounded-lg flex flex-row  px-24 py-10 '>
            
            <div className='flex flex-col justify-evenly gap-y-4 w-1/2'>
                <div className='rounded-[5px] w-1/5 bg-[#fdf27a29] text-center py-2 font-medium'>Explore</div>
                <h1 className=' text-4xl font-semibold'>Blockchain data is in our DNA</h1>
                <div onClick={()=>setValue(0)} className=' cursor-pointer'>{msg1()}</div>
                <div onClick={()=>setValue(1)} className=' cursor-pointer'>{msg2()}</div>
                <div onClick={()=>setValue(2)} className=' cursor-pointer'>{msg3()}</div>
                <div onClick={()=>setValue(3)} className=' cursor-pointer'>{msg4()}</div>
                <button className='rounded-[5px] p-[10px] bg-[#e29f3b] text-[white] w-2/6'>
                    Explore Now
                </button>
            </div>

            <div className='ml-16 w-[370px]'>
                {setImage()}
            </div>

        </div>
    </div>

    );
};

export default Seventhpart;
