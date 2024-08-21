import React, { useEffect, useMemo, useState } from 'react'
import { HEADER_TYPE } from 'interfaces';
import { Header } from 'components';
import ProfileImage from 'assets/img/profile.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ManImage from 'assets/img/man.png';
import NoSimImage from 'assets/img/no-sim.png';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Switch from '@mui/material/Switch';
import {ProgressCircle} from 'components';
import EventIcon from '@mui/icons-material/Event';
import { Link } from 'react-router-dom';
import { useGetProfile } from 'hooks';

const MProfile = () => {
  const [isLogin, setLogin] = useState<boolean>(true);
  const [isPackage, setIspackage] = useState<boolean>(false);
  const [show, setShow] = useState<number>(0);
  const label = { inputProps: { 'aria-label': 'Color switch demo' } };
  const {data, fetching} = useGetProfile();

  const tab = (value: number) => {show == value ? setShow(0) : setShow(value)}
  const usedTotal = (data: any) => {return 100 - (data?.quotaData && data?.usedData ? (data?.quotaData / data?.usedData) * 100 : 0)} 
  const total = useMemo(() => usedTotal(data?.activePlan), [data?.activePlan])

  useEffect(() => {
    if(!data){
      fetching();
    }

    console.log(total)
  }, [data]);

  return (
    <>
      <Header headerType={HEADER_TYPE.NORMAL} headerTitle='Account' />
      <div className='content-wrapper p-4 pb-[120px] bg-[#FFF7DA] min-h-[calc(100vh-6rem)]'>
        <div className="profile-section mb-4">
          {data?.profile
            ?  <div className="card flex flex-row gap-x-4 items-center rounded-lg bg-white p-4 border border-[#E2DFDF]">
                  <div className='user-profile basis-1/5'>
                    <img className='w-full rounded-full border' src={data.profile.profilePicture} alt={data.profile.profilePicture} />
                  </div>
                  <div className='user-name basis-3/4 flex flex-col gap-y-1 justify-between'>
                      <b className='text-xl font-extrabold'>{data.profile.name}</b>
                      <p className='text-base font-[350]'>{data.profile.phoneNumber}</p>
                  </div>
                  <div className="user-info basis-auto">
                      <ChevronRightIcon />
                  </div>
              </div>
            : <div className="profile-not-login rounded-lg bg-white p-4 w-full text-center">
                <img className='mx-auto mb-4' src={ProfileImage} alt={ProfileImage}/>
                <p className='text-lg font-light mb-4'>Login to access easy connections on every trip!</p>
                <button className='bg-[#FFEC69] color-[#000000] font-extrabold text-sm px-4 py-4 rounded-[9px] w-2/4 text-[18px]'>
                  Login
                </button>
              </div>
            }
          </div>
          <div className="package-section mb-4">
            <h3 className='text-base font-extrabold mb-4'>Current Active Plan</h3>
            {data?.activePlan 
              ? <div className="active-package rounded-lg bg-white border border-[#E2DFDF]">
                  <div className="card p-3 flex flex-row gap-x-4 items-center border-b border-b-[#E2DFDF]">
                      <div className='square-section basis-1/5'>
                        <div className="w-[83px] h-[51px] bg-[#E7E7E7] rounded-[9px]"></div>
                      </div>
                      <div className='package-name basis-3/4 flex flex-col gap-y-1 justify-between'>
                          <b className='text-lg font-extrabold'>{data.activePlan.name}</b>
                      </div>
                      <div className="package-info basis-auto">
                          <ChevronRightIcon />
                      </div>
                  </div>
                  <div className="card p-3 flex flex-row gap-x-2 items-center border-b border-b-[#E2DFDF]">
                      <div className='square-section basis-2/5'>
                        <ProgressCircle value={total} total={data.activePlan.quotaData} />
                      </div>
                      <div className='package-name basis-3/5 flex flex-col gap-y-1 justify-between'>
                          <div className="keterangan-section grid grid-cols-2 gap-1">
                              <div className="keterangan">
                                  <span className='block text-[10px] font-light'>USED DATA</span>
                                  <b className='text-sm font-extrabold'>{data.activePlan.usedData} MB</b>
                              </div>
                              <div className="keterangan">
                                  <span className='block text-[10px] font-light'>CALLS</span>
                                  <b className='text-sm font-extrabold'>{data.activePlan.usedCall}/{data.activePlan.quotaCall} Minutes</b>
                              </div>
                              <div className="keterangan">
                                  <span className='block text-[10px] font-light'>TOTAL  DATA</span>
                                  <b className='text-sm font-extrabold'>{data.activePlan.quotaData} GB</b>
                              </div>
                              <div className="keterangan">
                                  <span className='block text-[10px] font-light'>TEXT</span>
                                  <b className='text-sm font-extrabold'>{data.activePlan.usedSms}/{data.activePlan.quotaSms} SMS</b>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='card p-3 flex justify-between items-center'>
                    <span className='text-sm font-normal'><EventIcon /> Expired On</span>
                    <b className='text-sm font-black'>{data.activePlan.expiredAt}</b>
                  </div>
                </div>
              : <div className="not-package rounded-lg bg-white border border-[#E2DFDF]">
                  <div className="caption text-center py-10">
                    <img className='mx-auto mb-5' src={NoSimImage} alt={NoSimImage} />
                    <p className='text-sm font-normal'>You don't have an active data plan</p>
                  </div>
                  <button className='bg-[#FFEC69] color-[#000000] font-extrabold text-sm px-4 py-4 rounded-b-[9px] w-full text-[18px]'>
                    Buy Now
                  </button>
                </div>
              }
          </div>
          <div className="order-section mb-4">
            <h3 className='text-base font-extrabold mb-4'>Order</h3>
            <Link to={'/history'} className="order-menu rounded-lg bg-white border p-4 flex justify-between border-[#E2DFDF]">
                <span className='text-base font-medium'>Order History</span>
                <ChevronRightIcon />
            </Link>
          </div>
          <div className="info-section mb-4">
            <h3 className='text-base font-extrabold mb-4'>More Info</h3>
            <div onClick={() => tab(1)} className='cardContent flex justify-between border border-t-[#E2DFDF] rounded-t-[9px] px-3 py-3 items-center bg-white'>
              <span className='text-base font-medium'>Partner with Us</span>
                {show == 1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </div>
            <div className={`contentHide1 ${show == 1 ? 'block': 'hidden'} bg-white`}>
                <div className='cardContent flex flex-col items-start border border-t-[#E2DFDF] px-3 py-3'>
                    <p className='text-[12px] font-medium text-[#989898]'>PLAN TYPE</p>
                    <h6 className='text-[16px] font-medium'>Data, Call (100 Minutes), Text (20 SMS)</h6>
                </div>
            </div>
            <div onClick={() => tab(2)} className='cardContent flex justify-between border border-t-[#E2DFDF] px-3 py-3 items-center bg-white'>
              <span className='text-base font-medium'>About Us</span>
                {show == 2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </div>
            <div className={`contentHide2 ${show == 2 ? 'block': 'hidden'} bg-white`}>
                <div className='cardContent flex flex-col items-start border border-t-[#E2DFDF] px-3 py-3'>
                    <p className='text-[12px] font-medium text-[#989898]'>PLAN TYPE</p>
                    <h6 className='text-[16px] font-medium'>Data, Call (100 Minutes), Text (20 SMS)</h6>
                </div>
            </div>
            <div onClick={() => tab(3)} className='cardContent flex justify-between border border-t-[#E2DFDF] rounded-b-[9px] px-3 py-3 items-center bg-white'>
                <span className='text-base font-medium'>Help Center</span>
                {show == 3 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </div>
            <div className={`contentHide3 ${show == 3 ? 'block': 'hidden'} bg-white`}>
                <div className='cardContent flex flex-col items-start border border-t-[#E2DFDF] px-3 py-3'>
                    <p className='text-[12px] font-medium text-[#989898]'>PLAN TYPE</p>
                    <h6 className='text-[16px] font-medium'>Data, Call (100 Minutes), Text (20 SMS)</h6>
                </div>
            </div>
          </div>
          <div className="settings-section mb-4">
            <h3 className='text-base font-extrabold mb-4'>Settings</h3>
            <div className="setting-menu bg-white border p-4 flex justify-between rounded-t-[9px] border-[#E2DFDF]">
                <span className='text-base font-medium'>Languange: English</span>
                <ChevronRightIcon />
            </div>
            <div className="setting-menu bg-white border p-4 flex justify-between rounded-b-[9px] border-[#E2DFDF]">
                <span className='text-base font-medium'>Display Mode</span>
                <Switch {...label} defaultChecked />
            </div>
          </div>
      </div>
    </>
  )
}

export default MProfile