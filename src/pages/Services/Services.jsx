

const Services = () => {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
         <div className="p-8 bg-white shadow-md rounded-lg text-center w-full max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-6 bg-blue-100 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold mb-4">Service One</h2>
                  <p className="text-lg">Description of service one. Highlight the features and benefits of this service.</p>
               </div>
               <div className="p-6 bg-blue-100 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold mb-4">Service Two</h2>
                  <p className="text-lg">Description of service two. Highlight the features and benefits of this service.</p>
               </div>
               <div className="p-6 bg-blue-100 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold mb-4">Service Three</h2>
                  <p className="text-lg">Description of service three. Highlight the features and benefits of this service.</p>
               </div>
               <div className="p-6 bg-blue-100 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold mb-4">Service Four</h2>
                  <p className="text-lg">Description of service four. Highlight the features and benefits of this service.</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Services;
