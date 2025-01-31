import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 font-roboto">
      <header className="text-green-900 py-4 text-center">
        <h1 className="text-3xl font-bold">Why Choose Green Peak Farms</h1>
      </header>
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap justify-around">
          {/* Fresh Produce Card */}
          <div className="bg-white border border-gray-200 rounded-lg w-full md:w-1/3 m-4 p-6 text-center">
            <i className="fas fa-leaf text-4xl text-green-800 mb-4"></i>
            <h3 className="text-2xl font-bold text-green-800 mb-2">Fresh, Organic Produce</h3>
            <p className="text-gray-600">
              We grow fresh, organic produce free from harmful chemicals, ensuring the best quality for you and your family.
            </p>
          </div>

          {/* Expert Farming Techniques Card */}
          <div className="bg-white border border-gray-200 rounded-lg w-full md:w-1/3 m-4 p-6 text-center">
            <i className="fas fa-tractor text-4xl text-green-800 mb-4"></i>
            <h3 className="text-2xl font-bold text-green-800 mb-2">Expert Farming Techniques</h3>
            <p className="text-gray-600">
              Our team uses the latest and most sustainable farming techniques to ensure a thriving, eco-friendly farm.
            </p>
          </div>

          {/* Sustainable Practices Card */}
          <div className="bg-white border border-gray-200 rounded-lg w-full md:w-1/3 m-4 p-6 text-center">
            <i className="fas fa-water text-4xl text-green-800 mb-4"></i>
            <h3 className="text-2xl font-bold text-green-800 mb-2">Sustainable Practices</h3>
            <p className="text-gray-600">
              We are committed to sustainability, from water conservation to eco-friendly packaging, to protect the planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
