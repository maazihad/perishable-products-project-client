import { Outlet } from 'react-router-dom';
import DashMenu from '../Dashboard/DashMenu/DashMenu';

const DashboardLayer = () => {
  return (
    <div>
      <h2 className='text-3xl font-bold text-center uppercase py-10'>
        dashboard
      </h2>

      <div className='drawer drawer-mobile lg:drawer-open'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content px-5  bg-green-200'>
          <label
            htmlFor='my-drawer-2'
            className='btn btn-primary drawer-button lg:hidden'
          >
            Open drawer
          </label>
          <Outlet />
        </div>
        <div className='drawer-side bg-[#D1A054]'>
          <div>
            <DashMenu />
          </div>
          <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
          <ul className='menu p-4 w-80  text-white font-bold'>
            <hr />
            {/* {isAdmin ? <AdminMenu /> : isInstructor ? <InstructorMenu /> : <UsersMenu />}
                  <hr />
                  <HomeMenu />
                  <hr />
                  <ProfileLogoutMenu /> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayer;
