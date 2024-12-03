import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
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
  );
};

export default Logo;
