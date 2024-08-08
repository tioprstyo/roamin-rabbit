import React from 'react';
import { HEADER_TYPE, HeaderProps } from 'interfaces';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const Header = ({ headerType, headerTitle }: HeaderProps) => {
  const navigate = useNavigate();

  if (headerType === HEADER_TYPE.DEFAULT) {
    return (
      <div className='header p-4 flex items-center'>
        <div className='w-[62.1px] h-[62.1px] bg-[#FFEC69] rounded-[9px]'></div>
        <h1 className='ml-[20px] text-2xl font-extrabold'>{headerTitle}</h1>
      </div>
    );
  }
  if (headerType === HEADER_TYPE.DETAIL) {
    return (
      <div className='header p-4 flex items-center '>
        <ArrowBackIcon onClick={() => navigate(-1)} />
        <h1 className='text-2xl font-extrabold mx-auto'>{headerTitle}</h1>
      </div>
    );
  }

  return (
    <div className='header p-4 flex items-center justify-center'>
      <h1 className='ml-[20px] text-2xl font-extrabold'>{headerTitle}</h1>
    </div>
  );
};

export default Header;
