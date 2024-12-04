import React from "react";
import Link from "next/link";
import Image from "next/image";

const IndustriesSection: React.FC = () => {
  const industries = [
    {
      href: "/industries/education",
      imgSrc: "/5.png",
      alt: "Education Solution",
      title: "Education Solution",
      description:
        "In an era where learning knows no bounds, ConceptRecall is committed to breaking down barriers with tailored digital solutions. Our aim is to make education more accessible, engaging, and impactful, ensuring that every learner has the tools they need to succeed in a rapidly evolving world.",
    },
    {
      href: "/industries/firearms-dealers-branding-services",
      imgSrc: "/5.png",
      alt: "Licensed Firearms Dealers",
      title: "Licensed Firearms Dealers",
      description:
        "Unlock the full potential of your licensed firearms dealership with ConceptRecall. We provide custom web design, development, and digital marketing solutions tailored to boost your brand visibility and drive business growth.",
    },
    {
      href: "/industries/medical",
      imgSrc: "/6.png",
      alt: "Medical Solution",
      title: "Medical Solution",
      description:
        "At ConceptRecall, we specialize in healthcare solutions that improve patient care and streamline operations. From telehealth to data analytics, our platforms optimize healthcare delivery and provide actionable insights for better outcomes.",
    },
    {
      href: "/industries/rental",
      imgSrc: "/7.png",
      alt: "Rental",
      title: "Rental",
      description:
        "Our rental solutions simplify property management and services, providing intuitive platforms for booking, payments, and maintenance. Scalable and customizable, we enhance efficiency and satisfaction for rentals of all types.",
    },
    {
      href: "/industries/automotive",
      imgSrc: "/8.png",
      alt: "Automotive",
      title: "Automotive",
      description:
        "We revolutionize the automotive industry with advanced solutions, driving efficiency and innovation while equipping vehicles with the latest technologies.",
    },
    {
      href: "/industries/ecommerce",
      imgSrc: "/9.png",
      alt: "E-Commerce",
      title: "E-Commerce",
      description:
        "We craft smooth, responsive e-commerce platforms that optimize SEO and user experience, driving sales and engagement in the digital marketplace.",
    },
  ];

  return (
    <section className="dark:bg-light-black bg-[rgb(29,29,29)] bg-opacity-100 px-5">
      <div className="section-container py-16 max-md:py-6">
        {/* Heading */}
        <div className="max-sm:w-2/3 mx-auto mb-10 max-sm:mb-6 text-center">
          <h3 className="font-raleway text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
            Industries we&apos;ve <span>excelled in</span>
          </h3>
          <p className="text-gray-600 mt-3 px-6 max-md:px-3">
            Our services are tailor-made and we are always striving to surpass your wildest expectations!
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-6 mb-10 max-sm:mb-6 mx-auto md:mx-40 ">
          {industries.map((industry, index) => (
            <Link href={industry.href} key={index} className="industry-card">
              <div className="rounded-xl shadow-lg hover:shadow-xl p-4 dark:bg-gray-800 transition duration-300 bg-black overflow-hidden  h-full w-full">
                <Image
                  src={industry.imgSrc}
                  alt={industry.alt}
                  width={50}
                  height={50}
                  className="mb-4"
                />
                <h6 className="text-lg font-bold text-white mb-2">{industry.title}</h6>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{industry.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link href="/industries">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition duration-300">
              View all industries
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
