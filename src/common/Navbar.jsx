import { Link, NavLink } from 'react-router-dom';
import profile from '../assets/profile.png';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error.message));
  };
  const menuItems = (
    <>
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
        <NavLink to='/contact'>Contact</NavLink>
      </li>
      <li className='font-semibold text-amber-700 hover:text-amber-100 hover:bg-gray-600 p-2'>
        {user ? (
          <button onClick={handleLogOut} className=''>
            Logout
          </button>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </li>
    </>
  );

  return (
    <header className='bg-gray-200 shadow-md rounded-md p-4'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <Link to='/'>
            <img
              className=' w-[50px] rounded-full object-fit '
              src={profile}
              alt='profile picture'
            />
          </Link>
          <Link to='/'>
            <h4 className='ml-3 text-lg font-bold text-red-700'>
              Perishable Products
            </h4>
          </Link>
        </div>
        <ul className='flex justify-end gap-2'>{menuItems}</ul>
      </div>
    </header>
  );
};

export default Navbar;
