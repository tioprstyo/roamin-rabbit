import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { BottomNavigation } from 'components';
import { useDarkMode } from 'hooks';

const MobileLayout = () => {
  const { data } = useDarkMode();

  useEffect(() => {
    // empty function
  }, [data]);

  return (
    <div className='relative main-wrapper max-w-screen-md mx-auto bg-white dark:bg-roamin-dark-800'>
      <Outlet />
      <BottomNavigation />
    </div>
  );
};

export default MobileLayout;
