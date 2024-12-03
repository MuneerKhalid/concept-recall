import React from "react";

const StatsSection: React.FC = () => {
  return (
    <section>
      <div className="bg-[rgb(29,29,29)]">
        <div className="section-container py-7 max-md:py-3">
          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-6 px-56 max-md:px-6 justify-items-center">
            <div className="p-4 max-md:text-center border-r border-neutral-500 max-md:border-0">
              <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-orange-500 font-semibold mb-2">
                10+
              </h3>
              <p className="text-white text-sm md:text-md lg:text-lg xl:text-xl ">
                Years of Experience
              </p>
            </div>
            <div className="p-4 max-md:text-center border-r border-neutral-500 max-md:border-0">
              <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-orange-500 font-semibold mb-2">
                116+
              </h3>
              <p className="text-white text-sm md:text-md lg:text-lg xl:text-xl ">
                Project Completed
              </p>
            </div>
            <div className="p-4 max-md:text-center border-r border-neutral-500 max-md:border-0">
              <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-orange-500 font-semibold mb-2">
                100+
              </h3>
              <p className="text-white text-sm md:text-md lg:text-lg xl:text-xl ">
                Happy Customers
              </p>
            </div>
            <div className="p-4 max-md:text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-orange-500 font-semibold mb-2">
                12M+
              </h3>
              <p className="text-white text-sm md:text-md lg:text-lg xl:text-xl ">
                Total Revenue
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
