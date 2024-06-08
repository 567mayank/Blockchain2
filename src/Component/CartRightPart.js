// import React from 'react'

// function CartRightPart() {
//   return (
//     <>
//         <div className=' w-[25%] pr-8 py-11' style={{backgroundColor:styles.backgroundColor}}>

//             <div className='border-[2px] border-[solid] rounded-xl text-center p-2 pt-6 flex flex-col gap-y-5 
//                 pb-8 mt-9' style={{borderColor:styles.txt,backgroundColor:styles.bg2col,color:styles.txt}}>   

//                 <div className=' text-3xl font-bold text-[#4586ee]'>BUY</div>

//                 <div className=' flex flex-row items-center gap-4 justify-center'>
//                     <img className=" h-12"src={imageUrl} alt='crypto'></img>
//                     <div className=' text-3xl'>{value[0]}</div>
//                     <div className=' text-2xl text-gray-500'>{value[1]}</div>
//                 </div>

//                 <div className=' flex flex-col'>
//                     <div className=' text-2xl'>${parseFloat(value[2]).toFixed(10)}</div>
//                     {value[3] < 0 ? (
//                     <p className='text-red-800 text-xl'>{parseFloat(value[3]).toFixed(5)}%</p>
//                     ) : (
//                     <p className='text-green-500 text-xl'>{parseFloat(value[3]).toFixed(5)}%</p>
//                     )}
//                 </div>

//                 <div className='flex flex-row gap-3'>
//                     <label className=' text-xl'>Total Quantity</label>
//                     <input className="border-[2px] border-[solid] border-[black] rounded-xl pl-3 text-black"type="text" value={Quantity} onChange={e=>{
//                     setQuantity(e.target.value)
//                     }}></input>
//                 </div>

//                 <div className=' flex flex-row'>
//                     <div className=' text-xl'>Estimated Total:  $ </div>
//                     <div className=' text-xl'> {parseFloat(Quantity*value[2]).toFixed(8)}</div>
//                 </div>

//                 <div className=' flex justify-center'>
//                     <button className=' bg-blue-800 w-3/5 py-2 text-2xl text-white rounded-md'>Proceed To Buy</button>
//                 </div>

//             </div>

//         </div>
//     </>
//   )
// }

// export default CartRightPart
