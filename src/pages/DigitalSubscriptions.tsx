import React from 'react';
import { Music, Youtube, Share2 } from 'lucide-react';
import Button from '../components/Button';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-20 -right-20 w-40 h-40 text-primary/10 animate-float-slow">
        <Music size={160} />
      </div>
      <div className="absolute top-40 -left-10 w-32 h-32 text-primary/10 animate-float">
        <Youtube size={128} />
      </div>
      <div className="absolute bottom-20 right-10 w-24 h-24 text-primary/10 animate-float-fast">
        <Share2 size={96} />
      </div>
    </div>
  );
};

const DigitalSubscriptions: React.FC = () => {
  return (
    <div className="bg-secondary-dark pt-28 relative">
      <FloatingElements />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Digital Subscriptions</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Access premium digital services at discounted rates. Bundle your favorite platforms and save more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-secondary p-8 rounded-xl border border-gray-800">
            <Music className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Music Streaming</h3>
            <p className="text-gray-400">Premium access to Spotify with high-quality audio.</p>
          </div>

          <div className="bg-secondary p-8 rounded-xl border border-gray-800">
            <Youtube className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Video Streaming</h3>
            <p className="text-gray-400">Ad-free YouTube experience with background play.</p>
          </div>

          <div className="bg-secondary p-8 rounded-xl border border-gray-800">
            <Share2 className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Family Sharing</h3>
            <p className="text-gray-400">Share your subscriptions with up to 6 family members.</p>
          </div>
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg">Subscribe Now</Button>
        </div>
      </div>
    </div>
  );
};

export default DigitalSubscriptions;