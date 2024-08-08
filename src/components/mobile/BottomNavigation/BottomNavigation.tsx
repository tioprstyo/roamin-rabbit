import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { mainMenuState } from 'atom';
import { NavigationMenuProps } from 'interfaces';

const BottomNavigation = () => {
  const location = useLocation();
  const mainMenu = useRecoilValue(mainMenuState);
  const [isShowNavigation, setIsShowNavigation] = useState(false);

  useEffect(() => {
    if (
      mainMenu.find((e: NavigationMenuProps) => e.path === location.pathname)
    ) {
      setIsShowNavigation(true);
    }
  }, [location.pathname]);

  return (
    <div
      className={`${isShowNavigation ? 'block' : 'hidden'} navigation flex justify-around items-center fixed bottom-0 left-0 right-0 py-3 border-t border-[#CECECE] bg-white`}
    >
      {mainMenu.map((e: NavigationMenuProps) => (
        <NavLink
          key={e.key}
          to={e.path}
          className='text-[12px] font-extrabold flex flex-col items-center'
        >
          {({ isActive }) => (
            <>
              <span
                className={`mb-2 px-5 py-1 rounded-[16px] ${isActive ? 'bg-[#FFEC69]' : ''}`}
              >
                {/* <HomeOutlinedIcon sx={{ fontSize: 30 }} /> */}
                <e.icon sx={{ fontSize: 30 }} />
              </span>
              {e.title}
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};
export default BottomNavigation;
