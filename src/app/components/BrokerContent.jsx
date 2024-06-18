import Image from 'next/image'
import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { FaArrowRightLong } from 'react-icons/fa6'
import { LuAtSign } from 'react-icons/lu'
import { FaRegStar } from 'react-icons/fa'
import aff1 from '@/app/utils/affiliate/aff1.svg'
import aff3 from '@/app/utils/affiliate/aff3.svg'
import DraggableContent from '@/app/components/DraggableContent'

const BrokerContent = () => {
    const affiliate = [1,2,3,4,5,6,7 ,8]
  return (
    <>

    <DraggableContent />

    <div className='h-auto w-full lg:w-8/12 my-5 flex flex-col items-center py-6 '>
    <p className='text-3xl lg:text-4xl font-semibold py-5 text-center'>Why become an Introducing Broker?</p>

    <div className='w-full min-h-[80vh] space-y-10 my-6'>
        <div className='h-auto w-full grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-8'>
            {affiliate.slice(0,4).map((_,i)=>(
                <div key={i} className='w-full h-full bg-gray-100 rounded-lg p-10 space-y-8'>
                <p className='text-3xl font-bold'>Detailed, real-time statistics</p>
                <div className='flex items-center gap-6 overflow-hidden' >
                    <FaRegStar className='text-4xl'/>
                    <p className='w-[80%] text-xl'>We're a trusted market leader - Exness brokers are regulated by 
                        FSA, CySEC, FCA, FSCA, FSC, FCS, CMA</p>
                </div>
                </div>
            ))}
        </div>
        <div className='h-auto w-full overflow-hidden bg-gray-100 rounded-lg p-12 flex flex-col items-center justify-between'>
            <div className='flex flex-col items-center'>
            <p className='text-3xl font-bold my-5 text-center'>Various payment systems</p>
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-7'>
                {affiliate.slice(0,6).map((_,i)=>(
                    <Image src={aff1} alt='img' width={200} key={i}/>
                ))}
            </div>
            </div>
          
        </div>
    </div>
    </div>
    <div className='h-auto w-full my-5  flex-col items-center py-6 bg-gray-100 hidden lg:flex'>
        <div className='w-full lg:w-8/12 h-[58vh] flex flex-col items-center py-10'>
        <p className='text-4xl font-semibold py-5'>How to start earning...</p>

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

export default BrokerContent