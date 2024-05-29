import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className='bg-gray-500 min-h-screen text-white flex flex-cold justify-center items-center text-4xl'>
      <div className='flex flex-col items-center mt-2 ml-10 text-white text-4xl'>
        <p className='mx-2 mt-1  font-medium  hover:underline text-white text-4xl'>
          <strong>User Name :</strong> {user?.displayName}
        </p>
        <p className='mx-2 mt-1  font-medium  hover:underline text-white text-4xl'>
          <strong>User Email :</strong> {user?.email}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
