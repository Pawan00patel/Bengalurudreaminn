import React from 'react';
import Button from '../ui/Button';

const CTA: React.FC = () => {
  return (    <section className="py-5 bg-primary">
      <div className="container text-center">
        <h2 className="display-4 fw-bold text-white mb-4">
          Ready to Join the Carnival?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Be part of a movement that's shaping the future of the Salesforce ecosystem. 
          Come, Network, Learn and Have Fun!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg">
            Register Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-600"
          >
            View Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;