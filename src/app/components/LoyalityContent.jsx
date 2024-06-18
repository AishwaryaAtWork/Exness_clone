import Image from 'next/image'
import React from 'react'
import loy1 from '@/app/utils/loyalities/loy1.png'
import loy2 from '@/app/utils/loyalities/loy2.png'
import loy3 from '@/app/utils/loyalities/loy3.png'
import { FiLink } from "react-icons/fi";
import { LuAtSign } from 'react-icons/lu';
import { BiSupport } from 'react-icons/bi';

const LoyalityContent = () => {
    const loyality = [1,2,3,4]
  return (
    <>
        <div className='w-full h-auto lg:h-[80vh] py-8 px-4 lg:p-8 flex flex-col lg:flex-row items-center justify-center gap-5'>
            {loyality.slice(0,3).map((_,i)=>(
                <div className='w-full lg:w-[22%] lg:h-[90%] bg-gray-100 rounded-lg p-4 lg:p-8' key={i}>
                <p className='text-3xl font-semibold '>The choice is yours</p>
                <p className='text-lg py-4 lg:py-10'>All prizes in our loyalty program have a cash alternative. So choose your preferred option.</p>
                <Image src={loy1} alt='loyality' width={550}/>
            </div>
            ))}

        </div>

        <div className='w-full h-auto bg-gray-100 my-8 flex flex-col items-center p-5 lg:p-16'>
        <p className='text-2xl lg:text-4xl font-semibold text-center'>Here’s how our loyalty program works</p>

        <div className='w-full h-auto lg:w-8/12 lg:h-[33vh] grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 gap-8 mt-10 '>
            
            {loyality.map((_,i)=>(
                <div className='bg-white h-full w-full rounded-lg p-6 space-y-8' key={i}>
                <div className='space-y-4'>
                    <FiLink className='text-purple-500 text-4xl'/>
                    <p className='text-3xl font-bold'>Sign up</p>
                </div>
                <p>Register now to get your partner link and use it to introduce clients to Exness.</p>
            </div>
            ))}

        </div>
        </div>

        <div className='w-full h-auto lg:w-8/12 lg:h-[60vh] my-5 flex flex-col lg:flex-row justify-between items-center '>
            <div className='w-[95%] lg:w-[48%] h-full flex flex-col gap-5 justify-between'>
                <div className='w-full h-[45%] bg-gray-100 rounded-lg p-5 lg:p-8 flex justify-between'>
                  <div className='w-[70%] lg:w-[40%] space-y-4'>
                  <p className='text-3xl font-bold'>2018</p>
                  <p>Partner Loyalty Program was launched</p>
                  </div>
                  <Image src={loy2} alt='loyality' width={250} />
                </div>

                <div className='w-full h-[45%] bg-gray-100 rounded-lg p-5 lg:p-8 flex flex-row-reverse gap-2 lg:gap-0 justify-between'>
                  <div className='w-[70%] lg:w-[40%] space-y-4'>
                  <p className='text-3xl font-bold'>2018</p>
                  <p>Partner Loyalty Program was launched</p>
                  </div>
                  <Image src={loy2} alt='loyality' width={250} />
                </div>
            </div>

            <div className='w-[95%] lg:w-[46%] h-full flex flex-col gap-5 lg:gap-0 lg:flex-row py-5 lg:py-0 justify-between'>
                <div className='h-full w-full lg:w-[45%] bg-gray-100 rounded-lg p-5 lg:p-8 flex lg:flex-col items-center 
                lg:items-start justify-between'>
                  <div className='space-y-4'>
                  <p className='text-3xl font-bold'>2,000+</p>
                  <p>Partners have received more than 1 prize</p>
                  </div>
                  <Image src={loy3} alt='loyality' width={280} />
                </div>
                <div className='h-full w-full lg:w-[45%] bg-gray-100 rounded-lg p-5 lg:p-8 flex flex-row-reverse lg:flex-col-reverse items-center 
                lg:items-start justify-between'>
                  <div className='space-y-4'>
                  <p className='text-3xl font-bold'>2,000+</p>
                  <p>Partners have received more than 1 prize</p>
                  </div>
                  <Image src={loy3} alt='loyality' width={280} />
                </div>
            </div>
        </div>
        
        <div className='w-full lg:w-8/12 h-auto my-8 lg:my-20 flex flex-col lg:flex-row justify-between px-6 lg:px-8'>
            <div className='w-full lg:w-[40%] pb-8 lg:pb-0 text-base lg:text-lg overflow-clip'>
                <p>If you haven't found the answer to your question, feel free to contact our support.</p>
            </div>

            <div className='w-full lg:w-[50%] flex flex-col lg:flex-row lg:items-center gap-10'>
                <div className='flex gap-3 items-center'>
                    <div className='p-4 bg-yellow-400 rounded-full text-2xl text-black'>
                        <BiSupport />
                    </div>
                    <p className='cursor-pointer text-lg '>Live Chat</p>
                </div>
                
                <div className='flex gap-3 items-center'>
                    <div className='p-4 bg-yellow-400 rounded-full text-2xl text-black'>
                        <LuAtSign />
                    </div>
                    <p className='cursor-pointer text-lg '>partnership@exness.com</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoyalityContent