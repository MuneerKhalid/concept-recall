import React from "react";
import Image from "next/image";

type ServiceCardProps = {
  iconSrc: string;
  title: string;
  description: string;
  link: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ iconSrc, title, description, link }) => {
  return (
    <a href={link} className="bg-[rgb(29,29,29)] bg-opacity-100 text-white rounded-xl p-5 max-w-102 sm:max-w-64 md:max-w-96 xl:h-[400px]">
      <div className="flex mb-2">
        <Image
          src={iconSrc}
          alt={title}
          width={40}
          height={40}
          className="mb-2"
        />
      </div>

      <h6 className="text-lg font-semibold  mb-2">{title}</h6>

      <p className="text-md text-white">{description}</p>
    </a>
  );
};

export default ServiceCard;
