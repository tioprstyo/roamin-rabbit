import React, { useEffect } from 'react';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import TuneIcon from '@mui/icons-material/Tune';
import Slider from 'react-slick';
import PhoneInput from 'react-phone-input-2';
import { Header } from 'components';
import { HEADER_TYPE, ListParamsProps } from 'interfaces';
import { useRecoilValue } from 'recoil';
import { slidetSettingState } from 'atom/sliderSetting';
import { useSearchParams } from 'react-router-dom';
import { useGetPackageList } from 'hooks';
import CircularProgress from '@mui/material/CircularProgress';
import { PackagesProps } from 'interfaces';

const MListing = () => {
  const settings = useRecoilValue(slidetSettingState);
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading, fetching } = useGetPackageList();

  const params: ListParamsProps = {};

  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  console.log(params);

  useEffect(() => {
    if (!data) {
      fetching(params);
    }
  }, [data]);

  return (
    <>
      <Header headerType={HEADER_TYPE.DEFAULT} headerTitle='Roaming Rabbit' />
      <div className='content-wrapper p-4 bg-[#FFF7DA] dark:bg-roamin-dark-600 min-h-[calc(100vh-6rem)]'>
        <div className='form-content grid grid-cols-4 gap-3 items-end'>
          <div className='form col-span-3 flex flex-col gap-2'>
            <label
              className='text-[14px] font-normal text-black dark:text-white'
              htmlFor=''
            >
              Choose your trip
            </label>
            <PhoneInput
              country={'id'}
              inputClass='px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full'
              inputStyle={{
                width: '100%',
                height: 'auto',
                borderRadius: 9,
                paddingLeft: 60,
              }}
              buttonStyle={{
                borderRadius: '9px 0 0 9px',
                backgroundColor: 'white',
                width: 51,
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
              className='bg-white color-[#000000] font-extrabold uppercase text-sm px-3 py-3 rounded-[9px] w-full text-[14px] border border-[#E3E3E3]'
              type='button'
            >
              <TuneIcon />
            </button>
          </div>
        </div>
        {isLoading ? (
          <div className='loading mt-10 flex justify-center'>
            <CircularProgress />
          </div>
        ) : (
          <>
            {data?.data && (
              <>
                {Object.keys(data?.data).map((lists, i) => (
                  <div className='listing' key={`${i}-list`}>
                    <Slider {...settings}>
                      {data?.data[lists].map((li: PackagesProps, j: number) => (
                        <div key={j}>
                          <div className='listCard border border-roamin-neutral-600 dark:border-roamin-dark-400 divide-y divide-roamin-neutral-600 dark:divide-roamin-dark-400 bg-white dark:bg-roamin-dark-700 rounded-[9px] mt-5'>
                            <div className='cardHeader p-4 flex items-center text-black dark:text-white'>
                              <div className='w-[103px] h-[63px] bg-roamin-neutral-500 rounded-[9px]' />
                              <h1 className='ml-[20px] text-xl font-extrabold'>
                                {li.name}
                              </h1>
                            </div>
                            <div className='cardContent flex justify-between px-4 py-6 text-black dark:text-white'>
                              <span className='flex'>
                                <SignalCellularAltIcon className='mr-3' />
                                Data
                              </span>
                              <h3 className='text-[16px] font-black'>
                                {li.quotaData}
                              </h3>
                            </div>
                            <div className='cardContent flex justify-between px-4 py-6 text-black dark:text-white'>
                              <span className='flex'>
                                <CalendarMonthIcon className='mr-3' />
                                Validity
                              </span>
                              <h3 className='text-[16px] font-black'>
                                {li.validityDay}
                              </h3>
                            </div>
                            <div className='cardContent flex justify-between px-4 py-6 text-black dark:text-white'>
                              <span className='flex'>
                                <LanguageIcon className='mr-3' />
                                Network
                              </span>
                              <h3 className='text-[16px] font-black'>
                                {li.network}
                              </h3>
                            </div>
                            <div className='cardContent flex justify-between px-4 py-6 text-black dark:text-white'>
                              <span className='flex'>
                                <PublicIcon className='mr-3' />
                                Coverage
                              </span>
                              <h3 className='text-[16px] font-black'>
                                {li.speed}
                              </h3>
                            </div>
                            <div className='cardContent flex justify-between px-4 py-6 text-black dark:text-white'>
                              <span className='flex'>
                                <PaymentsOutlinedIcon className='mr-3' />
                                Price
                              </span>
                              <h3 className='text-[16px] font-black'>
                                {li.price}
                              </h3>
                            </div>
                            <div className='cardButton flex justify-center px-4 py-6'>
                              <button
                                className='bg-roamin-yellow-500 color-black font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] w-9/12 text-[14px]'
                                type='button'
                              >
                                Choose
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default MListing;
