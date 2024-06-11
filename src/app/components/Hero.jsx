'use client'
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import hero from "@/app/utils/hero.png";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef();

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

  const data = [
    { title: "119 000", subtitle: "Partners" },
    { title: "$1 BLN", subtitle: "Paid to the partners" },
    { title: "$2.9 MLN", subtitle: "Top partner payout per month" },
  ];

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className=" w-full lg:w-8/12 h-[68vh] lg:rounded-b-lg mt-20 flex flex-col items-center overflow-hidden relative"
      name="hero"
    >
      <Image
        src={hero}
        alt="hero"
        height={500}
        width={500}
        className="w-full h-full"
      />
      <div
        className="h-full w-full absolute top-0 bg-gradient-to-r from-gray-900 via-gray-900/55 
            to-gray-900 opacity-95 z-40 hidden lg:block"
      ></div>
      <div
        className="h-full w-full absolute top-0 bg-gradient-to-b from-gray-900/55 
            to-gray-900 opacity-95 z-40 lg:hidden"
      ></div>

      <div className="h-full w-full absolute top-0 flex flex-col lg:flex-row z-40 py-8 lg:py-0 items-center">
        <div className="w-full lg:w-[68%] h-full px-5 lg:px-10 flex flex-col items-center lg:items-start justify-center">
          <p className="text-white font-semibold text-4xl lg:text-5xl text-center lg:text-left">
            Exness Partnership programs
          </p>

          <p
            className="text-white lg:font-semibold text-lg py-10 lg:w-[60%] w-full 
                    text-center lg:text-left"
          >
            Earn a stable income by introducing clients to a global market
            leader
          </p>

          <button
            className="bg-yellow-400 hover:bg-yellow-300 duration-300 py-3 px-6 text-xl 
                    font-semibold rounded-md"
          >
            Start now
          </button>
        </div>
        {isMobile ? (
          <div className="w-full h-auto flex items-center justify-between px-5">
            <IoIosArrowBack
              className="text-white text-xl cursor-pointer"
              onClick={scrollLeft}
            />

            <div
              className="w-[70vw] h-full p-5 flex items-center justify-center z-40 text-white overflow-hidden"
              ref={carouselRef}
            >
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full text-center whitespace-nowrap"
                  >
                    <p className="font-bold text-2xl">{item.title}</p>
                    <p>{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>

            <IoIosArrowForward
              className="text-white text-xl cursor-pointer"
              onClick={scrollRight}
            />
          </div>
        ) : (
          <div className="w-[35%] h-full px-10 flex flex-col items-center justify-center z-40 text-white space-y-16">
            <div className="w-[65%]">
              <p className="font-bold text-3xl">119 000</p>
              <p className=" text-xl">Partners</p>
            </div>
            <div className="w-[65%]">
              <p className="font-bold text-3xl">$1 BLN</p>
              <p className=" text-xl">Paid to the partners</p>
            </div>
            <div className="w-[65%]">
              <p className="font-bold text-3xl">$2.9 MLN</p>
              <p className=" text-xl">Top partner payout per month</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
