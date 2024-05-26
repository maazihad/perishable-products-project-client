import React from 'react';

const About = () => {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
         <div className="p-8 bg-white shadow-md rounded-lg text-center w-full max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">About Us</h1>
            <p className="text-lg mb-6">
               Welcome to our company! We are dedicated to providing the best service and solutions to our customers. Our team of professionals is committed to excellence and innovation.
            </p>
            <p className="text-lg mb-6">
               Our mission is to deliver high-quality products and services that meet the needs of our clients. We believe in building long-term relationships based on trust, integrity, and mutual respect.
            </p>
            <p className="text-lg">
               Thank you for choosing us. We look forward to working with you and helping you achieve your goals.
            </p>
         </div>
      </div>
   );
};

export default About;
