import React from 'react'
import { TbCircleNumber1, TbCircleNumber2 } from "react-icons/tb";

const OfferCards = () => {
  return (
    <div className='h-auto w-full lg:w-8/12 my-5 lg:my-12 flex flex-col items-center py-6 '>
        <p className='text-4xl font-semibold'>What we offer</p>

        <div className=' w-full flex flex-col lg:flex-row items-center justify-center gap-10 py-12'>

            <div className='h-auto lg:h-[70vh] w-[90%] lg:w-[45%] bg-white rounded-lg shadow-lg shadow-gray-200 flex flex-col 
                items-center justify-between px-8 py-5 hover:-translate-y-5 hover:shadow-gray-500 hover:shadow-2xl duration-500'>
                
                <div className='flex flex-col items-center'>
                <TbCircleNumber1 className='text-gray-400 text-5xl my-5 font-light'/>
                <p className='text-3xl font-bold text-center'>Introducing Broker Program</p>

                <p className='text-4xl font-semibold text-gray-600 text-center py-6 lg:pt-12 lg:pb-auto'>You get up to 40% of our revenue</p>
                </div>

                <div className='flex flex-col items-center justify-between text-center h-[35%]'>
                    <p className='text-gray-500 text-lg'>Earn up to 40% of our revenue from every active trader you refer to us. 
                    If they're trading, you're earning.</p>

                    <button className="bg-yellow-400 hover:bg-yellow-300 duration-300 py-3 px-6 text-xl 
                    font-semibold rounded-md my-6 lg:my-auto" >Learn more</button>
                </div>
            </div>
            
            <div className='h-auto lg:h-[70vh] w-[90%] lg:w-[45%] bg-white rounded-lg shadow-lg shadow-gray-200 flex flex-col 
                items-center justify-between px-8 py-5 hover:-translate-y-5 hover:shadow-gray-500 hover:shadow-2xl duration-500'>
                
                <div className='flex flex-col items-center'>
                <TbCircleNumber2 className='text-gray-400 text-5xl my-5 font-light'/>
                <p className='text-3xl font-bold text-center'>Affiliate Program</p>

                <p className='text-4xl font-semibold text-gray-600 text-center py-6 lg:pt-12 lg:pb-auto'>You get up to $1850 for every client</p>
                </div>

                <div className='flex flex-col items-center justify-between text-center h-[35%]'>
                    <p className='text-gray-500 text-lg'>We are leading the industry with scheduled and attractive payouts. We 
                    offer a range of commission plans, so you can choose the best fit for you.</p>

                    <button className="bg-yellow-400 hover:bg-yellow-300 duration-300 py-3 px-6 text-xl 
                    font-semibold rounded-md my-6 lg:my-auto" >Learn more</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default OfferCards