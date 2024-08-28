import React, { useEffect } from 'react';
import { useState } from 'react';
import NoSimImage from 'assets/img/no-sim.png';
import { Link, useNavigate } from 'react-router-dom';
import { HEADER_TYPE } from 'interfaces';
import { Header } from 'components';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PublicIcon from '@mui/icons-material/Public';
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined';
import { useGetExpiredOrder, useGetUpcomingOrders } from 'hooks';
import { useRecoilValue } from 'recoil';
import { slidetSettingState } from 'atom/sliderSetting';
import Slider from 'react-slick';

const MEsim = () => {
  const navigate = useNavigate();
  const settings = useRecoilValue(slidetSettingState);
  const [openTab, setOpenTab] = useState<number>(1);
  const { data: dataUpcoming, fetching: fetchingUpComing } =
    useGetUpcomingOrders();
  const { data: dataExpired, fetching: fetchingExpired } = useGetExpiredOrder();

  useEffect(() => {
    if (!dataUpcoming || !dataExpired) {
      fetchingUpComing();
      fetchingExpired();
    }
  }, [dataUpcoming, dataExpired]);

  return (
    <>
      <Header headerType={HEADER_TYPE.NORMAL} headerTitle='My eSIM' />
      <div className='content-wrapper pb-[120px] min-h-[calc(100vh-6rem)] dark:bg-roamin-dark-600'>
        <div className='flex flex-wrap'>
          <div className='w-full'>
            <ul
              className='flex mb-0 list-none flex-wrap pt-3 pb-0.5 flex-row dark:bg-roamin-dark-800 border-b dark:border-b-roamin-dark-500'
              role='tablist'
            >
              <li
                className={`-mb-px last:mr-0 flex-auto text-center ${openTab === 1 ? 'border-b-2 border-b-roamin-yellow-500' : ''}`}
              >
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-3 block leading-normal ' +
                    (openTab === 1
                      ? 'text-[#1D1B20] dark:text-roamin-yellow-500 border-roamin-yellow-500'
                      : 'text-roamin-neutral-700')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle='tab'
                  href='#link1'
                  role='tablist'
                >
                  Upcoming
                </a>
              </li>
              <li
                className={`-mb-px last:mr-0 flex-auto text-center ${openTab === 2 ? 'border-b-2 border-b-roamin-yellow-500' : ''}`}
              >
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-3 block leading-normal ' +
                    (openTab === 2
                      ? 'text-[#1D1B20] dark:text-roamin-yellow-500 border-roamin-yellow-500'
                      : 'text-[#B3B3B3]')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle='tab'
                  href='#link2'
                  role='tablist'
                >
                  Expired
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
                    {dataUpcoming?.data ? (
                      <>
                        {dataUpcoming.data.length > 1 ? (
                          <>
                            <Slider {...settings}>
                              {dataUpcoming?.data.map((data, i) => (
                                <div key={i}>
                                  <div className='active'>
                                    <div className='list-active'>
                                      <div className='listCard border border-roamin-neutral-600 dark:border-roamin-neutral-800 divide-y divide-roamin-neutral-600 dark:divide-roamin-neutral-800 dark:bg-roamin-dark-700 rounded-[9px]'>
                                        <div className='cardHeader p-4 py-6 flex items-center text-black dark:text-white'>
                                          <div className='w-[103px] h-[63px] bg-roamin-neutral-500 rounded-[9px]' />
                                          <h1 className='ml-[20px] text-xl font-extrabold'>
                                            {data.name}
                                          </h1>
                                        </div>
                                        <div className='cardContent flex justify-between px-4 py-6 items-center text-black dark:text-white'>
                                          <span className='flex'>
                                            <PublicIcon className='mr-3' />
                                            Coverage
                                          </span>
                                          <h3 className='text-[16px] font-black'>
                                            {data.country}
                                          </h3>
                                        </div>
                                        <div className='cardContent flex justify-between px-4 py-6 items-center text-black dark:text-white'>
                                          <span className='flex'>
                                            <SimCardDownloadOutlinedIcon className='mr-3' />
                                            ICCID
                                          </span>
                                          <h3 className='text-[16px] font-black'>
                                            {data.iccid}
                                          </h3>
                                        </div>
                                        <div className='cardFooter grid grid-cols-2 gap-2 items-center p-4 py-6 text-black dark:text-white'>
                                          <button
                                            onClick={() => navigate(`/activate/${data.id}`)}
                                            className='text-[#FFEC69] font-extrabold text-sm px-2 py-3 border border-[#FFEC69] rounded-[9px] w-full text-[14px]'
                                            type='button'
                                          >
                                            Active
                                          </button>
                                          <button
                                            onClick={() => navigate(`/detail/sim/${data.id}`)}
                                            className='text-black font-extrabold text-sm px-2 py-3 border border-[E2DFDF] bg-[#E2DFDF] rounded-[9px] w-full text-[14px]'
                                            type='button'
                                          >
                                            View Detail
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='caption-active py-7'>
                                      <h3 className='text-xl font-semibold text-black dark:text-white'>
                                        Are you looking to buy <br /> a new eSIM?
                                      </h3>
                                      <a
                                        className='text-[#FFEC69] text-sm font-normal underline underline-offset-1 mt-5 block'
                                        href=''
                                      >
                                        Visit our store and choose one!
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </Slider>
                          </>
                        ) : (
                          <>
                            {dataUpcoming?.data.map((data, i) => (
                              <div className='active' key={i}>
                                <div className='list-active'>
                                  <div className='listCard border border-roamin-neutral-600 dark:border-roamin-neutral-800 divide-y divide-roamin-neutral-600 dark:divide-roamin-neutral-800 dark:bg-roamin-dark-700 rounded-[9px]'>
                                    <div className='cardHeader p-4 py-6 flex items-center text-black dark:text-white'>
                                      <div className='w-[103px] h-[63px] bg-roamin-neutral-500 rounded-[9px]' />
                                      <h1 className='ml-[20px] text-xl font-extrabold'>
                                        {data.name}
                                      </h1>
                                    </div>
                                    <div className='cardContent flex justify-between px-4 py-6 items-center text-black dark:text-white'>
                                      <span className='flex'>
                                        <PublicIcon className='mr-3' />
                                        Coverage
                                      </span>
                                      <h3 className='text-[16px] font-black'>
                                        {data.country}
                                      </h3>
                                    </div>
                                    <div className='cardContent flex justify-between px-4 py-6 items-center text-black dark:text-white'>
                                      <span className='flex'>
                                        <SimCardDownloadOutlinedIcon className='mr-3' />
                                        ICCID
                                      </span>
                                      <h3 className='text-[16px] font-black'>
                                        {data.iccid}
                                      </h3>
                                    </div>
                                    <div className='cardFooter grid grid-cols-2 gap-2 items-center p-4 py-6 text-black dark:text-white'>
                                      <button
                                        onClick={() => navigate(`/activate/${data.id}`)}
                                        className='text-[#FFEC69] font-extrabold text-sm px-2 py-3 border border-[#FFEC69] rounded-[9px] w-full text-[14px]'
                                        type='button'
                                      >
                                        Active
                                      </button>
                                      <button
                                        onClick={() => navigate(`/detail/sim/${data.id}`)}
                                        className='text-black font-extrabold text-sm px-2 py-3 border border-[E2DFDF] bg-[#E2DFDF] rounded-[9px] w-full text-[14px]'
                                        type='button'
                                      >
                                        View Detail
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className='caption-active py-7'>
                                  <h3 className='text-xl font-semibold text-black dark:text-white'>
                                    Are you looking to buy <br /> a new eSIM?
                                  </h3>
                                  <a
                                    className='text-[#FFEC69] text-sm font-normal underline underline-offset-1 mt-5 block'
                                    href=''
                                  >
                                    Visit our store and choose one!
                                  </a>
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </>
                    ) : (
                      <div className='text-black dark:text-white'>
                        <img
                          className='mx-auto mt-10'
                          src={NoSimImage}
                          alt=''
                        />
                        <p className='my-7'>
                          You don't have an active
                          <br />
                          data plan
                        </p>
                        <button
                          onClick={() => navigate('/listing')}
                          className='bg-roamin-yellow-500 text-black font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 mt-3 w-full text-[14px]'
                          type='button'
                        >
                          Buy Now
                        </button>
                      </div>
                    )}
                  </div>
                  <div
                    className={
                      'text-center ' + (openTab === 2 ? 'block' : 'hidden')
                    }
                    id='link2'
                  >
                    {dataExpired.data ? (
                      <>
                        {dataExpired.data.map((data, i) => (
                          <div className='active' key={i}>
                            <div className='list-active'>
                              <div className='listCard border border-roamin-neutral-600 dark:border-roamin-neutral-800 divide-y divide-roamin-neutral-600 dark:divide-roamin-neutral-800 dark:bg-roamin-dark-700 rounded-[9px]'>
                                <div className='cardHeader p-4 py-6 flex items-center text-black dark:text-white'>
                                  <div className='w-[103px] h-[63px] bg-[#E7E7E7] rounded-[9px]' />
                                  <h1 className='ml-[20px] text-xl font-extrabold'>
                                    {data.name}
                                  </h1>
                                </div>
                                <div className='cardContent flex justify-between border border-t-[#E2DFDF] px-4 py-6 items-center text-black dark:text-white'>
                                  <span className='flex'>
                                    <PublicIcon className='mr-3' />
                                    Coverage
                                  </span>
                                  <h3 className='text-[16px] font-black'>
                                    {data.country}
                                  </h3>
                                </div>
                                <div className='cardContent flex justify-between border border-t-[#E2DFDF] px-4 py-6 items-center text-black dark:text-white'>
                                  <span className='flex'>
                                    <SimCardDownloadOutlinedIcon className='mr-3' />
                                    ICCID
                                  </span>
                                  <h3 className='text-[16px] font-black'>
                                    {data.iccid}
                                  </h3>
                                </div>
                                <div className='cardContent flex justify-between border border-t-[#E2DFDF] px-4 py-6 items-center text-black dark:text-white'>
                                  <span className='flex'>
                                    <CalendarMonthIcon className='mr-3' />
                                    Expiren On
                                  </span>
                                  <h3 className='text-[16px] font-black'>
                                    {data.expiredAt}
                                  </h3>
                                </div>
                                <div className='cardFooter grid grid-cols-2 gap-2 items-center border border-t-[#E2DFDF] p-4 py-6'>
                                  <button
                                    className='text-[#FFEC69] font-extrabold text-sm px-2 py-3 border border-[#FFEC69] rounded-[9px] w-full text-[14px]'
                                    type='button'
                                  >
                                    Active
                                  </button>
                                  <Link
                                    to={`/detail/sim/${data.id}`}
                                    className='text-black font-extrabold text-sm px-2 py-3 border border-[E2DFDF] bg-[#E2DFDF] rounded-[9px] w-full text-[14px]'
                                    type='button'
                                  >
                                    View Detail
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className='caption-active py-7'>
                              <h3 className='text-xl font-semibold text-black dark:text-white'>
                                Need new plan for <br /> other destinations?
                              </h3>
                              <a
                                className='text-[#FFEC69] text-sm font-normal underline underline-offset-1 mt-5 block'
                                href=''
                              >
                                Visit our store and choose your next
                                destination!
                              </a>
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <div className='text-black dark:text-white'>
                        <img
                          className='mx-auto mt-10'
                          src={NoSimImage}
                          alt=''
                        />
                        <p className='my-7'>
                          You don't have an active
                          <br />
                          data plan
                        </p>
                        <button
                          onClick={() => navigate('/listing')}
                          className='bg-roamin-yellow-500 text-black font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 mt-3 w-full text-[14px]'
                          type='button'
                        >
                          Buy Now
                        </button>
                      </div>
                    )}
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
