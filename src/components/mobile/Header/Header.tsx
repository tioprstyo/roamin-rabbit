import React, { useEffect } from 'react';
import { HEADER_TYPE, HeaderProps } from 'interfaces';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useGetProfile } from 'hooks';

const Header = ({
  headerType,
  headerTitle,
  handleBackButton,
  classname,
}: HeaderProps) => {
  const navigate = useNavigate();
  const { fetching } = useGetProfile();

  useEffect(() => {
    fetching();
  }, []);

  if (headerType === HEADER_TYPE.DEFAULT) {
    return (
      <div
        className={`header p-4 flex items-center cursor-pointer ${classname}`}
        onClick={() => navigate('/')}
      >
        <div className='w-[62.1px] h-[62.1px] bg-[#FFEC69] rounded-[9px]'></div>
        <h1 className='ml-[20px] text-2xl font-extrabold text-black dark:text-roamin-yellow-500'>
          {headerTitle}
        </h1>
      </div>
    );
  }
  if (headerType === HEADER_TYPE.DETAIL) {
    return (
      <div
        className={`header p-4 flex items-center bg-white dark:bg-roamin-dark-800 ${classname}`}
      >
        <ArrowBackIcon
          className='cursor-pointer text-black dark:text-white'
          onClick={() => (handleBackButton ? handleBackButton() : navigate(-1))}
        />
        <h1 className='text-2xl font-extrabold mx-auto text-black dark:text-roamin-yellow-500'>
          {headerTitle}
        </h1>
      </div>
    );
  }

  return (
    <div className='header p-4 flex items-center justify-center'>
      <h1
        className={`ml-[20px] text-2xl font-extrabold text-black dark:text-roamin-yellow-500 ${classname}`}
      >
        {headerTitle}
      </h1>
    </div>
  );
};

export default Header;
