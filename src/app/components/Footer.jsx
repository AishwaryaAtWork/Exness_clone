'use client'
import React from "react";
import logo from "@/app/utils/logo.svg";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { LuArrowUpToLine } from "react-icons/lu";
import { Link as SLink } from "react-scroll";

const Footer = () => {
  return (
    <>
        <div className="bg-gray-200/60 w-full py-5 lg:py-10 flex items-center justify-center">
            <div className="w-full lg:w-8/12 flex flex-col lg:flex-row items-center lg:justify-between px-6">
            <p className="text-4xl text-gray-600 font-semibold text-center lg:text-left py-8 lg:py-1">Become an Exness Partner today!</p>
            <button className="bg-yellow-400 hover:bg-yellow-300 duration-300 py-3 px-6 text-xl 
            font-semibold rounded-md">
            Start now
          </button>
            </div>
        </div>

      <div className="h-auto lg:h-auto w-full lg:w-8/12 px-4 lg:px-8 lg:py-16 py-8">
        <div className="h-auto lg:h-12 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          <Image src={logo} alt="logo" width={200} />

          <div className="flex items-center gap-12 text-gray-400 text-4xl">
            <FaLinkedin className="cursor-pointer hover:text-gray-300 duration-300" />
            <FaInstagram className="cursor-pointer hover:text-gray-300 duration-300" />
            <FaFacebook className="cursor-pointer hover:text-gray-300 duration-300" />
            <FaYoutube className="cursor-pointer hover:text-gray-300 duration-300" />
          </div>

          <SLink to="hero" smooth={true} offset={-100} >
          <div className="flex items-center gap-3 hover:text-gray-400 cursor-pointer duration-300 ">
            <LuArrowUpToLine className="text-2xl" />
            <p className="text-xl font-semibold">Back to top</p>
          </div>
          </SLink> 
        </div>

        <div className="py-8 lg:py-16 text-xs lg:text-sm text-justify lg:text-left space-y-3 lg:space-y-5">
          <p className="leading-normal">
          E​xness (SC) Ltd ​is a Securities Dealer registered in Seychelles with registration number 8423606-1 
          and authorised by the Financial Services Authority (FSA) with licence number SD025. The registered 
          office of E​xness (SC) Ltd is at 9A CT House, 2nd floor, Providence, Mahe, Seychelles.
          </p>

          <p className="leading-normal">
          Exness B.V. is a Securities Intermediary registered in Curaçao with registration number 148698(0) 
          and authorised by the Central Bank of Curaçao and Sint Maarten (CBCS) with licence number 0003LSI. 
          The registered office of Exness B.V. is at Emancipatie Boulevard Dominico F. “Don” Martina 31, Curaçao.
          </p>

          <p className="leading-normal">
          Exness (VG) Ltd is authorised by the Financial Services Commission (FSC) in BVI with registration 
          number 2032226 and investment business licence number SIBA/L/20/1133. The registered office of Exness 
          (VG) Ltd is at Trinity Chambers, P.O. Box 4301, Road town, Tortola, BVI.
          </p>

          <p className="leading-normal">
          Exness ZA (PTY) Ltd is authorised by the Financial Sector Conduct Authority (FSCA) in South Africa as a 
          Financial Service Provider (FSP) with registration number 2020/234138/07 and FSP number 51024.
          </p>

          <p className="leading-normal">
          Exness (KE) Limited is registered in Kenya with registration number PVT-LRUDJJB and is regulated 
          by the Capital Markets Authority in Kenya as a Non-dealing Online Foreign Exchange Broker under 
          license number 162. The registered office of Exness (KE) Limited is at the Courtyard, 2nd Floor, General Mathenge
           Road, Westlands, Nairobi.
          </p>

          <p className="leading-normal">
          The entities above are duly authorized to operate under the Exness brand and trademarks.
          </p>

          <p className="leading-normal">
          Risk Warning: Our services relate to complex derivative products (CFDs) which are traded outside
          an exchange. These products come with a high risk of losing money rapidly due to leverage and thus are not
          appropriate for all investors. Under no circumstances shall Exness have any liability to any person or 
          entity for any loss or damage in whole or part caused by, resulting from, or relating to any investing activity. Learn more.
          </p>

          <p className="leading-normal">
          The information on this website does not constitute investment advice or a 
          recommendation or a solicitation to engage in any investment activity.
          </p>
          
          <p className="leading-normal">
          The information on this website may only be copied with the express written permission of Exness.
          </p>

          <p>&copy;2008-2024. Exness</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
