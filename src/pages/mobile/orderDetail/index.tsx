import React from 'react'
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import VisaImage from 'assets/img/visa.png';

const MOrderDetail = () => {

  return (
    <>
        <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Order Details' />
        <div className='content-wrapper p-4 bg-[#FFF7DA] min-h-[calc(100vh-4rem)]'>
            <div className="order-infomation mt-4">
                <h2 className='text-lg font-extrabold mb-2'>Order Information</h2>
                <div className='card border border-[#E2DFDF] bg-white rounded-[9px] mb-3'>
                    <div className='cardContent flex flex-col items-start border border-t-[#E2DFDF] px-3 py-3'>
                        <p className='text-[12px] font-medium text-[#989898]'>ORDER ID</p>
                        <h6 className='text-[16px] font-medium'>Data, Call (100 Minutes), Text (20 SMS)</h6>
                    </div>
                    <div className='cardContent flex flex-col items-start border border-t-[#E2DFDF] px-3 py-3'>
                        <p className='text-[12px] font-medium text-[#989898]'>ORDER DATE</p>
                        <h6 className='text-[16px] font-medium'>Scan QR or enter code manually</h6>
                    </div>
                    <div className='cardContent flex flex-col items-start border border-t-[#E2DFDF] px-3 py-3'>
                        <p className='text-[12px] font-medium text-[#989898]'>ORDER STATUS</p>
                        <h6 className='text-[16px] font-medium'>Complete</h6>
                    </div>
                </div>
            </div>
            <div className="package-plan mt-4">
                <h2 className='text-lg font-extrabold mb-2'>Package Plan</h2>
                <div className="listCard border border-[#E2DFDF] bg-white rounded-[9px]">
                    <div className='cardHeader p-4 flex items-center'>
                        <div className="w-[103px] h-[63px] bg-[#E7E7E7] rounded-[9px]"></div>
                        <h1 className='ml-[20px] text-xl font-extrabold'>Sobat Halo</h1>
                    </div>
                    <div className='cardContent flex justify-between border border-t-[#E2DFDF] px-4 py-6 items-center'>
                        <span className='flex'>
                            <SignalCellularAltIcon className='mr-3' />
                            Data
                        </span>
                        <h3 className='text-[16px] font-black'>1 GB</h3>
                    </div>
                    <div className='cardContent flex justify-between border border-t-[#E2DFDF] px-4 py-6 items-center'>
                        <span className='flex'>
                            <CalendarMonthIcon className='mr-3' />
                            Validity
                        </span>
                        <h3 className='text-[16px] font-black'>7 days</h3>
                    </div>
                    <div className='cardContent flex justify-between border border-t-[#E2DFDF] px-4 py-6 items-center'>
                        <span className='flex'>
                            <LanguageIcon className='mr-3' />
                            Network
                        </span>
                        <h3 className='text-[16px] font-black'>Indosat</h3>
                    </div>
                    <div className='cardContent flex justify-between border border-t-[#E2DFDF] px-4 py-6 items-center'>
                        <span className='flex'>
                            <PublicIcon className='mr-3' />
                            Coverage
                        </span>
                        <h3 className='text-[16px] font-black'>Indonesia</h3>
                    </div>
                </div>
            </div>
            <div className="payment-detail mt-4">
                <h2 className='text-lg font-extrabold mb-2'>Payment Details</h2>
                <div className="listCard border border-[#E2DFDF] bg-white rounded-[9px]">
                    <div className='cardContent flex justify-between border border-t-[#E2DFDF] p-4 items-center'>
                        <span className='text-xs font-medium'>PAYMENT METHOD</span>
                        <p className='text-[16px] font-medium inline-flex'><img src={VisaImage} alt="" /> **** 7842</p>
                    </div>
                    <div className='cardContent flex justify-between border border-t-[#E2DFDF] p-4 items-center'>
                        <span className='text-xs font-medium'>TOTAL PRICE</span>
                        <h3 className='text-[20px] font-black'>US $ 50.00</h3>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MOrderDetail