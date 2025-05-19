import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    position: "Small Business Owner",
    content: "LADDU's micro loan service helped me expand my business when traditional banks wouldn't give me a chance. The process was simple, and I received the funds within 24 hours!",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5
  },
  {
    id: 2,
    name: "Raj Patel",
    position: "Software Engineer",
    content: "I've been using LADDU's grocery delivery service for 6 months now. The quality of products and delivery speed is exceptional. Their subscription model saves me both time and money.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5
  },
  {
    id: 3,
    name: "Ananya Desai",
    position: "College Student",
    content: "The digital subscription bundle is perfect for students like me! I get YouTube Premium and Spotify at almost half the regular price. LADDU has made premium services affordable.",
    avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Customers Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with LADDU's services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-secondary-dark rounded-2xl p-8 md:p-12 shadow-lg border border-gray-800">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={i < testimonials[activeIndex].rating ? "text-primary fill-primary" : "text-gray-600"} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-300 text-lg italic mb-6">
                  "{testimonials[activeIndex].content}"
                </p>
                
                <div>
                  <h4 className="font-semibold text-xl text-white">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-400">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute flex space-x-4 bottom-4 right-4">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft size={20} className="text-gray-400" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  i === activeIndex ? 'bg-primary' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;