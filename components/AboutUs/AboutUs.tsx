import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUsSection: React.FC = () => {
  return (
    <section>
      <div className="bg-black dark:bg-secondary-dark px-5">
        <div className="section-container py-16 max-md:py-6">
          {/* Heading */}
          <div className="md:w-2/3 mx-auto mb-6 text-center max-w-xl ">
            <h3 className="font-raleway text-4xl font-bold text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text">
              About Us
            </h3>
            <p className="text-white mt-3 text-sm">
              We are a team of seasoned creators who upgrade your business
              processes with modern technology and advancements. These numbers
              speak volumes about what we have achieved on our journey so far.
            </p>
          </div>

          {/* Content */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-7 max-w-[1100px]">
              {/* Video Section */}
              <div className="relative h-[200px] lg:h-[350px] xl:h-[350px] rounded-xl overflow-hidden shadow-lg">
                <video
                  src="https://cdn.conceptrecall.com/about-us/concept.mp4"
                  poster="homeBg.webp"
                  className="w-full h-full object-cover"
                  controls
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <button className="w-16 h-16 bg-gray-900 bg-opacity-50 rounded-full flex justify-center items-center">
                    <Image
                      src="/play.svg"
                      alt="Play Button"
                      width={80}
                      height={80}
                    />
                  </button>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center">
                <p className="text-white mb-6">
                  We believe in surpassing expectations and satisfying our
                  clientele to form lasting alliances. What makes this target
                  attainable is thinking out of the box. Our team fuses creativity
                  with technical expertise to foster impactful results.
                </p>
                <Link href="/contact-us">
                  <button className="bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 max-w-[130px]">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
