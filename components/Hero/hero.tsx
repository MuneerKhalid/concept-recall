import React from 'react';

function HeroSection() {
  return (
    <div
      className="bg-cover h-[calc(100vh-75px)] max-lg:h-[calc(100vh-66px)] max-sm:h-[calc(100vh-66px)] background-blend-mode-overlay bg-size-cover bg-center bg-black bg-opacity-99 flex justify-center "
      style={{ backgroundImage: 'url(/detail-hero-banner.svg)' }}
    >
      <div className="section-container max-w-[350px] sm:max-w-[450px] md:max-w-[585px] lg:max-w-[900px] h-full">
        <div className="grid h-full mx-auto grid-cols-1">
          <div className="flex flex-col justify-center max-w-screen-lg m-auto py-0 max-sm:py-8 align-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:5xl font-bold   text-center mb-4 typography bg-auto font-raleway text-white leading-relaxed tracking-wide">
              Revolutionizing Marketing for <br/>
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-text">
                 Digital Advancement
              </span>
            </h1>
            <p className="text-center text-icons-grey w-full mx-auto max-sm:w-full typography bg-auto text-white md:text-[14px] sm:text-[11px] text-xs">
              ConceptRecall takes pride in helping our clients achieve massive success, increase revenue, and take their businesses to new heights. Our strategies to catapult your business are simple yet powerful. We enjoy a distinguished reputation as a customer-oriented marketing agency, boasting 95.5% happy clients.
            </p>
            <div className="flex items-center justify-center flex-wrap"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;