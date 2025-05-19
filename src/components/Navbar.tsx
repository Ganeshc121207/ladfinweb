import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/micro-loans', label: 'Micro Loans' },
    { path: '/grocery-delivery', label: 'Grocery Delivery' },
    { path: '/digital-subscriptions', label: 'Digital Subscriptions' },
    { path: '/about', label: 'About Us' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">LADDU</Link>
        
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-gray-300 hover:text-primary transition-colors ${
                location.pathname === link.path ? 'text-primary' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
            Login / Sign Up
          </button>
        </div>
      </div>
      
      <div 
        className={`lg:hidden bg-secondary absolute w-full left-0 transition-all duration-300 shadow-lg ${
          isOpen ? 'max-h-[1000px] opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-gray-300 hover:text-primary py-2 border-b border-gray-700 ${
                location.pathname === link.path ? 'text-primary' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors self-start">
            Login / Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar