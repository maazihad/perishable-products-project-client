import profile from '../../assets/profile.png';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';

const DashMenu = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className='w-full hidden md:flex py-2 justify-center items-center bg-black mx-auto'>
        <Link to='/'>
          <img
            className='hidden md:block rounded-full'
            width='100'
            height='100'
            src={profile}
            alt='logo'
          />
        </Link>
      </div>
      <div className='flex flex-col items-start mt-2 ml-10'>
        <Link to='/dashboard/add-products'>
          <h4 className='mx-2 mt-2 font-medium text-gray-900  hover:underline'>
            {user?.displayName}
          </h4>
        </Link>
        <Link to='/dashboard'>
          <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
            <strong>User:</strong> {user?.email}
          </p>
        </Link>
        <ul>
          <li className='font-black text-amber-900 hover:text-amber-100 hover:bg-gray-600 p-2'>
            <NavLink to='/dashboard'>Dashboard</NavLink>
          </li>
          <li className='font-semibold text-amber-700 hover:text-amber-100 hover:bg-gray-600 p-2'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='font-semibold text-amber-700 hover:text-amber-100 hover:bg-gray-600 p-2'>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li className='font-semibold text-amber-700 hover:text-amber-100 hover:bg-gray-600 p-2'>
            <NavLink to='/services'>Services</NavLink>
          </li>
          <li className='font-semibold text-amber-700 hover:text-amber-100 hover:bg-gray-600 p-2'>
            <NavLink to='/dashboard/all-products'>All Products</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashMenu;
