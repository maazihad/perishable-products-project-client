import profile from '../../assets/profile.png';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';

const DashMenu = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => toast.success(`Successfully LogOut.`))
      .catch(() => {
        toast.error(`Failed to logout.`);
      });
  };

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
        <Link to='/dashboard'>
          <p className='mx-2 mt-2 font-medium text-gray-600  hover:underline'>
            <strong>Name:</strong> {user?.displayName}
          </p>
        </Link>
        <Link to='/dashboard'>
          <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
            <strong>Email:</strong> {user?.email}
          </p>
        </Link>
        <ul>
          <li className='font-semibold text-amber-700 hover:text-amber-100 hover:bg-gray-600 p-2'>
            <NavLink to='/' className=''>
              Home
            </NavLink>
          </li>
          <li className='font-semibold text-amber-700 hover:text-amber-100 hover:bg-gray-600 p-2'>
            <NavLink to='/about' className=''>
              About
            </NavLink>
          </li>
          <li className='font-semibold text-amber-700 hover:text-amber-100 hover:bg-gray-600 p-2'>
            <NavLink to='/services' className=''>
              Services
            </NavLink>
          </li>
          <li className='font-semibold text-amber-700 hover:text-amber-100 hover:bg-gray-600 p-2'>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'active hover:text-amber-400'
                  : 'default hover:text-amber-400'
              }
              to='/dashboard/all-products'
            >
              All Products
            </NavLink>
          </li>
          <li className='font-semibold text-amber-700 hover:text-amber-100 hover:bg-gray-600 p-2'>
            <NavLink to='/dashboard/add-product' className=''>
              Add Product
            </NavLink>
          </li>
        </ul>
        <div className='font-semibold text-amber-700 hover:text-amber-100  p-2'>
          {user && (
            <button
              onClick={handleLogOut}
              className='btn btn-danger text-amber-700 hover:text-amber-100 hover:bg-gray-600 t'
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default DashMenu;
