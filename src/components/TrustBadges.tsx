import React from 'react';
import { ShieldCheck, Lock, Award, CreditCard } from 'lucide-react';

const TrustBadge: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="flex items-center">
      <div className="mr-4 text-primary">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const TrustBadges: React.FC = () => {
  return (
    <section className="py-10 bg-secondary-dark border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TrustBadge 
            icon={<ShieldCheck size={32} />}
            title="Secured & Protected"
            description="Your data is encrypted and secured"
          />
          
          <TrustBadge 
            icon={<Lock size={32} />}
            title="SSL Secure Payment"
            description="Your payments are secured with SSL"
          />
          
          <TrustBadge 
            icon={<Award size={32} />}
            title="Quality Service"
            description="Committed to customer satisfaction"
          />
          
          <TrustBadge 
            icon={<CreditCard size={32} />}
            title="Multiple Payment Options"
            description="Flexible and convenient payment methods"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;