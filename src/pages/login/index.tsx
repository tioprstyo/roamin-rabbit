import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const Login = () => {
    navigate('verifikasi');
  };

  return (
    <>
      <div className='main-wrapper max-w-screen-md mx-auto'>
        <div className='header p-4 flex items-center '>
          <div className='w-[62.1px] h-[62.1px] bg-[#FFEC69] rounded-[9px]'></div>
          <h1 className='ml-[20px] text-2xl font-extrabold'>Roaming Rabbit</h1>
        </div>
        <div className='content-wrapper p-4'>
          <div className='heading'>
            <h1 className='font-black text-[34px] leading-10'>
              Login
              <br />
              <span className='font-normal'>
                to activate
                <br />
                or check the usage
              </span>
            </h1>
          </div>
          <div className='form-content mt-11'>
            <div className='form mb-6'>
              <label className='text-[14px] font-normal mb-3' htmlFor=''>
                Phone Number
              </label>
              <input
                type='text'
                placeholder='Full Name'
                className='px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full'
              />
            </div>
            <div className='form'>
              <button
                onClick={Login}
                className='bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 w-full text-[14px]'
                type='button'
              >
                Login
              </button>
            </div>
          </div>
          <div className='registrer mt-16 text-center'>
            <span className='text-sm font-medium'>
              Don’t have an account?{' '}
              <Link to='register' className='text-[#538EB6]'>
                Register
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
