import React from 'react';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';

const ListingPage = () => {
  return (
    <>
      <div className='main-wrapper max-w-screen-md mx-auto'>
        <div className='haader p-4 flex items-center'>
          <div className='w-[62.1px] h-[62.1px] bg-[#FFEC69] rounded-[9px]'></div>
          <h1 className='ml-[20px] text-2xl font-extrabold'>Roaming Rabbit</h1>
        </div>
        <div className='content-wrapper p-4 bg-[#FFF7DA]'>
          <div className='form-content'>
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
                className='bg-white color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 w-full text-[14px] border border-[#E3E3E3]'
                type='button'
              >
                Filter
              </button>
            </div>
          </div>
          <div className='listing flex flex-col'>
            <div className='listCard border border-[#E2DFDF] bg-white rounded-[9px] mt-5'>
              <div className='cardHeader p-4 flex items-center'>
                <div className='w-[62.1px] h-[62.1px] bg-[#E7E7E7] rounded-[9px]'></div>
                <h1 className='ml-[20px] text-xl font-extrabold'>Indosat</h1>
              </div>
              <div className='cardContent flex justify-between border border-t-[#E2DFDF] px-4 py-6 items-center'>
                <span className='flex'>
                  <SignalCellularAltIcon className='mr-3' />
                  Data
                </span>
                <h3 className='text-[16px] font-black'>1 GB</h3>
              </div>
              <div className='cardContent flex justify-between border border-t-[#E2DFDF] px-4 py-6 items-center'>
                <span className='flex'>
                  <CalendarMonthIcon className='mr-3' />
                  Validity
                </span>
                <h3 className='text-[16px] font-black'>7 days</h3>
              </div>
              <div className='cardContent flex justify-between border border-t-[#E2DFDF] px-4 py-6 items-center'>
                <span className='flex'>
                  <PaymentsOutlinedIcon className='mr-3' />
                  Price
                </span>
                <h3 className='text-[16px] font-black'>US $ 12.00</h3>
              </div>
              <div className='cardButton flex justify-center border border-t-[#E2DFDF] px-4 py-6'>
                <button
                  className='bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] w-9/12 text-[14px]'
                  type='button'
                >
                  Buy Plan
                </button>
              </div>
            </div>
            <div className='listCard border border-[#E2DFDF] bg-white rounded-[9px] mt-5'>
              <div className='cardHeader p-4 flex items-center'>
                <div className='w-[62.1px] h-[62.1px] bg-[#E7E7E7] rounded-[9px]'></div>
                <h1 className='ml-[20px] text-xl font-extrabold'>Telkomsel</h1>
              </div>
              <div className='cardContent flex justify-between border border-t-[#E2DFDF] px-4 py-6 items-center'>
                <span className='flex'>
                  <SignalCellularAltIcon className='mr-3' />
                  Data
                </span>
                <h3 className='text-[16px] font-black'>1 GB</h3>
              </div>
              <div className='cardContent flex justify-between border border-t-[#E2DFDF] px-4 py-6 items-center'>
                <span className='flex'>
                  <CalendarMonthIcon className='mr-3' />
                  Validity
                </span>
                <h3 className='text-[16px] font-black'>7 days</h3>
              </div>
              <div className='cardContent flex justify-between border border-t-[#E2DFDF] px-4 py-6 items-center'>
                <span className='flex'>
                  <PaymentsOutlinedIcon className='mr-3' />
                  Price
                </span>
                <h3 className='text-[16px] font-black'>US $ 12.00</h3>
              </div>
              <div className='cardButton flex justify-center border border-t-[#E2DFDF] px-4 py-6'>
                <button
                  className='bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] w-9/12 text-[14px]'
                  type='button'
                >
                  Buy Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingPage;
