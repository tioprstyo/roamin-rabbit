import React from 'react';
import { useState } from 'react';
import NoSimImage from 'assets/img/no-sim.png';
import { useNavigate } from 'react-router-dom';

const MEsim = () => {
  const navigate = useNavigate();
  const [openTab, setOpenTab] = useState<number>(1);

  return (
    <>
      <div className='header p-4 flex items-center justify-center'>
        <h1 className='ml-[20px] text-2xl font-extrabold'>My eSIM</h1>
      </div>
      <div className='content-wrapper'>
        <div className='flex flex-wrap'>
          <div className='w-full'>
            <ul
              className='flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row'
              role='tablist'
            >
              <li className='-mb-px last:mr-0 flex-auto text-center'>
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-3 block leading-normal ' +
                    (openTab === 1
                      ? 'text-[#1D1B20] border-b-2 border-[#FFDE95]'
                      : 'text-[#B3B3B3] border-b-2')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle='tab'
                  href='#link1'
                  role='tablist'
                >
                  Active
                </a>
              </li>
              <li className='-mb-px last:mr-0 flex-auto text-center'>
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-3 block leading-normal ' +
                    (openTab === 2
                      ? 'text-[#1D1B20] border-b-2 border-[#FFDE95]'
                      : 'text-[#B3B3B3] border-b-2')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle='tab'
                  href='#link2'
                  role='tablist'
                >
                  Deactive
                </a>
              </li>
            </ul>
            <div className='relative flex flex-col min-w-0 break-words w-full'>
              <div className='px-4 py-5 flex-auto'>
                <div className='tab-content tab-space'>
                  <div
                    className={
                      'text-center ' + (openTab === 1 ? 'block' : 'hidden')
                    }
                    id='link1'
                  >
                    <img className='mx-auto mt-10' src={NoSimImage} alt='' />
                    <p className='my-7'>
                      You don't have an active
                      <br />
                      data plan
                    </p>
                    <button
                      onClick={() => navigate('/listing')}
                      className='bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 mt-3 w-full text-[14px]'
                      type='button'
                    >
                      Buy Now
                    </button>
                  </div>
                  <div
                    className={
                      'text-center ' + (openTab === 2 ? 'block' : 'hidden')
                    }
                    id='link2'
                  >
                    <img className='mx-auto mt-10' src={NoSimImage} alt='' />
                    <p className='my-7'>
                      You don't have an active
                      <br />
                      data plan
                    </p>
                    <button
                      onClick={() => navigate('/listing')}
                      className='bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 mt-3 w-full text-[14px]'
                      type='button'
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MEsim;
