
import React from 'react';

const Sponsors = () => {
  return (
    <section className="py-12 bg-tennessee-lightgrey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-tennessee-grey mb-8 text-center">Our Sponsors</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-[250px] h-auto">
            <img 
              src="/lovable-uploads/6b8aba9c-7bc9-428e-9c93-c37ac220c561.png" 
              alt="Onward Physical Therapy"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-[250px] h-auto">
            <img 
              src="/lovable-uploads/9ae09722-d258-44b2-b7b9-8c333043aaec.png" 
              alt="Xul Beer Co"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        
        <p className="text-center mt-12 text-tennessee-grey">
          Interested in becoming a sponsor? <a href="mailto:tennmultimate@gmail.com" className="text-tennessee-orange font-bold hover:underline">Contact us</a>.
        </p>
      </div>
    </section>
  );
};

export default Sponsors;
