// components/Footer.js
import {Link} from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sky-400 text-white p-4">




   



             <div className="mt-2 mx-0 mb-24 justify-center flex">
                <Link to="#" className="py-0 px-8 hover:text-gray-200">Home</Link>
                <Link to="#" className="py-0 px-8 no-cursor hover:text-gray-200">Features</Link>
                <Link to="#" className="py-0 px-8 hover:text-gray-200">Download</Link>

            </div>
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Promise</p>
      </div>
    </footer>
  );
};

export default Footer;
