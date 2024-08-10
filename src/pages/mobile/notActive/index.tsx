import React from 'react'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import { useNavigate } from 'react-router-dom';

const MNotActive = () => {
  const navigate = useNavigate();

  return (
    
    <>
        <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Details' />
        <div className='content-wrapper bg-[#FFF7DA] min-h-[calc(100vh-4rem)]'>
            <div className="header-info grid grid-cols-2 gap-x-2 gap-y-5 bg-white p-4">
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
            <div className='infornationn p-4'>
                <h2 className='text-xl font-extrabold mb-3'>Coverage (1 Country)</h2>
                <div className='cardCoverage border border-[#E2DFDF] bg-white rounded-[9px] p-3 mb-3'>
                    <PaymentsOutlinedIcon />
                    <p className='text-base font-medium ml-3 inline'>Indonesia</p>
                </div>
                <h2 className='text-xl font-extrabold mb-3'>Additional Information</h2>
                <div className='card border border-[#E2DFDF] bg-white rounded-[9px] mb-3'>
                    <div className='cardContent flex flex-col items-start border border-t-[#E2DFDF] px-3 py-3'>
                        <p className='text-[12px] font-medium text-[#989898]'>PLAN TYPE</p>
                        <h6 className='text-[16px] font-medium'>Data, Call (100 Minutes), Text (20 SMS)</h6>
                    </div>
                    <div className='cardContent flex flex-col items-start border border-t-[#E2DFDF] px-3 py-3'>
                        <p className='text-[12px] font-medium text-[#989898]'>SPEED</p>
                        <h6 className='text-[16px] font-medium'>4G/LTE/5G</h6>
                        <span className='text-[14px] font-light'>This data plan is expected to have 5G speed. However, network coverage and speed may vary by location and time of day.</span>
                    </div>
                    <div className='cardContent flex flex-col items-start border border-t-[#E2DFDF] px-3 py-3'>
                        <p className='text-[12px] font-medium text-[#989898]'>INSTALATION</p>
                        <h6 className='text-[16px] font-medium'>Scan QR or enter code manually</h6>
                    </div>
                    <div className='cardContent flex flex-col items-start border border-t-[#E2DFDF] px-3 py-3'>
                        <p className='text-[12px] font-medium text-[#989898]'>ACTIVATION POLICY</p>
                        <h6 className='text-[16px] font-medium'>The validity period starts when the eSIM connects to any supported network/s.</h6>
                    </div>
                    <div className='cardContent flex flex-col items-start border border-t-[#E2DFDF] px-3 py-3'>
                        <p className='text-[12px] font-medium text-[#989898]'>IP ROUTING</p>
                        <h6 className='text-[16px] font-medium'>Yes</h6>
                    </div>
                    <div className='cardContent flex flex-col items-start border border-t-[#E2DFDF] px-3 py-3'>
                        <p className='text-[12px] font-medium text-[#989898]'>THETERING</p>
                        <h6 className='text-[16px] font-medium'>Enjoy 20mb per day to share with 3 people.</h6>
                    </div>
                    <div className='cardContent flex flex-col items-start border border-t-[#E2DFDF] px-3 py-3'>
                        <p className='text-[12px] font-medium text-[#989898]'>eKYC (IDENTITY VERIFICATION)</p>
                        <h6 className='text-[16px] font-medium'>Not Required</h6>
                    </div>
                    <div className='cardContent flex flex-col items-start border border-t-[#E2DFDF] px-3 py-3'>
                        <p className='text-[12px] font-medium text-[#989898]'>Top Up Options</p>
                        <h6 className='text-[16px] font-medium'>Yes</h6>
                    </div>
                </div>
                <div className='form-activate'>
                    <button  className="bg-[#FFEC69] text-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 w-full text-[14px]" type="button">
                        Activate Now
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default MNotActive