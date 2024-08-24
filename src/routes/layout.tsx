import React from 'react';
import { Outlet } from 'react-router-dom';
import '../assets/styles/global.less';

function Layout() {
  return (
    <div className='layout'>
      <Outlet />
    </div>
  );
}

export default Layout;
