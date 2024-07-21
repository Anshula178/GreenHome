import React from 'react';
import FeaturedListing from './FeaturedListing';
import HappyClients from './HappyClients';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
    <div className="bg-customColor h-dvh mb-40">
      <section className="bg-customColor text-black py-20">
        <div className="container mx-auto text-center mt-24">
          <h1 className="text-4xl font-bold mb-4">FIND THE PROPERTY FOR</h1>
          <h2 className="text-4xl font-bold mb-8">RENT OR SALE</h2>
          <div className="flex justify-center">
            <button className="bg-white text-gray-800 py-3 px-6 rounded-lg mr-4">Buy</button>
            <button className="bg-white text-gray-800 py-3 px-6 rounded-lg mr-4">Location</button>
            <button className="bg-white text-gray-800 py-3 px-6 rounded-lg mr-4">Property Type</button>
            <button className="bg-white text-gray-800 py-3 px-6 rounded-lg">Budget</button>
          </div>
          <button className="bg-green-600 text-white py-3 px-8 rounded-3xl mt-8">Search</button>
        </div>
      </section>
      </div>
     <FeaturedListing/>
     <HappyClients/>
     <Footer/>
     </>
     
   
  );
};

export default HomePage;
