import React, { useState, useEffect } from 'react';
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import { useRegister } from 'hooks';

const MRegister = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const { data, fetching: fetchingRegister } = useRegister();

  const register = () => {
    fetchingRegister({ fullName, phoneNumber });
  };

  useEffect(() => {
    if (data) {
      navigate('/verifikasi');
    }
  }, [data, navigate]);

  return (
    <>
      <Header headerType={HEADER_TYPE.DEFAULT} headerTitle='Roaming Rabbit' />
      <div className='content-wrapper p-4 min-h-[calc(100vh-6rem)]'>
        <div className='heading'>
          <h1 className='font-black dark:text-white text-[34px] leading-10'>
            Register
            <br />
            <span className='font-normal'>
              to select and buy
              <br />
              your data plan
            </span>
          </h1>
        </div>
        <div className='form-content mt-11'>
          <div className='form mb-4'>
            <label
              className='text-[14px] font-normal mb-3 dark:text-white'
              htmlFor=''
            >
              Full Name
            </label>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFullName(e.target.value)
              }
              name='fullName'
              type='text'
              placeholder='Full Name'
              className='px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full'
            />
          </div>
          <div className='form mb-10'>
            <label
              className='text-[14px] font-normal mb-3 dark:text-white'
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
                name: 'fullName',
                required: true,
                autoFocus: true,
              }}
            />
          </div>
          <div className='form mb-7'>
            <button
              onClick={register}
              className='bg-[#FFEC69] color-black font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 mt-3 w-full text-[14px]'
              type='button'
            >
              Register
            </button>
          </div>
          <div className='registrer mb-7 text-center'>
            <span className='text-sm font-medium dark:text-white'>
              Don’t have an account?{' '}
              <Link
                to='/'
                className='text-[#538EB6] dark:text-roamin-yellow-500'
              >
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MRegister;
