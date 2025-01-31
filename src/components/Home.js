import React from 'react';
import HeroSection from '../components/Hero';
import ProductSection from '../components/Products';
import WhyUs from './WhyUs';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ProductSection />
      <WhyUs/>
    </div>
  );
};

export default HomePage;
