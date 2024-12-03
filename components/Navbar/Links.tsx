import React from "react";
import Link from "next/link";

const Links = () => {
  return (
    <div className="flex space-x-3">
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
  );
};

export default Links;
