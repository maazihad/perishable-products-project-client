
import { useNavigate } from 'react-router-dom';

const Error = () => {
   const navigate = useNavigate();

   const handleGoBack = () => {
      navigate(-1); // Navigate to the previous page
   };

   const handleHome = () => {
      navigate('/'); // Navigate to the home page
   };

   return (
      <div className="flex items-center justify-center h-screen bg-gray-100 text-gray-800">
         <div className="p-8 bg-white shadow-md rounded-lg text-center">
            <h1 className='text-7xl font-bold my-4'>404</h1>
            <h2 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h2>
            <p className="text-lg mb-6">We couldn&apos;t find the page you&lsquo;re looking for.</p>
            <div className="space-x-4">
               <button
                  onClick={handleGoBack}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
               >
                  Go Back
               </button>
               <button
                  onClick={handleHome}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
               >
                  Home
               </button>
            </div>
         </div>
      </div>
   );
};

export default Error;
