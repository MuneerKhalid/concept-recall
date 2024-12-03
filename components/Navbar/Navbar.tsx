import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex items-center justify-between pl-48 pr-12 py-4">

      <div className="flex items-center space-x-2 ">
        <Image
          src="/logo/globe.png"
          alt="Concept Recall Logo"
          width={40}
          height={40}
          className="h-10 w-10"
        />
        <div>
          <div className="text-lg font-light leading-tight tracking-widest">
            concept<span className="text-orange-500">recall</span>
          </div>
          <div className="text-[8px] text-gray-400">beyond imagination</div>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#home" className="hover:text-orange-500">
            Home
          </Link>
          <Link href="#about" className="hover:text-orange-500">
            About us
          </Link>
          <Link href="#industries" className="hover:text-orange-500">
            Industries
          </Link>
          <Link href="#services" className="hover:text-orange-500">
            Services
          </Link>
          <Link href="#case-study" className="hover:text-orange-500">
            Case Study
          </Link>
          <Link href="#feed" className="hover:text-orange-500">
            Feed
          </Link>
          <Link href="#careers" className="hover:text-orange-500">
            Careers
          </Link>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
          Speak to an Expert
        </button>
      </div>

      <div className="flex space-x-3 bg-gray-800 rounded-[12px]">
        <Link href="#" aria-label="WhatsApp">
          <div className="p-2 hover:bg-gray-700">
            <Image
              src="/logo/whatsapp.png" 
              alt="WhatsApp"
              width={24}
              height={24}
              className="text-lg"
            />
          </div>
        </Link>
        <Link href="#" aria-label="Call">
          <div className="p-2 hover:bg-gray-700">
            <Image
              src="/logo/phone.png" 
              alt="Call"
              width={24}
              height={24}
              className="text-lg"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
