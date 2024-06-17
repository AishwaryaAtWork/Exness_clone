'use client'
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { MdOutlineLanguage } from "react-icons/md";
import logo from '@/app/utils/logo.svg';
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
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

  return (
    <div className="w-full h-20 p-3 bg-white shadow-lg lg:shadow-gray-200 fixed flex items-center justify-center z-50">
      <div className="h-[80%] w-full lg:w-8/12 flex justify-between items-center">
        <div className="flex items-center gap-6 lg:px-5">
          {menuOpen ? (
            <IoMdClose
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <RxHamburgerMenu
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
          <Link href={'/'}>
          <Image src={logo} alt="logo" width={200} />
          </Link>
        </div>

        <div className="flex items-center gap-7 lg:px-5">
          <button
            className="border border-white hover:bg-gray-100 hover:border-gray-500 duration-300 lg:p-3 
              text-lg font-semibold rounded-md flex gap-3 items-center"
            onClick={() => setLangOpen((prev) => !prev)}
          >
            <MdOutlineLanguage className="text-3xl lg:text-xl" />
            <span className="hidden lg:block">EN</span>
          </button>

          <button
            className="bg-yellow-400 hover:bg-yellow-300 duration-300 py-3 px-6 text-xl 
            font-semibold rounded-md hidden lg:block"
          >
            Start now
          </button>

          <button
            className="bg-gray-100 border border-gray-100 hover:hover:border-gray-500 duration-300 py-3 px-6 
              text-xl font-semibold rounded-md hidden lg:block"
          >
            Sign in
          </button>
        </div>

        {!isMobile && (
          <div
            className={`flex flex-col bg-white border border-gray-300 rounded-md p-6 space-y-8 text-gray-700 text-xl 
              text-extrabold list-none absolute top-20 ${menuOpen ? "block" : "hidden"}`}
          >
            <Link href={'/introducing-broker-program'} >Introducing Broker Program</Link>
            <Link href={'/affiliate-program'} >Affiliate Program</Link>
            <Link href={'/loyalty-program'} >Loyality Program</Link>
            <li>Help Center</li>
          </div>
        )}

        {isMobile && (
          <div
            className={`h-screen w-screen bg-white absolute top-20 ${
              menuOpen ? "-left-0" : "-left-[100vw]"
            } z-50 p-10 
          text-gray-700 text-xl text-extrabold list-none space-y-2 transition-all ease-in-out duration-500`}
          >
            <Link href={'/introducing-broker-program'} className="py-5 border-b border-gray-400">Introducing Broker Program</Link>
            <Link href={'/affiliate-program'} className="py-5 border-b border-gray-400">Affiliate Program</Link>
            <Link href={'/loyalty-program'} className="py-5 border-b border-gray-400">Loyality Program</Link>
            <li className="py-5 border-b border-gray-400">Help Center</li>

            <div className="py-16 flex flex-col gap-6 w-full">
              <button
                className="bg-yellow-400 hover:bg-yellow-300 duration-300 py-3 px-6 text-xl 
            font-semibold rounded-md "
              >
                Start now
              </button>

              <button
                className="bg-gray-100 border border-gray-100 hover:hover:border-gray-500 duration-300 py-3 px-6 
              text-xl font-semibold rounded-md "
              >
                Sign in
              </button>
            </div>
          </div>
        )}

        <div
          className={`bg-white border border-gray-300 rounded-md py-6 text-gray-700 text-xl text-extrabold list-none
          absolute top-20 right-1 lg:right-[36%] ${
            langOpen ? "block" : "hidden"
          }`}
        >
          <li className="pb-3 hover:bg-orange-200 px-6 cursor-pointer">
            <span className="text-gray-400 pr-2">EN</span> English
          </li>
          <li className="py-3 hover:bg-orange-200 px-6 cursor-pointer">
            <span className="text-gray-400 pr-2">ES</span> Spanish
          </li>
          <li className="py-3 hover:bg-orange-200 px-6 cursor-pointer">
            <span className="text-gray-400 pr-2">FR</span> French
          </li>
          <li className="py-3 hover:bg-orange-200 px-6 cursor-pointer">
            <span className="text-gray-400 pr-2">DE</span> German
          </li>
          <li className="py-3 hover:bg-orange-200 px-6 cursor-pointer">
            <span className="text-gray-400 pr-2">ZH</span> Chinese
          </li>
          <li className="py-3 hover:bg-orange-200 px-6 cursor-pointer">
            <span className="text-gray-400 pr-2">JA</span> Japanese
          </li>
          <li className="py-3 hover:bg-orange-200 px-6 cursor-pointer">
            <span className="text-gray-400 pr-2">AR</span> Arabic
          </li>
          <li className="pt-3 hover:bg-orange-200 px-6 cursor-pointer">
            <span className="text-gray-400 pr-2">RU</span> Russian
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
