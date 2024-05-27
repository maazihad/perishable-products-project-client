import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { updateCurrentUser } from 'firebase/auth';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    updateCurrentUser;
    const regInfo = {
      name,
      email,
      password,
    };
    console.log(regInfo);

    if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      toast('Please provide a valid email');
      return;
    } else {
      createUser(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          updateUserProfile(name)
            .then(() => {
              //saved user
            })
            .catch((error) => {
              toast(error.message);
            });
          if (loggedUser) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Welcome!! Your are in!!',
              showConfirmButton: false,
              timer: 1500,
            });
          }
          navigate('/');
        })
        .catch((error) => console.log(error.message));
    }
  };

  return (
    <>
      <div className='hero  bg-base-100 my-5'>
        <div className=' grid  '>
          <div className='lg:w-full lg:pt-9 w-screen rounded-none shadow-md bg-red-100 lg:col-start-3 lg:col-span-6'>
            <div className='card-body min-h-[calc(100vh-50px)]'>
              <form onSubmit={handleRegister}>
                <h3 className='text-3xl mb-2 text-center text-red-900 font-black'>
                  New User
                </h3>
                {/* -------------->>>>>>>>>>Name */}
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Name*</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Enter your name'
                    name='name'
                    className='input input-bordered'
                    required
                  />
                </div>
                {/* ----------->>>>>>>>>>>>>Email */}
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email*</span>
                  </label>
                  <input
                    type='email'
                    placeholder='Enter a valid email'
                    name='email'
                    className='input input-bordered'
                    required
                  />
                </div>
                {/* -------------->>>>>>>>>>>>>>Password */}
                <div className='form-control relative'>
                  <label className='label'>
                    <span className='label-text'>Password*</span>
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    placeholder='Ensure 6 character long password'
                    className=' input input-bordered'
                    required
                  />

                  <span
                    className='absolute right-5 top-12'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <small>
                      {showPassword ? (
                        <FaEye className='cursor-pointer text-2xl text-red-500' />
                      ) : (
                        <FaEyeSlash className='cursor-pointer text-2xl text-red-700 ' />
                      )}
                    </small>
                  </span>
                </div>

                <div className='form-control mt-6'>
                  <button className='btn btn-primary capitalize bg-red-400 hover:bg-red-800 border-0'>
                    Sign Up
                  </button>
                </div>
              </form>
              <div>
                <p className='text-center text-xl'>
                  <small>
                    Already have an account ? Please{' '}
                    <Link to='/login' className='text-red-600 font-medium'>
                      {' '}
                      Login.
                    </Link>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
