import React from "react";
import ServiceCard from "./ServiceCard";
import { services, Service } from "./services";

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 max-md:py-6 min-h-screen">
      <div className="section-container mx-auto px-4 max-w-5xl">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h3 className="text-3xl font-bold mb-4">
            Award-winning{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-text">
              Services we provide
            </span>
          </h3>
          <p className="text-lg">
            Our services are tailor-made, and we are always striving to surpass
            your wildest expectations!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {services.map((service: Service, index) => (
            <ServiceCard
              key={index}
              iconSrc={service.iconSrc}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a href="/services">
            <button className="bg-orange-500 h-10 rounded-lg px-5 hover:bg-orange-600">
              View all services
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
