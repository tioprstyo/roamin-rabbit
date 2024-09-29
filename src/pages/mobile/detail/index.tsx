import React, { useState, useEffect } from 'react';
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { ProgressCircle } from 'components';
import EventIcon from '@mui/icons-material/Event';
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone';
import { useGetOrderDetail, useGetPlanDetail } from 'hooks';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment-timezone';

const MDetail = () => {
  const { data: orderDetail, fetching: getOrderDetail } = useGetOrderDetail();
  const { data: planDetail, fetching: getPlanDetail } = useGetPlanDetail();
  const params = useParams();

  useEffect(() => {
    getOrderDetail(params?.id || '');
  }, [params]);

  useEffect(() => {
    getPlanDetail(orderDetail?.activePackageId || '');
  }, [orderDetail]);

  const totalPrecentage =
    ((planDetail?.usedData || 0) / (planDetail?.quotaData || 0)) * 100;

  return (
    <>
      <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Detail' />
      <div className='content-wrapper bg-[#FFF7DA] dark:bg-roamin-dark-600 min-h-[calc(100vh-4rem)]'>
        <div className='header-info grid grid-rows-1 bg-white dark:bg-roamin-dark-700'>
          <div className='info grid grid-cols-2 gap-x-2 gap-y-5 border-b border-b-[#E2DFDF] dark:border-b-roamin-dark-500 p-4'>
            <div className='paket-name'>
              <h1 className='text-xl font-extrabold dark:text-white'>
                {orderDetail?.name}
              </h1>
            </div>
            <div className='paket-status'>
              <span className='px-4 py-2 bg-[#FFEC69] rounded-[9px] text-xs font-extrabold'>
                {orderDetail?.isExpired
                  ? 'Expired'
                  : orderDetail?.isActivated
                    ? 'Active'
                    : 'Not Active'}
              </span>
            </div>
            <div className='paket-square'>
              <div className='w-[157px] h-[97px] bg-[#E7E7E7] rounded-[9px]'>
                {orderDetail?.pic && (
                  <img
                    className='object-cover w-[157px] h-[97px] rounded-[9px]'
                    src={orderDetail?.pic}
                    alt=''
                  />
                )}
              </div>
            </div>
            <div className='paket-info flex flex-col justify-center'>
              <h6 className='text-base font-extrabold dark:text-white'>
                {orderDetail?.quotaData} | {orderDetail?.validity}
              </h6>
              <span className='text-xs font-normal block mt-4 dark:text-white'>
                ICCID
              </span>
              <b className='text-sm font-extrabold break-words dark:text-white'>
                {orderDetail?.iccid}
              </b>
            </div>
          </div>
          <Link to={`/detail/sim/${params?.id}`}>
            <div className='plan-details flex justify-between border-b border-b-[#E2DFDF] dark:border-b-roamin-dark-500 p-3'>
              <span className='flex items-center text-sm font-normal dark:text-white'>
                <TextSnippetOutlinedIcon className='mr-2' /> Plan Details
              </span>
              <ChevronRightIcon className='dark:text-white' />
            </div>
          </Link>
        </div>
        <div className='infornationn p-4'>
          <div className='active-package rounded-lg bg-white dark:bg-roamin-dark-700 border border-[#E2DFDF] dark:border-roamin-dark-500 mb-4'>
            <div className='card p-3 flex items-center border-b border-b-[#E2DFDF] dark:border-b-roamin-dark-500'>
              <span className='flex items-center text-sm font-normal dark:text-white'>
                <InsertChartOutlinedTwoToneIcon className='mr-2' /> Usage Data
              </span>
            </div>
            <div className='card p-3 flex flex-row gap-x-2 items-center border-b border-b-[#E2DFDF] dark:border-b-roamin-dark-500'>
              <div className='square-section basis-2/5'>
                <ProgressCircle
                  value={totalPrecentage}
                  total={planDetail?.quotaData}
                />
              </div>
              <div className='package-name basis-3/5 flex flex-col gap-y-1 justify-between'>
                <div className='keterangan-section grid grid-cols-2 gap-1 dark:text-white'>
                  <div className='keterangan'>
                    <span className='block text-[10px] font-light'>
                      USED DATA
                    </span>
                    <b className='text-sm font-extrabold'>
                      {planDetail?.usedData} MB
                    </b>
                  </div>
                  <div className='keterangan'>
                    <span className='block text-[10px] font-light'>CALLS</span>
                    <b className='text-sm font-extrabold'>
                      {planDetail?.usedCall}/{planDetail?.quotaCall} Minutes
                    </b>
                  </div>
                  <div className='keterangan'>
                    <span className='block text-[10px] font-light'>
                      TOTAL DATA
                    </span>
                    <b className='text-sm font-extrabold'>
                      {planDetail?.quotaData} GB
                    </b>
                  </div>
                  <div className='keterangan'>
                    <span className='block text-[10px] font-light'>TEXT</span>
                    <b className='text-sm font-extrabold'>
                      {planDetail?.usedSms}/{planDetail?.quotaSms} SMS
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className='card p-3 flex justify-between items-center dark:text-white'>
              <span className='flex items-center text-sm font-normal'>
                <EventIcon className='mr-2' /> Expired On
              </span>
              <b className='text-sm font-black'>
                {moment(orderDetail?.createdAt)
                  .tz('GMT')
                  .format('DD MMMM YYYY | hh:mm (z)')}
              </b>
            </div>
          </div>
          <div className='text-plan text-center mb-4 p-4'>
            <h2 className='text-[22px] font-semibold mb-4 dark:text-white'>
              Want to reactivate this <br /> data plan?
            </h2>
            <p className='text-sm font-light dark:text-roamin-neutral-700'>
              Top up by selecting and purchase a data plan
            </p>
          </div>
          <div className='form-topup'>
            <button
              className='bg-[#FFEC69] text-[#000000] font-extrabold text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 w-full text-[14px]'
              type='button'
            >
              Top Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MDetail;
