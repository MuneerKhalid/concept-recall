import React from "react";
import Image from "next/image"; 

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 max-md:py-6 min-h-screen">
      <div className="section-container">
        <div className="max-sm:w-2/3 max-xs:w-full xs:w-full mx-auto mb-10 max-sm:mb-6">
          <h3 className="text-3xl font-bold text-center mb-4">
            Award-winning
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-text">
              Services we provide
            </span>
          </h3>
          <p className="text-center text-lg mb-6">
            Our services are tailor-made and we are always striving to surpass
            your wildest expectations!
          </p>
        </div>

        <div className="grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-6 mb-10 max-sm:mb-6m mx-40 my-20">
          <a href="/services/mobile-app-development">
            <div className="service-card">
              <Image
                alt="Tailored Mobile"
                loading="lazy"
                width={45}
                height={45}
                src="/logo/1.png"
                style={{ color: "transparent" }}
              />
              <h6 className="typography bg-auto font-bold text-lg leading-loose my-3">Tailored Mobile</h6>
              <span className="typography line-clamp-6 bg-auto ali">
                In a digital-first world, our tailored mobile app solutions are
                your gateway to engaging your audience like never before. We
                combine cutting-edge technology with user-centric design to
                create apps that not only look great but also perform flawlessly
                across iOS and Android. Our approach ensures your app stands out
                in a crowded marketplace, driving growth and user loyalty with
                every interaction. From initial concept to final launch, we're
                with you every step of the way, making sure your mobile app
                exceeds expectations.
              </span>
            </div>
          </a>
          <a href="/services/web-app-development">
            <div className="service-card">
              <Image
                alt="Customized Web"
                loading="lazy"
                width={45}
                height={45}
                src="/logo/2.png"
                style={{ color: "transparent" }}
              />
              <h6 className="typography bg-auto font-bold text-lg leading-loose my-3">Customized Web</h6>
              <span className="typography line-clamp-6 bg-auto">
                Our web app development offerings are designed to provide
                seamless, robust, and scalable solutions tailored to your unique
                business needs. We leverage the latest technologies to build web
                applications that offer engaging user experiences, streamline
                operations, and drive business growth. Whether you're looking to
                improve customer engagement or optimize internal processes, our
                team delivers solutions that combine functionality with
                exceptional design, ensuring your web app meets today's high
                standards for performance and usability.
              </span>
            </div>
          </a>
          <a href="/services/ecommerce-development">
            <div className="service-card">
              <Image
                alt="E-Commerce"
                loading="lazy"
                width={45}
                height={45}
                src="/logo/3.png"
                style={{ color: "transparent" }}
              />
              <h6 className="typography bg-auto font-bold text-lg leading-loose my-3">E-Commerce</h6>
              <span className="typography bg-auto line-clamp-6">
                Transform your online store with our cutting-edge e-commerce
                development solutions. Our team specializes in creating
                intuitive and responsive websites that provide a seamless
                shopping experience on both desktops and mobile devices. We use
                the latest technologies to ensure your online store is fast,
                secure, and scalable. From eye-catching designs to smooth
                navigation and checkout processes, we focus on every detail that
                drives customer satisfaction and loyalty. Our solutions are
                tailored to meet your unique business needs, whether you’re a
                startup or an established enterprise. Let us help you elevate
                your online presence and boost your sales with our comprehensive
                e-commerce development services.
              </span>
            </div>
          </a>
          <a href="/services/ui-ux-design">
            <div className="service-card">
              <Image
                alt="UI/UX"
                loading="lazy"
                width={45}
                height={45}
                src="/logo/4.png"
                style={{ color: "transparent" }}
              />
              <h6 className="typography bg-auto font-bold text-lg leading-loose my-3">UI/UX</h6>
              <span className="typography bg-auto line-clamp-6">
                Our UI/UX design solutions are crafted to provide exceptional
                user experiences. We focus on creating intuitive interfaces that
                engage users and enhance their interaction with your app or
                website. Our designs are both aesthetically pleasing and
                functionally efficient, ensuring a seamless user journey from
                start to finish.
              </span>
            </div>
          </a>
        </div>

        <div className="flex justify-center">
          <a className="next-link text gradient" href="/services">
            <button className="bg-orange-500 h-10 rounded-lg w-45 px-5" aria-disabled="false">
              View all services
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
