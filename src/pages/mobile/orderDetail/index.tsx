import React, { useEffect } from 'react';
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import VisaImage from 'assets/img/visa.png';
import { useGetOrderDetail } from 'hooks';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import moment from 'moment';

const MOrderDetail = () => {
  const { id } = useParams();
  const { data: orderDetails, fetching: getOrderDetails } = useGetOrderDetail();

  useEffect(() => {
    getOrderDetails(id || '');
  }, []);
  return (
    <>
      <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Order Details' />
      <div className='content-wrapper p-4 bg-[#FFF7DA] dark:bg-roamin-dark-600 min-h-[calc(100vh-4rem)]'>
        <div className='order-infomation mt-4'>
          <h2 className='text-lg font-extrabold mb-2 dark:text-white'>
            Order Information
          </h2>
          <div className='card bg-white divide-y divide-roamin-neutral-600 dark:divide-roamin-dark-400 dark:text-white dark:bg-roamin-dark-700 rounded-[9px] mb-3'>
            <div className='cardContent flex flex-col items-start px-3 py-3'>
              <p className='text-[12px] font-medium text-[#989898]'>ORDER ID</p>
              <h6 className='text-[16px] font-medium'>
                {orderDetails?.orderId}
              </h6>
            </div>
            <div className='cardContent flex flex-col items-start px-3 py-3'>
              <p className='text-[12px] font-medium text-[#989898]'>
                ORDER DATE
              </p>
              <h6 className='text-[16px] font-medium'>
                {moment().format('dddd, DD MMM YYYY')}
              </h6>
            </div>
            <div className='cardContent flex flex-col items-start px-3 py-3'>
              <p className='text-[12px] font-medium text-[#989898]'>
                ORDER STATUS
              </p>
              <h6 className='text-[16px] font-medium'>
                {_.startCase(_.toLower(orderDetails?.orderStatusString))}
              </h6>
            </div>
          </div>
        </div>
        <div className='package-plan mt-4'>
          <h2 className='text-lg font-extrabold mb-2 dark:text-white'>
            Package Plan
          </h2>
          <div className='listCard bg-white divide-y divide-roamin-neutral-600 dark:divide-roamin-dark-400 dark:text-white dark:bg-roamin-dark-700 rounded-[9px]'>
            <div className='cardHeader p-4 flex items-center'>
              <div className='w-[103px] h-[63px] bg-[#E7E7E7] rounded-[9px]'>
                {orderDetails?.pic && (
                  <img
                    className='object-cover w-[103px] h-[63px] rounded-[9px]'
                    src={orderDetails?.pic}
                    alt=''
                  />
                )}
              </div>
              <h1 className='ml-[20px] text-xl font-extrabold'>
                {orderDetails?.name}
              </h1>
            </div>
            <div className='cardContent flex justify-between px-4 py-6 items-center'>
              <span className='flex'>
                <SignalCellularAltIcon className='mr-3' />
                Data
              </span>
              <h3 className='text-[16px] font-black'>
                {orderDetails?.quotaData}
              </h3>
            </div>
            <div className='cardContent flex justify-between px-4 py-6 items-center'>
              <span className='flex'>
                <CalendarMonthIcon className='mr-3' />
                Validity
              </span>
              <h3 className='text-[16px] font-black'>
                {orderDetails?.validity}
              </h3>
            </div>
            <div className='cardContent flex justify-between px-4 py-6 items-center'>
              <span className='flex'>
                <LanguageIcon className='mr-3' />
                Network
              </span>
              <h3 className='text-[16px] font-black'>Indosat</h3>
            </div>
            <div className='cardContent flex justify-between px-4 py-6 items-center'>
              <span className='flex'>
                <PublicIcon className='mr-3' />
                Coverage
              </span>
              <h3 className='text-[16px] font-black'>
                {orderDetails?.country}
              </h3>
            </div>
          </div>
        </div>
        <div className='payment-detail mt-4'>
          <h2 className='text-lg font-extrabold mb-2 dark:text-white'>
            Payment Details
          </h2>
          <div className='listCard bg-white divide-y divide-roamin-neutral-600 dark:divide-roamin-dark-400 dark:text-white dark:bg-roamin-dark-700 rounded-[9px]'>
            <div className='cardContent flex justify-between p-4 items-center'>
              <span className='text-xs font-medium'>PAYMENT METHOD</span>
              <p className='text-[16px] font-medium inline-flex'>
                <img src={VisaImage} alt='' /> **** 7842
              </p>
            </div>
            <div className='cardContent flex justify-between p-4 items-center'>
              <span className='text-xs font-medium'>TOTAL PRICE</span>
              <h3 className='text-[20px] font-black'>
                {orderDetails?.priceString}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MOrderDetail;
