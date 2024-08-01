import React from 'react';
import { useNavigate } from 'react-router-dom';

const MHome = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='header p-4 flex items-center '>
        <div className='w-[62.1px] h-[62.1px] bg-[#FFEC69] rounded-[9px]'></div>
        <h1 className='ml-[20px] text-2xl font-extrabold'>Roaming Rabbit</h1>
      </div>
      <div className='content-wrapper p-4'>
        <div className='heading'>
          <span className='font-normal text-[32px] leading-10'>
            Get easily to
            <br />
            <h1 className='font-black'>connect with others</h1>
            upon arrival
          </span>
        </div>
        <div className='form-content mt-11'>
          <div className='form mb-6'>
            <label className='text-[14px] font-normal mb-3' htmlFor=''>
              Choose your trip
            </label>
            <input
              type='text'
              placeholder='Full Name'
              className='px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full'
            />
          </div>
          <div className='form'>
            <button
              onClick={() => navigate('/listing')}
              className='bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 w-full text-[14px]'
              type='button'
            >
              Search
            </button>
          </div>
        </div>
        <div className='registrer mt-16 text-center'>
          <span className='text-sm font-medium'>
            Does my device support it?
          </span>
          <br />
          <a
            className='text-sm text-[#5F97BC] underline decoration-solid decoration-[#5F97BC]'
            href=''
          >
            See list of devices that support esim
          </a>
        </div>
      </div>
    </>
  );
};

export default MHome;
