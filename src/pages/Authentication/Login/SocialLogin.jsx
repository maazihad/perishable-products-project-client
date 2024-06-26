import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        if (loggedUser) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your google Login Successfully. ',
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate(from, { replace: true });
      })
      .catch((error) => toast(error.message));
  };

  return (
    <div>
      <div className='divider font-bold text-red-900'>OR</div>
      <div className='text-center space-x-6'>
        <button onClick={handleGoogleSignIn} className=''>
          <FaGoogle className='text-red-900 text-3xl' />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
