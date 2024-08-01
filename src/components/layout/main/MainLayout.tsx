import React from 'react';
import { DesktopLayout, MobileLayout } from 'components';

const MainLayout = () => {
  return (
    <>
      <div className='md:block hidden'>
        <DesktopLayout />
      </div>
      <div className='md:hidden block'>
        <MobileLayout />
      </div>
    </>
  );
};

export default MainLayout;
