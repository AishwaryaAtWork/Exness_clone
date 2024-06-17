import Image from 'next/image';
import React from 'react'
import { BiSupport } from 'react-icons/bi';
import { FaRegStar } from 'react-icons/fa';
import { LuAtSign } from 'react-icons/lu';
import aff1 from '@/app/utils/affiliate/aff1.svg'
import aff2 from '@/app/utils/affiliate/aff2.svg'
import aff3 from '@/app/utils/affiliate/aff3.svg'
import award1 from '@/app/utils/affiliate/award1.svg'
import { FaArrowRightLong } from "react-icons/fa6";

const AffiliateContent = () => {
    const affiliate = [1,2,3,4,5,6,7 ,8]
  return (
    <>
    <div className='h-auto w-full lg:w-8/12 my-5 flex flex-col items-center py-6 '>
    <p className='text-4xl font-semibold py-5'>What we offer</p>
    <div className='h-auto lg:h-[55vh] w-[90%] lg:w-[75%] my-10 bg-white rounded-lg shadow-lg shadow-gray-200 flex flex-col 
                justify-between px-8 py-5 hover:-translate-y-5 hover:shadow-gray-500 hover:shadow-2xl duration-500'>
                
                <div className='flex flex-col items-center py-5'>
                <p className='text-3xl font-bold text-center'>We pay for first-time deposits (CPA)</p>

                </div>

                <div className='text-left text-lg text-gray-600 py-6 lg:pb-auto space-y-3'>
                    <li >Up to $1850 based on the country, platform, and the size of deposit your referral makes</li>
                    <li>Minimum first-time deposit is $10</li>
                    <li>We accept traffic from more than 130 countries</li>
                    <li>Daily payouts</li>
                    <li>Extra bonuses for the best performance</li>
                </div>

                <div className='flex flex-col items-center justify-between text-center h-[35%]'>

                    <button className="bg-yellow-400 hover:bg-yellow-300 duration-300 py-3 px-6 text-xl 
                    font-semibold rounded-md my-6 lg:my-auto" >Learn more</button>
                </div>
            </div>
            
    </div>

    <div className='h-auto w-full lg:w-8/12 my-5 flex flex-col items-center py-6 '>
    <p className='text-4xl font-semibold py-5'>What we offer</p>

    <div className='w-full h-[120vh] space-y-10 my-6'>
        <div className='h-[48%] w-full grid grid-cols-2 grid-rows-2 gap-8'>
            {affiliate.slice(0,4).map((_,i)=>(
                <div className='w-full h-full bg-gray-100 rounded-lg p-10 flex items-center gap-6 overflow-hidden' key={i}>
                    <FaRegStar className='text-7xl'/>
                    <p className='w-[80%] text-2xl font-bold'>We're a trusted market leader - Exness brokers are regulated by 
                        FSA, CySEC, FCA, FSCA, FSC, FCS, CMA</p>
                </div>
            ))}
        </div>
        <div className='h-[46%] w-full overflow-hidden bg-gray-100 rounded-lg p-12 flex flex-col items-center justify-between'>
            <div className='flex flex-col items-center'>
            <p className='text-3xl font-bold my-8'>Various payment systems</p>
            <div className=' flex gap-6'>
                {affiliate.slice(0,6).map((_,i)=>(
                    <Image src={aff1} alt='img' width={200} key={i}/>
                ))}
            </div>
            </div>
            <div className='flex flex-col items-center'>
            <p className='text-3xl font-bold my-8'>Seamless integration with all major trackers</p>
            <div className=' flex gap-6'>
                {affiliate.slice(0,6).map((_,i)=>(
                    <Image src={aff2} alt='img' width={150} key={i}/>
                ))}
            </div>
            </div>
            
            
        </div>
    </div>
    </div>

    <div className='h-auto w-full lg:w-8/12 my-5 flex flex-col items-center py-6 '>
    <p className='text-4xl font-semibold py-5'>Our awards</p>

    <div className='flex gap-7 my-5'>
    {affiliate.slice(0,5).map((_,i)=>(
            <Image alt='awards' src={award1} width={200} key={i}/>
        ))}
    </div>
    </div>

    <div className='h-auto w-full my-5 flex flex-col items-center py-6 bg-gray-100'>
        <div className='w-full lg:w-8/12 h-[58vh] flex flex-col items-center py-10'>
        <p className='text-4xl font-semibold py-5'>How to get started</p>

        <div className='flex gap-6 items-center mt-16'>
            <div className=' flex flex-col items-center justify-between gap-10 relative'>
                <Image src={aff3} alt='affiliate' width={120}/>
                <p className='text-3xl font-semibold cursor-pointer hover-trigger'>You direct the traffic</p>

                <div className='absolute -bottom-40 hover-content'>
                    <div className='bg-white w-[20vw] p-7 text-gray-800 rounded-lg shadow-lg shadow-gray-200 relative '>
                        <p>Simply place your affiliate link on any web platform and direct clients to register</p>
                        <div className='w-7 h-7 bg-white absolute -top-4 left-[9vw] rotate-45'></div>
                    </div>
                </div>
            </div>
            <FaArrowRightLong className='text-5xl'/>
            <div className=' flex flex-col items-center justify-between gap-10 relative'>
                <Image src={aff3} alt='affiliate' width={120}/>
                <p className='text-3xl font-semibold cursor-pointer hover-trigger'>You direct the traffic</p>

                <div className='absolute -bottom-40 hover-content'>
                    <div className='bg-white w-[20vw] p-7 text-gray-800 rounded-lg shadow-lg shadow-gray-200 relative '>
                        <p>Simply place your affiliate link on any web platform and direct clients to register</p>
                        <div className='w-7 h-7 bg-white absolute -top-4 left-[9vw] rotate-45'></div>
                    </div>
                </div>
            </div>
            <FaArrowRightLong className='text-5xl'/>
            <div className=' flex flex-col items-center justify-between gap-10 relative'>
                <Image src={aff3} alt='affiliate' width={120}/>
                <p className='text-3xl font-semibold cursor-pointer hover-trigger'>You direct the traffic</p>

                <div className='absolute -bottom-40 hover-content'>
                    <div className='bg-white w-[20vw] p-7 text-gray-800 rounded-lg shadow-lg shadow-gray-200 relative '>
                        <p>Simply place your affiliate link on any web platform and direct clients to register</p>
                        <div className='w-7 h-7 bg-white absolute -top-4 left-[9vw] rotate-45'></div>
                    </div>
                </div>
            </div>
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

export default AffiliateContent