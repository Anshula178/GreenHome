import React from 'react';

const HappyClients = () => {
  return (
    <section className="bg-customColor py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">HAPPY CLIENTS</h2>
        <p className="text-gray-700 text-xl max-w-3xl mx-auto mb-8 font-serif">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type scrambled.
        </p>
        <div className="flex items-center justify-center space-x-8 mb-12">
          
          <div>
            <p className="text-lg font-semibold">Evan Sebastian</p>
            <p className="text-gray-600">Founder of Acme Inc</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
