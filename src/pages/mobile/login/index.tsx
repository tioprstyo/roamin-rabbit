import React, { useEffect, useState } from 'react';
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLogin } from 'hooks';
import PhoneInput from 'react-phone-input-2';
import AppleImg from 'assets/img/Apple.png';
import GoogleImg from 'assets/img/Google.png';

const MLogin = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const { data, fetching: fetchingLogin } = useLogin();

  useEffect(() => {
    if (data) {
      navigate('/verifikasi/choose-verifikasi');
    }
  }, [data, navigate]);

  return (
    <>
      <Header headerType={HEADER_TYPE.DEFAULT} headerTitle='Roaming Rabbit' />
      <div className='content-wrapper p-4 min-h-[calc(100vh-6rem)]'>
        <div className='heading'>
          <h1 className='font-black text-[34px] leading-10 text-black dark:text-white'>
            Login
            <br />
            <span className='font-normal'>
              to complete
              <br />
              your purchase
            </span>
          </h1>
          <p className='text-black dark:text-white mt-8 mb-8'>
            You’ll need to sign in to activate your data plan
          </p>
        </div>
        <div className='form-content'>
          <div className='form mb-6 flex flex-col gap-1'>
            <label
              className='text-[14px] font-normal text-black dark:text-white'
              htmlFor=''
            >
              Phone Number
            </label>
            <PhoneInput
              onChange={(e: string) => setPhoneNumber(e)}
              country={'id'}
              inputClass='px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full'
              inputStyle={{
                width: '100%',
                height: 'auto',
                borderRadius: '9px',
                paddingLeft: '60px',
              }}
              buttonStyle={{
                borderRadius: '9px 0 0 9px',
                backgroundColor: 'white',
                width: '51px',
              }}
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true,
              }}
            />
          </div>
          <div className='form'>
            <button
              onClick={() => fetchingLogin(phoneNumber)}
              className='bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 w-full text-[14px]'
              type='button'
            >
              Login
            </button>

            <span className='text-white my-7 text-or'></span>

            <button className='bg-white font-extrabold text-sm px-3 py-3 rounded-[9px] my-3 w-full text-[14px]'>
              <img className='inline mr-3' src={GoogleImg} alt={GoogleImg} />
              Sign In With Google
            </button>
            {/iPad|iPhone|iPod/.test(navigator.userAgent) && (
              <button className='bg-white font-extrabold text-sm px-3 py-3 rounded-[9px] my-3 w-full text-[14px]'>
                <img className='inline mr-3' src={AppleImg} alt={AppleImg} />
                Sign In With Apple
              </button>
            )}
          </div>
        </div>
        <div className='registrer my-7 text-center'>
          <span className='text-sm font-medium text-black dark:text-white'>
            Don’t have an account?{' '}
            <Link
              to='/register'
              className='text-[#538EB6] dark:text-roamin-yellow-500'
            >
              Register
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default MLogin;
