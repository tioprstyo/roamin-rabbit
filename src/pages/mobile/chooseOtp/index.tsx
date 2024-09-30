import React from 'react';
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRecoilState } from 'recoil';
import { inputNumberState } from 'atom/inputNumber';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { useNavigate } from 'react-router-dom';

const MChooseOtp = () => {
  const navigate = useNavigate();
  const inputNumber = useRecoilState(inputNumberState);

  return (
    <>
      <Header headerType={HEADER_TYPE.DETAIL} headerTitle='' />
      <div className='content-wrapper p-4 bg-[#FFF7DA] dark:bg-roamin-dark-700 min-h-[calc(100vh-4rem)]'>
        <div className='heading'>
          <h1 className='font-black text-[34px] leading-10 text-roamin-yellow-500'>
            Choose Verification Method
          </h1>
          <p className='text-black dark:text-white mt-8 mb-8'>
            Choose the OTP code send method that applies most to you.
          </p>
        </div>
        <div className='button-section'>
          <div
            onClick={() => navigate('/verifikasi')}
            className='cursor-not-allowed order-menu rounded-lg bg-white border p-2 flex justify-between items-center border-2-roamin-neutral-600 dark:border-2-roamin-dark-400 dark:bg-roamin-dark-700 text-black dark:text-white'
          >
            <span className='flex items-center'>
              <WhatsAppIcon sx={{ fontSize: 30, marginRight: 2 }} />
              <span className='text-base font-medium'>
                Send OTP via whatsapp
                <br />
                ke {inputNumber[0]}
              </span>
            </span>
            <ChevronRightIcon />
          </div>
          <div
            onClick={() => navigate('/verifikasi')}
            className='cursor-not-allowed order-menu rounded-lg bg-white border p-2 flex justify-between items-center border-2-roamin-neutral-600 dark:border-2-roamin-dark-400 dark:bg-roamin-dark-700 text-black dark:text-white mt-7'
          >
            <span className='flex items-center'>
              <PhoneAndroidIcon sx={{ fontSize: 30, marginRight: 2 }} />
              <span className='text-base font-medium'>
                Send OTP via iMessage
                <br />
                ke {inputNumber[0]}
              </span>
            </span>
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default MChooseOtp;
