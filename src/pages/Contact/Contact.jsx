import React, { useState } from 'react';

const Contact = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });

   const handleChange = (e) => {
      setFormData({
         ...formData, [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Submitted:', formData);


      setFormData({
         name: '',
         email: '',
         message: '',
      });
   };

   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
         <div className="p-8 bg-white shadow-md rounded-lg text-center w-full max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
               <div>
                  <label htmlFor="name" className="block text-lg font-medium mb-2">
                     Name
                  </label>
                  <input
                     type="text"
                     id="name"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     required
                  />
               </div>
               <div>
                  <label htmlFor="email" className="block text-lg font-medium mb-2">
                     Email
                  </label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     required
                  />
               </div>
               <div>
                  <label htmlFor="message" className="block text-lg font-medium mb-2">
                     Message
                  </label>
                  <textarea
                     id="message"
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     rows="5"
                     required
                  ></textarea>
               </div>
               <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300"
               >
                  Send Message
               </button>
            </form>
         </div>
      </div>
   );
};

export default Contact;
