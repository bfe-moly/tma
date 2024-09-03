import React from 'react';
import { Outlet } from 'react-router-dom';
import '../assets/styles/global.less';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Outlet />
    </div>
  );
};

export default Layout;
