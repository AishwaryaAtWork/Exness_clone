'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';

const DraggableContent = () => {
    const [clients, setClients] = useState(150);
    const [income, setIncome] = useState(12000);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth <= 768); 
      }
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const handleRangeChange = (event) => {
      const newValue = parseInt(event.target.value, 10);
      const newClients = 150 - newValue;
      const newIncome = newValue * 800;
  
      setClients(newClients);
      setIncome(newIncome);
    };
  return (
    <>
    {isMobile ? (
        <div className='h-auto w-full lg:w-8/12 my-6 flex flex-col items-center justify-between py-6 relative '>

        <div className='w-[95%] h-auto space-y-5'>
            <p className='font-semibold text-2xl  text-center'>The more clients you sign up, the greater your income</p>
            <p className='text-gray-500 text-md  text-center'>Drag the bar to see the average monthly 
            income you can make based on the total amount of traders you introduce to Exness.</p>
        </div>
        <div className='w-[95%] h-auto px-3 py-8'>
            <div className='flex justify-between gap-7 items-center'>
                <div className='w-[55%]'>
                    <p className='text-xl font-bold'>{clients}</p>
                    <p className='font-semibold'>total accumulated clients</p>
                </div>
                <FaArrowRightLong  className='text-xl'/>
                <div className='w-[45%] text-right'>
                    <p className='font-bold text-xl'>{income}</p>
                    <p className='font-semibold'>your income per month</p>
                </div>
            </div>
            <div className='relative h-[30vw]'>
            <div className='w-[90vw] h-[8vh] absolute bottom-6 right-0 triangle-div'></div>
            <input type='range' className='cursor-grab range-draggable absolute bottom-5 right-0 ' min={0} max={100} step={1} 
                onChange={handleRangeChange}/>
            <div className='flex list-none justify-between text-lg h-10 w-[90vw] absolute -bottom-12 right-0'>
                <li>10</li>
                <li>100</li>
                <li>200</li>
                <li>300</li>
                <li>400</li>
            </div>
            </div>
        </div>
       
    </div>
    ):(
        <div className='h-auto w-full lg:w-8/12 my-12 flex items-center justify-between py-6 relative '>

        <div className='w-[50%] h-[30vh] flex flex-col justify-between'>
            <p className='font-semibold text-4xl'>The more clients you sign up, the greater your income</p>
            <div className='flex gap-6 justify-between relative'>
                <div className='w-[15%] absolute -bottom-8 '>
                    <p className='text-4xl font-bold'>{clients}</p>
                    <p className='font-semibold'>total accumulated clients</p>
                </div>
            <div className='w-[25vw] h-[8vh] absolute bottom-6 right-0 triangle-div'></div>
            <input type='range' className='cursor-grab range-draggable absolute bottom-5 right-0' min={0} max={100} step={1} 
                onChange={handleRangeChange}/>
            <div className='flex list-none justify-between text-xl h-10 w-[25vw] absolute -bottom-12 right-0'>
                <li>10</li>
                <li>100</li>
                <li>200</li>
                <li>300</li>
                <li>400</li>
            </div>
            </div>
        </div>
    
        <FaArrowRightLong  className='text-3xl absolute bottom-8 left-[56%]'/>
        <div className='w-[35%] h-[30vh] flex flex-col justify-between'>
            <p className='text-gray-500 text-xl'>Drag the bar to see the average monthly 
                income you can make based on the total amount of traders you introduce to Exness.</p>
                <div>
                    <p className='font-bold text-4xl'>{income}</p>
                    <p className='font-semibold'>your income per month</p>
                </div>
        </div>
        </div>
    )}
    </>
  )
}

export default DraggableContent