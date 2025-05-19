import React from 'react';
import Button from './Button';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  buttonText: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  color,
  buttonText,
  onClick,
}) => {
  return (
    <div className="bg-secondary-dark rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 border border-gray-800">
      <div 
        className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${color}`}
      >
        <Icon size={28} className="text-white" />
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
      
      <p className="text-gray-400 mb-6">
        {description}
      </p>
      
      <Button 
        variant="outline" 
        onClick={onClick} 
        className="mt-2"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ServiceCard;