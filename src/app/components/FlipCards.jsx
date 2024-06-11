import React from 'react'
import img1 from '@/app/utils/feat/1.png'
import img2 from '@/app/utils/feat/2.png'
import img3 from '@/app/utils/feat/3.png'
import img4 from '@/app/utils/feat/4.png'
import img5 from '@/app/utils/feat/5.png'
import img6 from '@/app/utils/feat/6.png'
import Image from 'next/image'

const FlipCards = () => {

    const data = [
    {main: "Trusted global broker in over 150+ countries", img: img1,
        p1: 'Trusted global broker in over 150+ countries',
        p2: 'Website in 19 languages',
        p3: '24/7 client support in 15 languages'
    }, 
    {main: "Promotional tools and materials", img: img2,
        p1: 'We provide all the tools you need to promote our products',
        p2: 'Effective advertising banners',
        p3: 'Landing pages',
        p4: 'Videos, GIFs and logos',
        p5: 'Widgets for your website'
    }, 
    {main: "Regular payment of your profits", img: img3,
        p1: 'For Introducing Brokers, we pay your profits into your account daily',
        p2: 'For Affiliates, we pay your profits into your account daily',
        p3: 'Your profits can be withdrawn whenever you want!'
    }, 
    {main: "Detailed, real-time statistics", img: img4,
        p1: 'Find detailed reports on all client transactions in your personal area',
        p2: 'Track your performance and oversee payment history',
        p3: 'Chart how your business is growing over time'
    }, 
    {main: "Manage your business on the go", img: img5,
        p1: 'Access your Partner Personal Area direct on your mobile phone',
        p2: "Review reports, keep a track of profits, and attract new clients when you're on the go",
    }, 
    {main: "Instant withdrawal", img: img6,
        p1: 'Access your money anytime through various payment systems:',
        p2: 'WebMoney, Skrill, Perfect Money, Neteller, Wire transfer, Fasapay, Bank card, Local online banking, ChinaUnionPay, Bitcoin, Tether',
    }, 
]
  return (
    <div className='h-auto lg:h-[125vh] w-full flex flex-col items-center px-8 lg:px-12 mb-16'>
        <p className='text-4xl font-semibold text-center lg:py-6'>Why become an Exness partner?</p>
        <div className=' w-full lg:w-8/12 h-full my-10 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-10'>

    {data.map((d,i)=>(
        <div className='w-full h-[50vh] lg:h-full group perspective' key={i}>
                <div className='w-full h-full rounded-lg relative preserve-3d group-hover:my-rotate-y-180 duration-700'>
                <div className='absolute bg-gray-100/65 rounded-lg w-full h-full backface-hidden flex flex-col '>
                    <p className='text-3xl text-center font-semibold px-5 py-12'>{d.main}</p>
                    <div className='w-full h-[60%] absolute bottom-0 overflow-hidden flex-end'>
                        <Image src={d.img} alt={d.main} width={500} height={500} className='w-full h-full'/>
                    </div>
                </div>
                
                <div className='absolute bg-gray-900 rounded-lg w-full h-full my-rotate-y-180 backface-hidden py-10 px-8 text-white 
                    text-lg font-medium space-y-6'>
                    <p>{d.p1}</p>
                    <p>{d.p2}</p>
                    <p>{d.p3}</p>
                    <p>{d.p4}</p>
                    <p>{d.p5}</p>
                </div>
            </div>
        </div>
    ))}    

        </div>
    </div>
  )
}

export default FlipCards