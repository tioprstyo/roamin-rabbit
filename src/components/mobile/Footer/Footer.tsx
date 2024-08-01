import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SimCardOutlinedIcon from '@mui/icons-material/SimCardOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

const Footer = () => {
  return (
    <div className='navigation flex justify-around items-center fixed bg-white bottom-0 left-0 right-0 py-3 border-t border-[#CECECE]'>
      <NavLink
        to='/'
        className='text-[12px] font-extrabold flex flex-col items-center'
      >
        {({ isActive }) => (
          <>
            <span
              className={`mb-2 px-5 py-1 rounded-[16px] ${isActive ? 'bg-[#FFEC69]' : ''}`}
            >
              <HomeOutlinedIcon sx={{ fontSize: 30 }} />
            </span>
            Home
          </>
        )}
      </NavLink>
      <NavLink
        to='/manage'
        className='text-[12px] font-extrabold flex flex-col items-center'
      >
        {({ isActive }) => (
          <>
            <span
              className={`mb-2 px-5 py-1 rounded-[16px] ${isActive ? 'bg-[#FFEC69]' : ''}`}
            >
              <SimCardOutlinedIcon sx={{ fontSize: 30 }} />
            </span>
            Manage
          </>
        )}
      </NavLink>
      <NavLink
        to='/messages'
        className='text-[12px] font-extrabold flex flex-col items-center'
      >
        {({ isActive }) => (
          <>
            <span
              className={`mb-2 px-5 py-1 rounded-[16px] ${isActive ? 'bg-[#FFEC69]' : ''}`}
            >
              <HelpCenterOutlinedIcon sx={{ fontSize: 30 }} />
            </span>
            Support
          </>
        )}
      </NavLink>
      <NavLink
        to='/messages'
        className='text-[12px] font-extrabold flex flex-col items-center'
      >
        {({ isActive }) => (
          <>
            <span
              className={`mb-2 px-5 py-1 rounded-[16px] ${isActive ? 'bg-[#FFEC69]' : ''}`}
            >
              <AccountBoxOutlinedIcon sx={{ fontSize: 30 }} />
            </span>
            Me
          </>
        )}
      </NavLink>
    </div>
  );
};
export default Footer;
