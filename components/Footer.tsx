// components/Footer.js
import {Link} from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sky-400 text-white p-4">




   



             <div className="mt-2 mx-0 mb-24 justify-center flex">
                <a  className="py-0 px-8 hover:text-gray-200 cursor-pointer">Home</a>
                <a  className="py-0 px-8 no-cursor hover:text-gray-200 cursor-pointer">Features</a>
                <a  className="py-0 px-8 hover:text-gray-200 cursor-pointer">Download</a>

            </div>
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Promise</p>
      </div>
    </footer>
  );
};

export default Footer;
