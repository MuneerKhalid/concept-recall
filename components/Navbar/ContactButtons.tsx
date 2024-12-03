import React from "react";
import Link from "next/link";
import Image from "next/image";

const ContactButtons = () => {
  return (
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
  );
};

export default ContactButtons;
