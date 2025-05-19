import React from 'react';
import { Calculator, Shield, Clock } from 'lucide-react';
import Button from '../components/Button';
import LoanCalculator from '../components/LoanCalculator';

const MicroLoans: React.FC = () => {
  return (
    <div className="bg-secondary-dark pt-28">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Micro Loans</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Quick and easy access to small loans with minimal paperwork. Get approved in minutes and receive funds directly to your account.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-secondary p-8 rounded-xl">
            <Calculator className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Easy Application</h3>
            <p className="text-gray-400">Simple online application process with minimal documentation required.</p>
          </div>

          <div className="bg-secondary p-8 rounded-xl">
            <Shield className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Secure Process</h3>
            <p className="text-gray-400">Your data is protected with bank-level security and encryption.</p>
          </div>

          <div className="bg-secondary p-8 rounded-xl">
            <Clock className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Quick Approval</h3>
            <p className="text-gray-400">Get approved quick and recieve funds within minutes.</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <LoanCalculator />
        </div>
      </div>
    </div>
  );
};

export default MicroLoans;