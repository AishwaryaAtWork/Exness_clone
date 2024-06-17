import React from 'react'
import tools from '@/app/utils/Tools.webp'
import { BiSupport } from "react-icons/bi";
import { LuAtSign } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { TbArrowBigUpLines } from "react-icons/tb";
import { TbWallet } from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
import Image from 'next/image';

const MainContent = () => {
  return (
    <>
    <div className='w-screen h-auto flex flex-col items-center lg:py-8'>
        <div className="w-full lg:w-8/12 ">
            <p className='text-4xl font-semibold text-center px-12'>Why clients will love us...</p>

            <div className='my-16 flex flex-col gap-7 lg:gap-12 text-xl lg:text-[1.7rem] px-5 lg:px-10'>
                <div className='flex items-center gap-4 lg:gap-12'>
                    <FaRegStar className='text-7xl lg:text-4xl'/>
                    <p className=' font-bold'>Trusted market leader – Exness brokers are licensed by FSA, CySEC, FCA, FSCA, FSC, FCS, CMA</p>
                </div>
                
                <div className='flex items-center gap-3 lg:gap-12'>
                    <TbArrowBigUpLines className='text-4xl'/>
                    <p className=' font-bold'>Highest forex leverage in the market</p>
                </div>
                
                <div className='flex items-center gap-4 lg:gap-12'>
                    <TbWallet  className='text-4xl'/>
                    <p className=' font-bold'>Instant deposits and withdrawals</p>
                </div>
                
                <div className='flex items-center gap-4 lg:gap-12'>
                    <BiSupport  className='text-4xl'/>
                    <p className=' font-bold'>24/7 client support in 15 languages</p>
                </div>
                
                <div className='flex items-center gap-4 lg:gap-12'>
                    <FaRegCreditCard className='text-5xl lg:text-4xl'/>
                    <p className=' font-bold'>Wide variety of payment systems with zero commission</p>
                </div>
                
                <div className='flex items-center gap-4 lg:gap-12'>
                    <LuGraduationCap  className='text-5xl lg:text-4xl'/>
                    <p className=' font-bold'>New {" "}
                        <span className='text-blue-500 hover:underline cursor-pointer'>Help Center</span> 
                        {" "}for newbies and experienced traders</p>
                </div>
            </div>
        </div>
    </div>

    <div className='h-[100vh] w-screen relative overflow-hidden lg:flex flex-col items-center hidden'>
        <div className='h-[50%] w-full bg-gradient-to-b from-gray-100/15 to-gray-200 absolute top-0'></div>
        <div className='h-[50%] w-full bg-gradient-to-b from-white to-gray-100/35 absolute bottom-0'></div>
        <Image src={tools} alt='tools' height={1000} width={1200} className='z-40 absolute top-[15%]'/>

        <div className='w-[25vh] h-auto absolute z-40 text-lg top-[18%] left-[20%]'>
            <p className='text-bold'>Social Trading Mobile Application</p>
            <p className='text-gray-500'>iOS, Android</p>
        </div>
        <div className='w-[25vh] h-auto absolute z-40 text-lg top-[16%] left-[40%]'>
            <p className='text-bold'>Trader's Personal Area</p>
            <p className='text-gray-500'>iOS, Android</p>
        </div>
        <div className='w-[25vh] h-auto absolute z-40 text-lg bottom-[5%] left-[30%]'>
            <p className='text-bold'>Exness Trader Mobile Application</p>
            <p className='text-gray-500'>iOS, Android</p>
        </div>
        <div className='w-[25vh] h-auto absolute z-40 text-lg bottom-[8%] right-[25%]'>
            <p className='text-bold'>Professional Web Terminal</p>
            <p className='text-gray-500'>Desktop, iOS, Android</p>
        </div>

        <div className='w-8/12 h-full flex flex-col items-center py-8'>
        <p className='text-4xl font-semibold z-40 '>Tools and services you can offer clients</p>

        </div>
    </div>

    <div className='h-auto lg:h-[90vh] w-screen bg-gray-100/35 py-10 flex flex-col items-center'>

        <div className='w-full lg:w-[63vw] h-[72%] bg-gray-200/65 rounded-lg px-1 py-4 lg:p-6 flex flex-col lg:flex-row items-center'>
            <div className='w-full lg:w-[30%] h-full p-3 lg:p-6 text-center lg:text-left'>
            <p className='text-4xl font-semibold py-1 lg:py-6  '>Top partner payouts</p>
            <p className='text-lg pt-3 '>Previous month</p>
            </div>
            
            <div className='w-full lg:w-[70%] h-full lg:px-6 lg:py-10'>
                <div className='border-b-2 border-gray-800 w-full flex items-center justify-between text-2xl lg:text-3xl font-semibold py-4'>
                    <p className='text-gray-600'>Top Asia Partner</p>
                    <p>$878 300</p>
                </div>
                <div className='border-b-2 border-gray-800 w-full flex items-center justify-between text-2xl lg:text-3xl font-semibold py-4'>
                    <p className='text-gray-600'>Middle East Expert Partner</p>
                    <p>$369 050</p>
                </div>
                <div className='border-b-2 border-gray-800 w-full flex items-center justify-between text-2xl lg:text-3xl font-semibold py-4'>
                    <p className='text-gray-600'>IB Partner</p>
                    <p>$189 880</p>
                </div>
                <div className='border-b-2 border-gray-800 w-full flex items-center justify-between text-2xl lg:text-3xl font-semibold py-4'>
                    <p className='text-gray-600'>Vietnam's Partner</p>
                    <p>$176 900</p>
                </div>
                <div className='border-b-2 border-gray-800 w-full flex items-center justify-between text-2xl lg:text-3xl font-semibold py-4'>
                    <p className='text-gray-600'>China's Top Partner</p>
                    <p>$155 600</p>
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
    </div>
    <div className="bg-gray-200/60 w-full py-5 lg:py-10 flex items-center justify-center">
            <div className="w-full lg:w-8/12 flex flex-col lg:flex-row items-center lg:justify-between px-6">
            <p className="text-4xl text-gray-600 font-semibold text-center lg:text-left py-8 lg:py-1">Become an Exness Partner today!</p>
            <button className="bg-yellow-400 hover:bg-yellow-300 duration-300 py-3 px-6 text-xl 
            font-semibold rounded-md">
            Start now
          </button>
            </div>
        </div>
    </>
  )
}

export default MainContent;