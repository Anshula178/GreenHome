import React from 'react';

const FeaturedListing = () => {
    const listings = [
        {
          imageUrl: 'https://greenhome-next.vercel.app/_next/image?url=%2Fphotos%2Fproperty6.jpg&w=1920&q=75',
          title: '1 BHK Apartment',
          location: 'New York',
          beds: 2,
          size: '2,000',
          bath: 2
        },
        {
          imageUrl: 'https://greenhome-next.vercel.app/_next/image?url=%2Fphotos%2Fproperty5.jpg&w=1920&q=75',
          title: '2 BHK Villa',
          location: 'Los Angeles',
          beds: 2,
          size: '2,000',
          bath: 2
        },
        {
            imageUrl: '	https://greenhome-next.vercel.app/_next/image?url=%2Fphotos%2Fproperty6.jpg&w=1920&q=75',
            title: '2 BHK Villa',
            location: 'Los Angeles',
            beds: 2,
            size: '2,000',
            bath: 2
          },
          {
            imageUrl: 'https://greenhome-next.vercel.app/_next/image?url=%2Fphotos%2Fproperty5.jpg&w=1920&q=75',
            title: '1 BHK Villa',
            location: 'Los Angeles',
            beds: 2,
            size: '2,000',
            bath: 2
          },
          {
            imageUrl: '	https://greenhome-next.vercel.app/_next/image?url=%2Fphotos%2Fproperty3.jpg&w=1920&q=75',
            title: '2 BHK Villa',
            location: 'Los Angeles',
            beds: 2,
            size: '2,000',
            bath: 2
          },
          {
            imageUrl: 'https://greenhome-next.vercel.app/_next/image?url=%2Fphotos%2Fproperty5.jpg&w=1920&q=75',
            title: '1 BHK Villa',
            location: 'Los Angeles',
            beds: 2,
            size: '2,000',
            bath: 2
          }
        
      ];
  return (
    <section className="container mx-auto max-w-screen-xl mt-20  py-12 bg-white">
      <h2 className="text-3xl font-bold mb-9 text-center">FEATURED LISTINGS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={listing.imageUrl} alt="Property" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
              <p className="text-gray-600">{listing.location}</p>
              <p className="text-gray-700">{listing.beds} Beds | {listing.size} SF | {listing.bath} Bath</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">Details</button>
            </div>
           
          </div>
        ))}
      </div>
      <div className='text-center py-10'><button className='rounded-2xl bg-green-600 py-4 px-5 text-white'>View All</button></div>
    </section>
  )
};

export default FeaturedListing;
