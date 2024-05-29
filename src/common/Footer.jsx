import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between'>
          {/* Company Info */}
          <div className='w-full sm:w-1/3 mb-6'>
            <h5 className='text-xl font-bold mb-2'>
              Bangla Perishable Products
            </h5>
            <p className='text-gray-400'>
              9/A, Chandgaon R/A, Chittagong, Bangladesh.
            </p>
            <p className='text-gray-400'>Email: info@perishablebangla.com</p>
            <p className='text-gray-400'>Phone: +880 1316530727</p>
          </div>

          {/* Links */}
          <div className='w-full sm:w-1/3 mb-6'>
            <h5 className='text-xl font-bold mb-2'>All Pages</h5>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className='text-gray-400 hover:text-white'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about' className='text-gray-400 hover:text-white'>
                  About
                </Link>
              </li>
              <li>
                <Link to='/services' className='text-gray-400 hover:text-white'>
                  Services
                </Link>
              </li>
              <li>
                <Link to='/contact' className='text-gray-400 hover:text-white'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className='w-full sm:w-1/3 mb-6'>
            <h5 className='text-xl font-bold mb-2'>Follow Us</h5>
            <div className='flex space-x-4'>
              <a
                href='https://facebook.com'
                className='text-gray-400 hover:text-white'
              >
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.406.594 24 1.325 24h11.495v-9.294H9.69v-3.622h3.13V8.414c0-3.1 1.892-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.917.001c-1.504 0-1.795.714-1.795 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.117C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z' />
                </svg>
              </a>
              <a
                href='https://twitter.com'
                className='text-gray-400 hover:text-white'
              >
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M24 4.557a9.837 9.837 0 01-2.828.775A4.937 4.937 0 0023.337 3.1a9.867 9.867 0 01-3.127 1.197A4.92 4.92 0 0016.616 3c-2.72 0-4.927 2.206-4.927 4.927 0 .387.043.762.126 1.124-4.094-.205-7.725-2.166-10.158-5.146-.424.727-.667 1.569-.667 2.472 0 1.706.869 3.213 2.188 4.098a4.902 4.902 0 01-2.231-.616v.063c0 2.381 1.693 4.365 3.941 4.816-.412.112-.846.171-1.294.171-.316 0-.623-.03-.924-.086.625 1.956 2.444 3.379 4.599 3.419a9.867 9.867 0 01-6.104 2.104c-.396 0-.788-.023-1.176-.068A13.93 13.93 0 007.548 21c9.057 0 14.007-7.504 14.007-14.007 0-.213-.005-.426-.015-.637A9.935 9.935 0 0024 4.557z' />
                </svg>
              </a>
              <a
                href='https://linkedin.com'
                className='text-gray-400 hover:text-white'
              >
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M22.23 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.74V1.74C24 .78 23.21 0 22.23 0zM7.09 20.452H3.56V9.034h3.53v11.418zM5.325 7.547a2.034 2.034 0 01-2.033-2.034 2.034 2.034 0 012.033-2.034 2.034 2.034 0 012.033 2.034 2.034 2.034 0 01-2.033 2.034zM20.451 20.452h-3.53v-5.848c0-1.392-.03-3.177-1.938-3.177-1.94 0-2.236 1.513-2.236 3.075v5.95h-3.53V9.034h3.39v1.562h.05c.472-.892 1.627-1.837 3.354-1.837 3.588 0 4.247 2.36 4.247 5.432v6.261z' />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className='text-center mt-8 text-gray-500'>
          &copy; {new Date().getFullYear()} Bangla Perishable Products . All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
