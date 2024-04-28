import React, { useState } from 'react';

const Fifthpart = () => {
    const [value,setValue]=useState(0);

    const image=['https://www.blockchain.com/static/img/home/products/prod-exchange-fiat-currencies.png',
                    'https://www.blockchain.com/static/img/home/products/prod-exchange-matching-engine.png',
                    'https://www.blockchain.com/static/img/home/products/prod-exchange-chat-support.png',
                    'https://www.blockchain.com/static/img/home/products/ex-landing-margin-image.png'];
    const setImage = () => {
        return <img src={image[value]} alt='image'></img>
    };

    const msg1 = () => {
        if(value==0){
            return <div className='border-[2px] border-[#9a90f38e] rounded-lg p-2 bg-[#494d7916]'>
                <div className=' font-medium'>
                Trade in 3 fiat currencies
                </div>
                <div>
                The Exchange supports USD, EUR, and GBP.
                </div>
            </div>
        }
        else{
            return <div className='border-[2px] border-[#9a90f38e] rounded-lg p-2 font-medium'>
                Trade in 3 fiat currencies
            </div>
        }
    }
    const msg2 = () => {
        if(value==1){
            return <div className='border-[2px] border-[#9a90f38e] rounded-lg p-2 bg-[#494d7916]'>
                <div className=' font-medium'>
                A matching engine that can keep up with you
                </div>
                <div>
                The world’s fastest crypto matching engine, built by and for traders.
                </div>
            </div>
        }
        else{
            return <div className='border-[2px] border-[#9a90f38e] rounded-lg p-2 font-medium'>
                A matching engine that can keep up with you
            </div>
        }
    }
    const msg3 = () => {
        if(value==2){
            return <div className='border-[2px] border-[#9a90f38e] rounded-lg p-2 bg-[#494d7916]'>
                <div className=' font-medium'>
                24/7 live chat support
                </div>
                <div>
                Chat with customer support directly in the Exchange, anytime.
                </div>
            </div>
        }
        else{
            return <div className='border-[2px] border-[#9a90f38e] rounded-lg p-2 font-medium'>
                24/7 live chat support
            </div>
        }
    }
    const msg4 = () => {
        if(value==3){
            return <div className='border-[2px]  border-[#9a90f38e] rounded-lg p-2 bg-[#494d7916]'>
                <div className=' font-medium'>
                Margin Trading
                </div>
                <div>
                5x your position with margin trading
                </div>
            </div>
        }
        else{
            return <div className='border-[2px] border-[#9a90f38e] rounded-lg p-2 font-medium'>
                Margin Trading
            </div>
        }
    }
    return (
    <div className='flex justify-center mt-[100px] text-[#4747d5] items-center'>
        <div className='  w-4/5 min-h-[600px] bg-[#9191f921] rounded-lg flex flex-row  px-24 py-10 '>
            
            <div className=' pl-4 w-[500px]'>
                {setImage()}
            </div>

            <div className='flex flex-col justify-evenly gap-y-4 w-4/1'>
                <div className='rounded-[5px] w-1/5 bg-[#7a7cfd29] text-center py-2 font-medium'>Exchange</div>
                <h1 className=' text-4xl font-semibold'>Lightning-fast crypto trading</h1>
                <div onClick={()=>setValue(0)} className=' cursor-pointer'>{msg1()}</div>
                <div onClick={()=>setValue(1)} className=' cursor-pointer'>{msg2()}</div>
                <div onClick={()=>setValue(2)} className=' cursor-pointer'>{msg3()}</div>
                <div onClick={()=>setValue(3)} className=' cursor-pointer'>{msg4()}</div>
                <button className='rounded-[5px] p-[10px] bg-[#4242f8] text-[white] w-2/6'>
                    Trade Now
                </button>
            </div>

        </div>
    </div>

    );
};

export default Fifthpart;
