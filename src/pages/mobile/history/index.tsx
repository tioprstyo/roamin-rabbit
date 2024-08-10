import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const MHistory = () => {
  const navigate = useNavigate();

  return (
        <>
            <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Order History' />
            <div className='content-wrapper bg-[#FFF7DA] min-h-[calc(100vh-4rem)]'>
                <div className="card flex flex-row gap-x-2 items-center bg-white p-4 border border-[#E2DFDF]">
                    <div className='paket-square basis-1/4'>
                        <div className="w-[83px] h-[51px] bg-[#E7E7E7] rounded-[9px]"></div>
                    </div>
                    <div className='paket-name basis-3/4 flex flex-row gap-x-2 justify-between'>
                        <div className='left-info'>
                            <b className='text-xs font-black'>Konexii</b>
                            <p className='text-xs font-normal'>10 GB - Data</p>
                            <p className='text-xs font-normal'>7 Days - Validity</p>
                        </div>
                        <div className="right-info text-right">
                            <span className='text-xs font-normal'>22 Jun 2024, 00.55</span>
                            <p className='text-xs font-normal text-[#F8B421]'>Waiting Payment</p>
                            <b className='text-sm font-black'>Sobat Halo</b>
                        </div>
                    </div>
                    <div className="paket-info basis-auto">
                        <ChevronRightIcon />
                    </div>
                </div>
                <div className="card flex flex-row gap-x-2 items-center bg-white p-4 border border-[#E2DFDF]">
                    <div className='paket-square basis-1/4'>
                        <div className="w-[83px] h-[51px] bg-[#E7E7E7] rounded-[9px]"></div>
                    </div>
                    <div className='paket-name basis-3/4 flex flex-row gap-x-2 justify-between'>
                        <div className='left-info'>
                            <b className='text-xs font-black'>Konexii</b>
                            <p className='text-xs font-normal'>10 GB - Data</p>
                            <p className='text-xs font-normal'>7 Days - Validity</p>
                        </div>
                        <div className="right-info text-right">
                            <span className='text-xs font-normal'>22 Jun 2024, 00.55</span>
                            <p className='text-xs font-normal text-[#15DB59]'>Order Complate</p>
                            <b className='text-sm font-black'>Sobat Halo</b>
                        </div>
                    </div>
                    <div className="paket-info basis-auto">
                        <ChevronRightIcon />
                    </div>
                </div>
                <div className="card flex flex-row gap-x-2 items-center bg-white p-4 border border-[#E2DFDF]">
                    <div className='paket-square basis-1/4'>
                        <div className="w-[83px] h-[51px] bg-[#E7E7E7] rounded-[9px]"></div>
                    </div>
                    <div className='paket-name basis-3/4 flex flex-row gap-x-2 justify-between'>
                        <div className='left-info'>
                            <b className='text-xs font-black'>Konexii</b>
                            <p className='text-xs font-normal'>10 GB - Data</p>
                            <p className='text-xs font-normal'>7 Days - Validity</p>
                        </div>
                        <div className="right-info text-right">
                            <span className='text-xs font-normal'>22 Jun 2024, 00.55</span>
                            <p className='text-xs font-normal text-[#B1B1B1]'>Payment Expired</p>
                            <b className='text-sm font-black'>Sobat Halo</b>
                        </div>
                    </div>
                    <div className="paket-info basis-auto">
                        <ChevronRightIcon />
                    </div>
                </div>
                <div className="card flex flex-row gap-x-2 items-center bg-white p-4 border border-[#E2DFDF]">
                    <div className='paket-square basis-1/4'>
                        <div className="w-[83px] h-[51px] bg-[#E7E7E7] rounded-[9px]"></div>
                    </div>
                    <div className='paket-name basis-3/4 flex flex-row gap-x-2 justify-between'>
                        <div className='left-info'>
                            <b className='text-xs font-black'>Konexii</b>
                            <p className='text-xs font-normal'>10 GB - Data</p>
                            <p className='text-xs font-normal'>7 Days - Validity</p>
                        </div>
                        <div className="right-info text-right">
                            <span className='text-xs font-normal'>22 Jun 2024, 00.55</span>
                            <p className='text-xs font-normal text-[#FF7245]'>Payment Failed</p>
                            <b className='text-sm font-black'>Sobat Halo</b>
                        </div>
                    </div>
                    <div className="paket-info basis-auto">
                        <ChevronRightIcon />
                    </div>
                </div>
            </div>
        </>
  )
}

export default MHistory