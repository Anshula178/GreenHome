import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT INFO</h3>
            <p className="text-sm mb-4">
              70 Bowman St.<br />
              <br/>
              South Windsor, CT 06074
            </p>
            <p className="text-sm mb-4">
              Email: <a href="mailto:info@greenhome.com" className="hover:text-gray-400">info@greenhome.com</a>
            </p>
            <p className="text-sm">
              Phone: <a href="tel:+586101262" className="hover:text-gray-400">+586 101 262</a>
            </p>
          </div>
          
          {/* Navigations */}
          <div>
            <h3 className="text-lg font-bold mb-4">NAVIGATIONS</h3>
            <ul className="list-none space-y-2">
              {['Home', 'About us', 'Listing', 'Testimonials', 'Property', 'FAQ', 'Contact Us'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-gray-400">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Subscribe to Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">SUBSCRIBE TO NEWSLETTER</h3>
            <p className="text-sm mb-4">Enter your email address & get daily newsletter</p>
            <form>
              <input
                type="email"
                className="w-full p-2 mb-4 rounded-lg bg-gray-800 border border-gray-700 text-white"
                placeholder="Email address"
              />
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full">Subscribe</button>
            </form>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">FOLLOW US</h3>
            <div className="flex flex-col space-x-4 mb-2">
              {['Facebook', 'Instagram', 'Twitter', 'GitHub', 'Dribbble'].map((platform, index) => (
                <a key={index} href="#" className="hover:text-gray-400 mb-2">{platform}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-sm">&copy;2024 Greenhome. All Rights Reserved. Made by Web3Templates</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
