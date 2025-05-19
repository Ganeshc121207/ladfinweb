import React from 'react';
import Button from './Button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-secondary text-white rounded-xl p-8 border border-gray-800">
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <Phone size={20} className="mr-4 mt-1 text-primary" />
          <div>
            <p className="font-medium text-white">Phone</p>
            <p className="text-gray-400">+91 99806 88296</p>
            <p className="text-sm text-gray-500 mt-1">Sun-Sat: 24/7</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail size={20} className="mr-4 mt-1 text-primary" />
          <div>
            <p className="font-medium text-white">Email</p>
            <p className="text-gray-400">support@laddu.com</p>
            <p className="text-sm text-gray-500 mt-1">24/7 support</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <MapPin size={20} className="mr-4 mt-1 text-primary" />
          <div>
            <p className="font-medium text-white">Address</p>
            <p className="text-gray-400">LADDU Headquarters,</p>
            <p className="text-gray-400">LADDU Admin centre</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Clock size={20} className="mr-4 mt-1 text-primary" />
          <div>
            <p className="font-medium text-white">Business Hours</p>
            <p className="text-gray-400">sunday-Saturday:24/7</p>
          </div>
        </div>
      </div>
      
      <div className="mt-10">
        <h4 className="font-medium mb-4 text-white">Connect With Us</h4>
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 rounded-full bg-secondary-dark flex items-center justify-center hover:bg-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          
          <a href="#" className="w-10 h-10 rounded-full bg-secondary-dark flex items-center justify-center hover:bg-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </a>
          
          <a href="#" className="w-10 h-10 rounded-full bg-secondary-dark flex items-center justify-center hover:bg-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          
          <a href="#" className="w-10 h-10 rounded-full bg-secondary-dark flex items-center justify-center hover:bg-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions or need assistance? Our team is here to help you.
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 rounded-lg bg-secondary-dark border border-gray-700 text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 rounded-lg bg-secondary-dark border border-gray-700 text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-secondary-dark border border-gray-700 text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 rounded-lg bg-secondary-dark border border-gray-700 text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 rounded-lg bg-secondary-dark border border-gray-700 text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="micro-loans">Micro Loans</option>
                  <option value="grocery-delivery">Grocery Delivery</option>
                  <option value="digital-subscriptions">Digital Subscriptions</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-secondary-dark border border-gray-700 text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;