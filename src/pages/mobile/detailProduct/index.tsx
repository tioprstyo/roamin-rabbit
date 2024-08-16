import React, { useState } from 'react'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import { useRecoilValue } from 'recoil';
import { slidetSettingState } from 'atom/sliderSetting';

const MDetailProduct = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);
  var settings = useRecoilValue(slidetSettingState);

  return (
    <>
        <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Package Details' />
        <div className='content-wrapper bg-[#FFF7DA] min-h-[calc(100vh-4rem)] pb-28'>
            <div className="listCard bg-white">
                <div className='cardHeader p-4 flex items-center'>
                    <div className="w-[103px] h-[63px] bg-[#E7E7E7] rounded-[9px]"></div>
                    <h1 className='ml-[20px] text-xl font-extrabold'>Bebas Konexii</h1>
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
                        <PaymentsOutlinedIcon className='mr-3' />
                        Price
                    </span>
                    <h3 className='text-[16px] font-black'>US $ 12.00</h3>
                </div>
            </div>
            <div className="detail-content p-4">
                <div className="listCard border border-[#E2DFDF] bg-white rounded-[9px]">
                    <div className='cardContent flex justify-between border border-t-[#E2DFDF] px-3 py-3 items-center'>
                        <h6 className='text-[16px] font-medium'>Coverage Country - Indonesia</h6>
                        <SignalCellularAltIcon />
                    </div>
                    <div onClick={() => setShow(!show)} className='cardContent flex justify-between border border-t-[#E2DFDF] px-3 py-3 items-center'>
                        <h6 className='text-[16px] font-medium'>Additional Information</h6>
                        {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </div>
                    <div className={`contentHide ${show ? 'block': 'hidden'}`}>
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
                </div>
                <div className="listing mt-6">
                    <h6 className='text-[18px] font-extrabold'>Available Other Package (5)</h6>
                    <Slider {...settings}>
                        <div>
                            <div className="listCard border border-[#E2DFDF] bg-white rounded-[9px] mt-5">
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
                                <div className="cardFooter grid grid-cols-2 items-center justify-center border border-t-[#E2DFDF] p-4">
                                    <div className='cardPrice text-center'>
                                        <h6 className='text-xl font-black'>US $ 50.00</h6>
                                    </div>
                                    <div className='cardButton text-center'>
                                        <button className="text-[#FFEC69] font-extrabold text-sm px-2 py-3 border border-[#FFEC69] rounded-[9px] w-full text-[14px]" type="button">
                                            Choose
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="listCard border border-[#E2DFDF] bg-white rounded-[9px] mt-5">
                                <div className='cardHeader p-4 flex items-center'>
                                    <div className="w-[103px] h-[63px] bg-[#E7E7E7] rounded-[9px]"></div>
                                    <h1 className='ml-[20px] text-xl font-extrabold'>Helo Sel</h1>
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
                                <div className="cardFooter grid grid-cols-2 items-center justify-center border border-t-[#E2DFDF] p-4">
                                    <div className='cardPrice text-center'>
                                        <h6 className='text-xl font-black'>US $ 50.00</h6>
                                    </div>
                                    <div className='cardButton text-center'>
                                        <button className="text-[#FFEC69] font-extrabold text-sm px-2 py-3 border border-[#FFEC69] rounded-[9px] w-full text-[14px]" type="button">
                                            Choose
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="listCard border border-[#E2DFDF] bg-white rounded-[9px] mt-5">
                                <div className='cardHeader p-4 flex items-center'>
                                    <div className="w-[103px] h-[63px] bg-[#E7E7E7] rounded-[9px]"></div>
                                    <h1 className='ml-[20px] text-xl font-extrabold'>Bebas Konexii</h1>
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
                                <div className="cardFooter grid grid-cols-2 items-center justify-center border border-t-[#E2DFDF] p-4">
                                    <div className='cardPrice text-center'>
                                        <h6 className='text-xl font-black'>US $ 50.00</h6>
                                    </div>
                                    <div className='cardButton text-center'>
                                        <button className="text-[#FFEC69] font-extrabold text-sm px-2 py-3 border border-[#FFEC69] rounded-[9px] w-full text-[14px]" type="button">
                                            Choose
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
        <div className="fromBuy grid grid-cols-2 items-center justify-center border border-t-[#E2DFDF] p-4 fixed bottom-0 left-0 right-0 bg-white">
            <div className='buyPrice text-center'>
                <h6 className='text-xl font-black'>US $ 50.00</h6>
            </div>
            <div className='buyButton text-center'>
                <button className="bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] w-9/12 text-[14px]" type="button">
                    Buy Now
                </button>
            </div>
        </div>
    </>
  )
}

export default MDetailProduct;