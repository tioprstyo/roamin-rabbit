import { Footer } from 'components';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MobileLayout = () => {
  return (
    <div className='relative main-wrapper max-w-screen-md mx-auto'>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MobileLayout;
