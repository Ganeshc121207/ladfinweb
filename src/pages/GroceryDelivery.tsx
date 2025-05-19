import React from 'react';
import { ShoppingBag, Truck, Clock } from 'lucide-react';
import Button from '../components/Button';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-20 -right-20 w-40 h-40 text-primary/10 animate-float-slow">
        <ShoppingBag size={160} />
      </div>
      <div className="absolute top-40 -left-10 w-32 h-32 text-primary/10 animate-float">
        <Truck size={128} />
      </div>
      <div className="absolute bottom-20 right-10 w-24 h-24 text-primary/10 animate-float-fast">
        <Clock size={96} />
      </div>
    </div>
  );
};

const GroceryDelivery: React.FC = () => {
  return (
    <div className="bg-secondary-dark pt-28 relative">
      <FloatingElements />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Grocery Delivery</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Fresh groceries delivered to your doorstep. Choose from thousands of products and get them delivered within hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-secondary p-8 rounded-xl border border-gray-800">
            <ShoppingBag className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Wide Selection</h3>
            <p className="text-gray-400">Choose from thousands of fresh and quality products.</p>
          </div>

          <div className="bg-secondary p-8 rounded-xl border border-gray-800">
            <Truck className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Fast Delivery</h3>
            <p className="text-gray-400">Same-day delivery available for orders placed before 1 PM.</p>
          </div>

          <div className="bg-secondary p-8 rounded-xl border border-gray-800">
            <Clock className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Flexible Scheduling</h3>
            <p className="text-gray-400">Choose your preferred delivery time slot.</p>
          </div>
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg">Start Shopping</Button>
        </div>
      </div>
    </div>
  );
};

export default GroceryDelivery;