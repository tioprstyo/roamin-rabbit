import React, { useEffect, useState } from 'react';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { Header } from 'components';
import { HEADER_TYPE, OtherPackageData } from 'interfaces';
import { useRecoilValue } from 'recoil';
import { slidetSettingState } from 'atom/sliderSetting';
import { useGetPackageDetail } from 'hooks';

const MDetailProduct = () => {
  const { packageId } = useParams() as { packageId: string };
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);
  const settings = useRecoilValue(slidetSettingState);
  const { data, fetching } = useGetPackageDetail();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetching(packageId);
  }, [navigate, packageId]);

  return (
    <div className='relative max-w-inherit'>
      <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Package Details' />
      <div className='content-wrapper bg-[#FFF7DA] dark:bg-roamin-dark-600 min-h-[calc(100vh-4rem)] pb-28'>
        <div className='listCard bg-white dark:bg-roamin-dark-700 divide-y divide-roamin-neutral-600 dark:divide-roamin-dark-400 text-black dark:text-white'>
          <div className='cardHeader p-4 flex items-center'>
            <div className='w-[103px] h-[63px] bg-[#E7E7E7] rounded-[9px]'>
              {data?.package?.pic && (
                <img
                  className='object-cover w-[103px] h-[63px] rounded-[9px]'
                  src={data?.package?.pic}
                  alt=''
                />
              )}
            </div>
            <h1 className='ml-[20px] text-xl font-extrabold'>
              {data?.package.name}
            </h1>
          </div>
          <div className='cardContent flex justify-between px-8 py-6 items-center'>
            <span className='flex'>
              <SignalCellularAltIcon className='mr-3' />
              Data
            </span>
            <h3 className='text-[16px] font-black'>
              {data?.package.quotaData}
            </h3>
          </div>
          <div className='cardContent flex justify-between px-8 py-6 items-center'>
            <span className='flex'>
              <CalendarMonthIcon className='mr-3' />
              Validity
            </span>
            <h3 className='text-[16px] font-black'>{data?.package.validity}</h3>
          </div>
          <div className='cardContent flex justify-between px-8 py-6 items-center'>
            <span className='flex'>
              <LanguageIcon className='mr-3' />
              Network
            </span>
            <h3 className='text-[16px] font-black'>{data?.package.network}</h3>
          </div>
          <div className='cardContent flex justify-between px-8 py-6 items-center'>
            <span className='flex'>
              <PaymentsOutlinedIcon className='mr-3' />
              Price
            </span>
            <h3 className='text-[16px] font-black'>
              {data?.package.priceString}
            </h3>
          </div>
        </div>
        <div className='detail-content p-4'>
          <div className='listCard dark:text-white border border-roamin-neutral-600 dark:border-roamin-dark-400 divide-y divide-roamin-neutral-600 dark:divide-roamin-dark-400 bg-white dark:bg-roamin-dark-700 rounded-[9px]'>
            <div className='cardContent flex justify-between px-3 py-3 items-center'>
              <h6 className='text-[16px] font-medium'>
                Coverage Country - {data?.package.country}
              </h6>
              <SignalCellularAltIcon />
            </div>
            <div
              onClick={() => setShow(!show)}
              className='cardContent flex justify-between px-3 py-3 items-center'
            >
              <h6 className='text-[16px] font-medium'>
                Additional Information
              </h6>
              {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </div>
            <div className={`contentHide ${show ? 'block' : 'hidden'}`}>
              <div className='cardContent flex flex-col items-start px-3 py-3'>
                <p className='text-[12px] font-medium text-[#989898]'>
                  PLAN TYPE
                </p>
                <h6 className='text-[16px] font-medium'>
                  {data?.package.planType}
                </h6>
              </div>
              <div className='cardContent flex flex-col items-start px-3 py-3'>
                <p className='text-[12px] font-medium text-[#989898]'>SPEED</p>
                <h6 className='text-[16px] font-medium'>
                  {data?.package.speed}
                </h6>
                <span className='text-[14px] font-light'>
                  This data plan is expected to have 5G speed. However, network
                  coverage and speed may vary by location and time of day.
                </span>
              </div>
              <div className='cardContent flex flex-col items-start px-3 py-3'>
                <p className='text-[12px] font-medium text-[#989898]'>
                  INSTALATION
                </p>
                <h6 className='text-[16px] font-medium'>
                  Scan QR or enter code manually
                </h6>
              </div>
              <div className='cardContent flex flex-col items-start px-3 py-3'>
                <p className='text-[12px] font-medium text-[#989898]'>
                  ACTIVATION POLICY
                </p>
                <h6 className='text-[16px] font-medium'>
                  The validity period starts when the eSIM connects to any
                  supported network/s.
                </h6>
              </div>
              <div className='cardContent flex flex-col items-start px-3 py-3'>
                <p className='text-[12px] font-medium text-[#989898]'>
                  IP ROUTING
                </p>
                <h6 className='text-[16px] font-medium'>
                  {data?.package.ipRouting ? 'Yes' : 'No'}
                </h6>
              </div>
              <div className='cardContent flex flex-col items-start px-3 py-3'>
                <p className='text-[12px] font-medium text-[#989898]'>
                  THETERING
                </p>
                <h6 className='text-[16px] font-medium'>
                  {data?.package.quotaThetering}
                </h6>
              </div>
              <div className='cardContent flex flex-col items-start px-3 py-3'>
                <p className='text-[12px] font-medium text-[#989898]'>
                  eKYC (IDENTITY VERIFICATION)
                </p>
                <h6 className='text-[16px] font-medium'>
                  {data?.package.ekyc ? 'Required' : 'Not Required'}
                </h6>
              </div>
              <div className='cardContent flex flex-col items-start px-3 py-3'>
                <p className='text-[12px] font-medium text-[#989898]'>
                  Top Up Options
                </p>
                <h6 className='text-[16px] font-medium'>
                  {data?.package.topupOption ? 'Yes' : 'No'}
                </h6>
              </div>
            </div>
          </div>
          <div className='listing mt-6'>
            <h6 className='text-[18px] font-extrabold dark:text-white'>
              Available Other Package (5)
            </h6>
            <Slider {...settings}>
              {data?.otherPackages.map((other: OtherPackageData, i: number) => (
                <div key={i}>
                  <div className='listCard border border-roamin-neutral-600 dark:border-roamin-dark-400 bg-white dark:bg-roamin-dark-700 divide-y divide-roamin-neutral-600 dark:divide-roamin-dark-400 rounded-[9px] mt-5 dark:text-white'>
                    <div className='cardHeader p-4 flex items-center'>
                      <div className='w-[103px] h-[63px] bg-[#E7E7E7] rounded-[9px]'>
                        {data?.package?.pic && (
                          <img
                            className='object-cover w-[103px] h-[63px] rounded-[9px]'
                            src={data?.package?.pic}
                            alt=''
                          />
                        )}
                      </div>
                      <h1 className='ml-[20px] text-xl font-extrabold'>
                        {data?.package?.name}
                      </h1>
                    </div>
                    <div className='cardContent flex justify-between px-4 py-6 items-center'>
                      <span className='flex'>
                        <SignalCellularAltIcon className='mr-3' />
                        Data
                      </span>
                      <h3 className='text-[16px] font-black'>
                        {other.quotaData}
                      </h3>
                    </div>
                    <div className='cardContent flex justify-between px-4 py-6 items-center'>
                      <span className='flex'>
                        <CalendarMonthIcon className='mr-3' />
                        Validity
                      </span>
                      <h3 className='text-[16px] font-black'>
                        {other.validity}
                      </h3>
                    </div>
                    <div className='cardFooter grid grid-cols-2 items-center justify-center p-4'>
                      <div className='cardPrice text-center'>
                        <h6 className='text-xl font-black'>
                          {other.priceString}
                        </h6>
                      </div>
                      <div className='cardButton text-center'>
                        <button
                          onClick={() =>
                            navigate(`/detail/package/${other.id}`)
                          }
                          className='textblack dark:text-[#FFEC69] font-extrabold text-sm px-2 py-3 border border-black dark:border-[#FFEC69] rounded-[9px] w-full text-[14px]'
                          type='button'
                        >
                          Choose
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className='max-w-inherit mx-auto fromBuy grid grid-cols-2 items-center justify-center border-t-roamin-neutral-600 dark:border-t-roamin-dark-400 p-4 fixed bottom-0 left-0 right-0 bg-white dark:bg-roamin-dark-800'>
        <div className='buyPrice text-center'>
          <h6 className='text-xl font-black dark:text-white'>
            {data?.package.priceString}
          </h6>
        </div>
        <div className='buyButton text-center'>
          <button
            onClick={() => navigate(`/confirmasi?packageId=${packageId}`)}
            className='bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] w-9/12 text-[14px]'
            type='button'
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MDetailProduct;
