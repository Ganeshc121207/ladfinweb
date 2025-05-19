import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-secondary pt-28 pb-20 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary"></div>
        <div className="absolute -left-20 top-40 w-60 h-60 rounded-full bg-primary"></div>
        <div className="absolute right-40 bottom-20 w-40 h-40 rounded-full bg-primary"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Financial Freedom Simplified
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              LADDU provides micro-loans, grocery delivery, and digital subscriptions - all in one platform to make your life easier and more affordable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                Learn More
              </Button>
            </div>
            
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex">
                <span className="text-4xl font-bold text-primary">10+</span>
                <span className="text-sm ml-2 mt-2 text-gray-300">Active<br/>Users</span>
              </div>
              <div className="flex">
                <span className="text-4xl font-bold text-primary">100%</span>
                <span className="text-sm ml-2 mt-2 text-gray-300">Customer<br/>Satisfaction</span>
              </div>
              <div className="flex">
                <span className="text-4xl font-bold text-primary">3+</span>
                <span className="text-sm ml-2 mt-2 text-gray-300">Seamless<br/>Services</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent opacity-30 rounded-lg"></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;