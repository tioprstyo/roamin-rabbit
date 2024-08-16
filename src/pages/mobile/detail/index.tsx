import React, { useState } from 'react'
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import FlagImage from 'assets/img/flag.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import {ProgressCircle} from 'components';
import EventIcon from '@mui/icons-material/Event';
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone';

const MDetail = () => {

  return (
    <>
        <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Detail' />
        <div className='content-wrapper bg-[#FFF7DA] min-h-[calc(100vh-4rem)]'>
            <div className="header-info grid grid-rows-1 bg-white">
                <div className="info grid grid-cols-2 gap-x-2 gap-y-5 border border-b-[#E2DFDF] p-4">
                    <div className='paket-name'>
                        <h1 className='text-xl font-extrabold'>Sobat Halo</h1>
                    </div>
                    <div className="paket-status">
                        <span className='px-4 py-2 bg-[#FFEC69] rounded-[9px] text-xs font-extrabold'>Not Active</span>
                    </div>
                    <div className='paket-square'>
                        <div className="w-[157px] h-[97px] bg-[#E7E7E7] rounded-[9px]"></div>
                    </div>
                    <div className="paket-info flex flex-col justify-center">
                        <h6 className='text-base font-extrabold'>20 GB | 30 days</h6>
                        <span className='text-xs font-normal block mt-4'>ICCID</span>
                        <b className='text-sm font-extrabold break-words'>8965012404030963967</b>
                    </div>
                </div>
                <div className="plan-details flex justify-between border border-b-[#E2DFDF] p-3">
                    <span className='flex items-center text-sm font-normal'><TextSnippetOutlinedIcon className='mr-2'/> Plan Details</span>
                    <ChevronRightIcon />
                </div>
            </div>
            <div className='infornationn p-4'>
                <div className="active-package rounded-lg bg-white border border-[#E2DFDF] mb-4">
                  <div className="card p-3 flex items-center border-b border-b-[#E2DFDF]">
                      <span className='flex items-center text-sm font-normal'><InsertChartOutlinedTwoToneIcon className='mr-2'/> Usage Data</span>
                  </div>
                  <div className="card p-3 flex flex-row gap-x-2 items-center border-b border-b-[#E2DFDF]">
                      <div className='square-section basis-2/5'>
                        <ProgressCircle value={80} />
                      </div>
                      <div className='package-name basis-3/5 flex flex-col gap-y-1 justify-between'>
                          <div className="keterangan-section grid grid-cols-2 gap-1">
                              <div className="keterangan">
                                  <span className='block text-[10px] font-light'>USED DATA</span>
                                  <b className='text-sm font-extrabold'>19 MB</b>
                              </div>
                              <div className="keterangan">
                                  <span className='block text-[10px] font-light'>CALLS</span>
                                  <b className='text-sm font-extrabold'>60/100 Minutes</b>
                              </div>
                              <div className="keterangan">
                                  <span className='block text-[10px] font-light'>TOTAL  DATA</span>
                                  <b className='text-sm font-extrabold'>20 GB</b>
                              </div>
                              <div className="keterangan">
                                  <span className='block text-[10px] font-light'>TEXT</span>
                                  <b className='text-sm font-extrabold'>15/20 SMS</b>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='card p-3 flex justify-between items-center'>
                    <span className='flex items-center text-sm font-normal'><EventIcon className='mr-2' /> Expired On</span>
                    <b className='text-sm font-black'>15 June 2024 | 11:28 (GMT)</b>
                  </div>
                </div>
                <div className="text-plan text-center mb-4 p-4">
                    <h2 className='text-[22px] font-semibold mb-4'>Want to reactivate this <br /> data plan?</h2>
                    <p className='text-sm font-light'>Top up by selecting and purchase a data plan</p>
                </div>
                <div className='form-topup'>
                    <button  className="bg-[#FFEC69] text-[#000000] font-extrabold text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 w-full text-[14px]" type="button">
                        Top Up
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default MDetail