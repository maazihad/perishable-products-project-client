import { Outlet } from 'react-router-dom';
import DashMenu from '../Dashboard/DashMenu/DashMenu';

const DashboardLayer = () => {
  return (
    <div>
      <h2 className='text-3xl font-bold text-center uppercase py-10 md:tracking-[5rem]'>
        dashboard
      </h2>

      <div className='drawer lg:drawer-open'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col items-start w-full'>
          <Outlet />
          <label
            htmlFor='my-drawer-2'
            className='btn btn-primary drawer-button lg:hidden'
          >
            Open Dashboard
          </label>
        </div>
        <div className='drawer-side'>
          <label
            htmlFor='my-drawer-2'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
            <DashMenu />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayer;
