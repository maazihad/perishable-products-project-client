import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../common/Loading';
import { PropTypes } from 'prop-types';
import Swal from 'sweetalert2';

const SecureRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'First of all you log in',
    });
    return <Navigate to='/login' state={{ from: location }} replace />;
  }
  return children;
};

SecureRoute.propTypes = {
  children: PropTypes.object,
};

export default SecureRoute;
