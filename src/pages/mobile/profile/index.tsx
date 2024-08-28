import React, { useEffect, useMemo, useState } from 'react';
import { ActivePlanProps, HEADER_TYPE } from 'interfaces';
import { Header } from 'components';
import ProfileImage from 'assets/img/profile.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NoSimImage from 'assets/img/no-sim.png';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Switch from '@mui/material/Switch';
import { ProgressCircle } from 'components';
import EventIcon from '@mui/icons-material/Event';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useDarkMode, useGetProfile } from 'hooks';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 70,
  height: 32,
  padding: 0,
  borderRadius: 100,

  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 24,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 3,
    top: 1,
    color: '#FFEC69',
    '&.Mui-checked': {
      color: '#2D2B31',
      transform: 'translateX(40px)',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#424046',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 24,
    height: 24,
    borderRadius: '50%',
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.grey[300],
    boxSizing: 'border-box',
  },
}));

const MProfile = () => {
  const navigate = useNavigate();
  const { data, isLoading ,fetching } = useGetProfile();
  const { data: isDarkMode, fetching: setIsDarkMode } = useDarkMode();
  const [show, setShow] = useState<number>(0);
  const label = { inputProps: { 'aria-label': 'Color switch demo' } };

  const tab = (value: number) => {
    show == value ? setShow(0) : setShow(value);
  };
  const usedTotal = (calc: ActivePlanProps | undefined) => {
    return (
      100 -
      (calc?.quotaData && calc?.usedData
        ? (calc?.quotaData / calc?.usedData) * 100
        : 0)
    );
  };
  const total = useMemo(() => usedTotal(data?.activePlan), [data?.activePlan]);

  useEffect(() => {
    if (!data) {
      fetching();
    }
  }, [data]);

  return (
    <>
      <Header headerType={HEADER_TYPE.NORMAL} headerTitle='Account' />
      <div className='content-wrapper p-4 pb-[120px] bg-[#FFF7DA] dark:bg-roamin-dark-600 min-h-[calc(100vh-6rem)]'>
        <div className='profile-section mb-4'>
          {isLoading ? (
            <>
              <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div className="flex-1 space-y-6 py-1">
                      <div className="h-2 bg-slate-200 rounded"></div>
                      <div className="space-y-3">
                        <div className="h-2 bg-slate-200 rounded"></div>
                      </div>
                  </div>
                </div>
              </div>
            </>
          ):(
            <>
              {data?.profile ? (
                <div
                  onClick={() => navigate('/profile/edit')}
                  className='card flex flex-row gap-x-4 items-center rounded-lg bg-white p-4 border border-roamin-neutral-600 dark:border-roamin-dark-400 dark:bg-roamin-dark-700'
                >
                  <div className='user-profile basis-1/5'>
                    <img
                      className='w-full rounded-full border'
                      src={data.profile.profilePicture}
                      alt={data.profile.profilePicture}
                    />
                  </div>
                  <div className='user-name basis-3/4 flex flex-col gap-y-1 justify-between text-black dark:text-white'>
                    <b className='text-xl font-extrabold'>{data.profile.name}</b>
                    <p className='text-base font-[350]'>
                      {data.profile.phoneNumber}
                    </p>
                  </div>
                  <div className='user-info basis-auto text-black dark:text-white'>
                    <ChevronRightIcon />
                  </div>
                </div>
              ) : (
                <div className='profile-not-login rounded-lg bg-white p-4 w-full text-center dark:border-roamin-dark-400 dark:bg-roamin-dark-700'>
                  <img
                    className='mx-auto mb-4'
                    src={ProfileImage}
                    alt={ProfileImage}
                  />
                  <p className='text-lg font-light mb-4 text-black dark:text-white'>
                    Login to access easy connections on every trip!
                  </p>
                  <button
                    className='bg-roamin-yellow-500 color-[#000000] font-extrabold text-sm px-4 py-4 rounded-[9px] w-2/4 text-[18px]'
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </button>
                </div>
              )}
            </>
          )}
        </div>
        <div className='package-section mb-4'>
          <h3 className='text-base font-extrabold mb-4 text-black dark:text-white'>
            Current Active Plan
          </h3>
          {isLoading ? (
            <>
              <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-5 bg-slate-200 rounded"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-10 bg-slate-200 rounded col-span-1"></div>
                        <div className="h-10 bg-slate-200 rounded col-span-1"></div>
                        <div className="h-10 bg-slate-200 rounded col-span-1"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-5 bg-slate-200 rounded col-span-1"></div>
                        <div className="h-5 bg-slate-200 rounded col-span-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {data?.activePlan ? (
                <div className='active-package rounded-lg bg-white border border-roamin-neutral-600 dark:border-roamin-dark-400 divide-y divide-roamin-neutral-600 dark:divide-roamin-dark-400 dark:bg-roamin-dark-700'>
                  <div className='card p-3 flex flex-row gap-x-4 items-center'>
                    <div className='square-section basis-1/5'>
                      <div className='w-[83px] h-[51px] bg-roamin-neutral-500 rounded-[9px]' />
                    </div>
                    <div className='package-name basis-3/4 flex flex-col gap-y-1 justify-between text-black dark:text-white'>
                      <b className='text-lg font-extrabold'>
                        {data.activePlan.name}
                      </b>
                    </div>
                    <div className='package-info basis-auto text-black dark:text-white'>
                      <ChevronRightIcon />
                    </div>
                  </div>
                  <div className='card p-3 flex flex-row gap-x-2 items-center'>
                    <div className='square-section basis-2/5'>
                      <ProgressCircle
                        value={total}
                        total={data.activePlan.quotaData}
                      />
                    </div>
                    <div className='package-name basis-3/5 flex flex-col gap-y-1 justify-between'>
                      <div className='keterangan-section grid grid-cols-2 gap-1'>
                        <div className='keterangan text-black dark:text-white'>
                          <span className='block text-[10px] font-light'>
                            USED DATA
                          </span>
                          <b className='text-sm font-extrabold'>
                            {data.activePlan.usedData} MB
                          </b>
                        </div>
                        <div className='keterangan text-black dark:text-white'>
                          <span className='block text-[10px] font-light'>
                            CALLS
                          </span>
                          <b className='text-sm font-extrabold'>
                            {data.activePlan.usedCall}/{data.activePlan.quotaCall}{' '}
                            Minutes
                          </b>
                        </div>
                        <div className='keterangan text-black dark:text-white'>
                          <span className='block text-[10px] font-light'>
                            TOTAL DATA
                          </span>
                          <b className='text-sm font-extrabold'>
                            {data.activePlan.quotaData} GB
                          </b>
                        </div>
                        <div className='keterangan text-black dark:text-white'>
                          <span className='block text-[10px] font-light'>TEXT</span>
                          <b className='text-sm font-extrabold'>
                            {data.activePlan.usedSms}/{data.activePlan.quotaSms} SMS
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card p-3 flex justify-between items-center text-black dark:text-white'>
                    <span className='text-sm font-normal'>
                      <EventIcon /> Expired On
                    </span>
                    <b className='text-sm font-black'>
                      {data.activePlan.expiredAt}
                    </b>
                  </div>
                </div>
              ) : (
                <div className='not-package rounded-lg bg-white border border-roamin-neutral-600 dark:border-roamin-dark-400 dark:bg-roamin-dark-700 text-black dark:text-white'>
                  <div className='caption text-center py-10'>
                    <img
                      className='mx-auto mb-5'
                      src={NoSimImage}
                      alt={NoSimImage}
                    />
                    <p className='text-sm font-normal text-black dark:text-white'>
                      You don't have an active data plan
                    </p>
                  </div>
                  <button className='bg-roamin-yellow-500 color-black font-extrabold text-sm px-4 py-4 rounded-b-[9px] w-full text-[18px] text-black'>
                    Buy Now
                  </button>
                </div>
              )}
            </>
          )}
        </div>
        <div className='order-section mb-4'>
          <h3 className='text-base font-extrabold mb-4 text-black dark:text-white'>
            Order
          </h3>
          <Link
            to={'/history'}
            className='order-menu rounded-lg bg-white border p-4 flex justify-between border-roamin-neutral-600 dark:border-roamin-dark-400 dark:bg-roamin-dark-700 text-black dark:text-white'
          >
            <span className='text-base font-medium'>Order History</span>
            <ChevronRightIcon />
          </Link>
        </div>
        <div className='info-section mb-4'>
          <h3 className='text-base font-extrabold mb-4 text-black dark:text-white'>
            More Info
          </h3>
          <div className='more-info border border-roamin-neutral-600 dark:border-roamin-dark-400 rounded-[9px] items-center bg-white dark:bg-roamin-dark-700 text-black dark:text-white divide-y divide-roamin-neutral-600 dark:divide-roamin-dark-400'>
            <div
              onClick={() => tab(1)}
              className='cardContent flex justify-between px-3 py-3'
            >
              <span className='text-base font-medium'>Partner with Us</span>
              {show == 1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </div>
            <div
              className={`contentHide1 ${show == 1 ? 'block' : 'hidden'} bg-white dark:bg-roamin-dark-700 text-black dark:text-white`}
            >
              <div className='cardContent flex flex-col items-start px-3 py-3'>
                <p className='text-[12px] font-medium text-[#989898]'>
                  PLAN TYPE
                </p>
                <h6 className='text-[16px] font-medium'>
                  Data, Call (100 Minutes), Text (20 SMS)
                </h6>
              </div>
            </div>
            <div
              onClick={() => tab(2)}
              className='cardContent flex justify-between px-3 py-3'
            >
              <span className='text-base font-medium'>About Us</span>
              {show == 2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </div>
            <div
              className={`contentHide2 ${show == 2 ? 'block' : 'hidden'} bg-white dark:bg-roamin-dark-700 text-black dark:text-white`}
            >
              <div className='cardContent flex flex-col items-start px-3 py-3'>
                <p className='text-[12px] font-medium text-[#989898]'>
                  PLAN TYPE
                </p>
                <h6 className='text-[16px] font-medium'>
                  Data, Call (100 Minutes), Text (20 SMS)
                </h6>
              </div>
            </div>
            <div
              onClick={() => tab(3)}
              className='cardContent flex justify-between px-3 py-3'
            >
              <span className='text-base font-medium'>Help Center</span>
              {show == 3 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </div>
            <div
              className={`contentHide3 ${show == 3 ? 'block' : 'hidden'} bg-white dark:bg-roamin-dark-700 text-black dark:text-white`}
            >
              <div className='cardContent flex flex-col items-start px-3 py-3'>
                <p className='text-[12px] font-medium text-[#989898]'>
                  PLAN TYPE
                </p>
                <h6 className='text-[16px] font-medium'>
                  Data, Call (100 Minutes), Text (20 SMS)
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className='settings-section mb-4'>
          <h3 className='text-base font-extrabold mb-4 text-black dark:text-white'>
            Settings
          </h3>
          <div className='setting-menu bg-white border p-4 flex justify-between rounded-t-[9px] border-roamin-neutral-600 dark:border-roamin-dark-400 dark:bg-roamin-dark-700 text-black dark:text-white'>
            <span className='text-base font-medium'>Languange: English</span>
            <ChevronRightIcon />
          </div>
          <div className='setting-menu bg-white border p-4 flex justify-between rounded-b-[9px] border-roamin-neutral-600 dark:border-roamin-dark-400 dark:bg-roamin-dark-700 text-black dark:text-white'>
            <span className='text-base font-medium'>Display Mode</span>
            <AntSwitch
              {...label}
              checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)}
              inputProps={{ 'aria-label': 'ant design' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MProfile;
