import React from 'react';
import { CreditCard, ShoppingBag, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Simplifying your financial journey with integrated solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Link to="/micro-loans" className="group bg-secondary-dark rounded-2xl p-8 border border-gray-800 hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <CreditCard className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Micro Loans</h3>
            <p className="text-gray-400">
              Quick access to small loans with minimal documentation. Get approved in minutes.
            </p>
          </Link>
          
          <Link to="/grocery-delivery" className="group bg-secondary-dark rounded-2xl p-8 border border-gray-800 hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <ShoppingBag className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Grocery Delivery</h3>
            <p className="text-gray-400">
              Fresh groceries delivered to your doorstep within hours. Quality guaranteed.
            </p>
          </Link>
          
          <Link to="/digital-subscriptions" className="group bg-secondary-dark rounded-2xl p-8 border border-gray-800 hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Music className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Digital Subscriptions</h3>
            <p className="text-gray-400">
              Premium digital services at discounted rates. Bundle and save more.
            </p>
          </Link>
        </div>

        
      </div>
    </section>
  );
};

export default Services;