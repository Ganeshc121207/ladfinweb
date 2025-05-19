import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  items: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleItem = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-6 text-white">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-700 rounded-lg overflow-hidden bg-secondary"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left font-medium flex justify-between items-center hover:bg-secondary-dark transition-colors text-gray-300"
            >
              <span>{item.question}</span>
              {openIndex === index ? (
                <ChevronUp size={20} className="text-primary" />
              ) : (
                <ChevronDown size={20} className="text-gray-500" />
              )}
            </button>
            
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-400">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const loanFAQs = [
    {
      question: "How much can I borrow with a micro loan?",
      answer: "Our micro loans range from ₹1,000 to ₹500,000 depending on your plan and eligibility. New customers typically start with lower limits that increase over time as you build a repayment history with us."
    },
    {
      question: "How quickly can I get approved?",
      answer: "Our approval process is typically completed within minutes. Once approved, funds are usually deposited into your account within 24 hours, though many customers receive their funds within just a few hours."
    },
    {
      question: "Do you perform credit checks?",
      answer: "No, we don't perform traditional credit checks. Our approval process is based on various factors including your income, employment status, and banking history."
    },
    {
      question: "What are the repayment terms?",
      answer: "Repayment terms vary by plan, ranging from 1 month to 60 months. We offer flexible payment options with the ability to make early repayments without penalties."
    }
  ];
  
  const groceryFAQs = [
    {
      question: "What areas do you deliver to?",
      answer: "We currently deliver to major metropolitan areas and their surrounding suburbs. You can check if we deliver to your area by entering your zip code on our delivery page."
    },
    {
      question: "How does same-day delivery work?",
      answer: "Orders placed before 1 PM are eligible for same-day delivery (depending on your plan). You'll receive your groceries by 9 PM on the same day."
    },
    {
      question: "What if I'm not home for delivery?",
      answer: "You can choose a safe place for your delivery, or our delivery personnel can wait for up to 5 minutes. If you're not available, we'll follow your preferences set in the app."
    },
    {
      question: "How do you ensure food quality and freshness?",
      answer: "We partner with premium local suppliers and use temperature-controlled delivery bags. All perishable items come with a freshness guarantee - if you're not satisfied, we'll refund you."
    }
  ];
  
  const subscriptionFAQs = [
    {
      question: "How do the bundled subscriptions work?",
      answer: "We provide access to premium digital services at discounted rates by bundling them together. You'll receive login credentials for each service included in your plan."
    },
    {
      question: "Can I change my subscription plan?",
      answer: "Yes, you can upgrade or downgrade your subscription plan at any time. Changes will take effect at the start of your next billing cycle."
    },
    {
      question: "How does family sharing work?",
      answer: "Family plans allow sharing with up to 6 family members living in the same household. Each person gets their own personalized account with individual recommendations and history."
    },
    {
      question: "Are there any contracts or commitments?",
      answer: "No, all our subscription plans are month-to-month with no long-term contracts. You can cancel anytime."
    }
  ];
  
  return (
    <section id="faq" className="py-20 bg-secondary-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about LADDU's services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <FAQSection title="Micro Loans" items={loanFAQs} />
          <FAQSection title="Grocery Delivery" items={groceryFAQs} />
          <FAQSection title="Digital Subscriptions" items={subscriptionFAQs} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;