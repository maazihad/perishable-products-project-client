import { Link } from 'react-router-dom';
import SocialLogin from '../../../components/SocialLogin/SocialLogin';

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
  };

  return (
    <div>
      <div className='hero min-h-screen bg-base-100 shadow-lg'>
        <div className='hero-content flex-col lg:flex-row'>
          <div className='text-center lg:text-left'></div>
          <div className='card flex-shrink-0 w-full max-w-sm rounded-none shadow-md bg-red-100'>
            <div className='card-body'>
              <form onSubmit={handleLogin} className=''>
                <h3 className='text-3xl font-black text-center text-red-900'>
                  Login
                </h3>
                {/* ---------------->>>>>>>>>>Email */}
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text text-red-700 font-semibold'>
                      Email
                    </span>
                  </label>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='input input-bordered'
                    required
                  />
                </div>
                {/* ----------------->>>>>>>>>password */}
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text text-red-700 font-semibold'>
                      Password
                    </span>
                  </label>
                  <input
                    type='password'
                    name='password'
                    placeholder='password'
                    className='input input-bordered'
                    required
                  />
                  <label className='label'>
                    <a
                      href='#'
                      className='label-text-alt link link-hover text-red-700 font-semibold'
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className='form-control mt-6'>
                  <button className='btn btn-primary capitalize bg-red-400 hover:bg-red-800 hover:text-red-100 border-0'>
                    Login
                  </button>
                </div>
                <p className='text-center text-xl text-red-500'>
                  <small>
                    Are You New User? Please
                    <Link to='/signup' className='text-red-600 font-semibold'>
                      {' '}
                      Signing Up.
                    </Link>
                  </small>
                </p>
              </form>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
