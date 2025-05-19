import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

interface PlanFeature {
  title: string;
  available: boolean;
}

interface Plan {
  id: string;
  title: string;
  price: number;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
}

interface PricingTableProps {
  title: string;
  plans: Plan[];
}

const PricingTable: React.FC<PricingTableProps> = ({ title, plans }) => {
  return (
    <div className="mt-12 mb-12">
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`border rounded-xl p-8 relative ${
              plan.popular ? 'border-primary shadow-lg' : 'border-gray-200'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
            )}
            
            <h4 className="text-xl font-semibold mb-2">{plan.title}</h4>
            <div className="mb-4">
              <span className="text-3xl font-bold">${plan.price}</span>
              <span className="text-gray-500">/month</span>
            </div>
            
            <p className="text-gray-600 mb-6">{plan.description}</p>
            
            <div className="space-y-3 mb-8">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  {feature.available ? (
                    <Check size={20} className="text-green-500 mr-3" />
                  ) : (
                    <div className="w-5 h-5 mr-3" />
                  )}
                  <span className={feature.available ? 'text-gray-700' : 'text-gray-400'}>
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
            
            <Button 
              variant={plan.popular ? 'primary' : 'outline'} 
              className="w-full"
            >
              Choose Plan
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'loans' | 'grocery' | 'subscription'>('loans');
  
  const microLoansPlans = [
    {
      id: 'personal',
      title: 'Personal',
      price: 3.99,
      description: 'Small personal loans for everyday needs',
      features: [
        { title: 'Loans up to $500', available: true },
        { title: 'Instant approval', available: true },
        { title: '7-day repayment', available: true },
        { title: 'No credit check', available: true },
        { title: 'Flexible payment options', available: false },
      ],
    },
    {
      id: 'plus',
      title: 'Plus',
      price: 6.99,
      description: 'Larger loans with flexible repayment options',
      popular: true,
      features: [
        { title: 'Loans up to $2,000', available: true },
        { title: 'Instant approval', available: true },
        { title: '30-day repayment', available: true },
        { title: 'No credit check', available: true },
        { title: 'Flexible payment options', available: true },
      ],
    },
    {
      id: 'business',
      title: 'Business',
      price: 9.99,
      description: 'Business loans for growth and expansion',
      features: [
        { title: 'Loans up to $5,000', available: true },
        { title: 'Instant approval', available: true },
        { title: '60-day repayment', available: true },
        { title: 'No credit check', available: true },
        { title: 'Flexible payment options', available: true },
      ],
    },
  ];
  
  const groceryPlans = [
    {
      id: 'basic',
      title: 'Basic',
      price: 5.99,
      description: 'Essential grocery delivery for individuals',
      features: [
        { title: 'Free delivery on orders $50+', available: true },
        { title: 'Same-day delivery', available: false },
        { title: 'Weekly delivery schedule', available: true },
        { title: 'Basic product selection', available: true },
        { title: 'No minimum order', available: false },
      ],
    },
    {
      id: 'family',
      title: 'Family',
      price: 9.99,
      description: 'Comprehensive grocery delivery for families',
      popular: true,
      features: [
        { title: 'Free delivery on all orders', available: true },
        { title: 'Same-day delivery', available: true },
        { title: 'Weekly delivery schedule', available: true },
        { title: 'Extended product selection', available: true },
        { title: 'No minimum order', available: true },
      ],
    },
    {
      id: 'premium',
      title: 'Premium',
      price: 14.99,
      description: 'Priority grocery delivery with premium options',
      features: [
        { title: 'Free delivery on all orders', available: true },
        { title: 'Same-day delivery', available: true },
        { title: 'Anytime delivery schedule', available: true },
        { title: 'Complete product selection', available: true },
        { title: 'Priority customer support', available: true },
      ],
    },
  ];
  
  const subscriptionPlans = [
    {
      id: 'solo',
      title: 'Solo',
      price: 7.99,
      description: 'Digital subscriptions for individuals',
      features: [
        { title: 'YouTube Premium', available: true },
        { title: 'Spotify Individual', available: true },
        { title: 'Netflix Basic', available: false },
        { title: 'Disney+ Basic', available: false },
        { title: 'Family sharing', available: false },
      ],
    },
    {
      id: 'duo',
      title: 'Duo',
      price: 12.99,
      description: 'Digital subscriptions for couples',
      popular: true,
      features: [
        { title: 'YouTube Premium', available: true },
        { title: 'Spotify Duo', available: true },
        { title: 'Netflix Standard', available: true },
        { title: 'Disney+ Basic', available: false },
        { title: 'Duo sharing', available: true },
      ],
    },
    {
      id: 'family',
      title: 'Family',
      price: 19.99,
      description: 'Digital subscriptions for the whole family',
      features: [
        { title: 'YouTube Premium', available: true },
        { title: 'Spotify Family', available: true },
        { title: 'Netflix Standard', available: true },
        { title: 'Disney+ Premium', available: true },
        { title: 'Family sharing (up to 6)', available: true },
      ],
    },
  ];
  
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple & Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for you. All plans come with a 14-day money-back guarantee.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <button
              onClick={() => setActiveTab('loans')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === 'loans' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Micro Loans
            </button>
            <button
              onClick={() => setActiveTab('grocery')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === 'grocery' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Grocery Delivery
            </button>
            <button
              onClick={() => setActiveTab('subscription')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === 'subscription' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Digital Subscriptions
            </button>
          </div>
        </div>
        
        <div className="mt-8">
          {activeTab === 'loans' && (
            <PricingTable title="Micro Loan Plans" plans={microLoansPlans} />
          )}
          
          {activeTab === 'grocery' && (
            <PricingTable title="Grocery Delivery Plans" plans={groceryPlans} />
          )}
          
          {activeTab === 'subscription' && (
            <PricingTable title="Digital Subscription Plans" plans={subscriptionPlans} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;