import { BottomNavigation } from 'components';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MobileLayout = () => {
  return (
    <div className='relative main-wrapper max-w-screen-md mx-auto'>
      <Outlet />
      <BottomNavigation />
    </div>
  );
};

export default MobileLayout;
