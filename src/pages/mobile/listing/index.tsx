import React from 'react'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import TuneIcon from '@mui/icons-material/Tune';
import Slider from "react-slick";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import { useRecoilValue } from 'recoil';
import { slidetSettingState } from 'atom/sliderSetting';

const MListing = () => {
  var settings = useRecoilValue(slidetSettingState);

  return (
    <>
        <Header headerType={HEADER_TYPE.DEFAULT} headerTitle='Roaming Rabbit' />
        <div className='content-wrapper p-4 bg-[#FFF7DA] min-h-[calc(100vh-6rem)]'>
            <div className='form-content grid grid-cols-4 gap-3 items-end'>
                <div className="form col-span-3">
                    <label className='text-[14px] font-normal mb-3' htmlFor="">Choose your trip</label>
                    <PhoneInput
                        country={'id'}
                        inputClass="px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full"
                        inputStyle={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '9px',
                            paddingLeft: '60px'
                        }}
                        buttonStyle={{
                            borderRadius: '9px 0 0 9px',
                            backgroundColor: 'white',
                            width: '51px'
                        }}
                        inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true
                        }}
                    />
                </div>
                <div className="form">
                    <button className="bg-white color-[#000000] font-extrabold uppercase text-sm px-3 py-3 rounded-[9px] w-full text-[14px] border border-[#E3E3E3]" type="button">
                        <TuneIcon />
                    </button>
                </div>
            </div>
            <div className="listing">
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
                            <div className='cardContent flex justify-between border border-t-[#E2DFDF] px-4 py-6 items-center'>
                                <span className='flex'>
                                    <PaymentsOutlinedIcon className='mr-3' />
                                    Price
                                </span>
                                <h3 className='text-[16px] font-black'>US $ 12.00</h3>
                            </div>
                            <div className="cardButton flex justify-center border border-t-[#E2DFDF] px-4 py-6">
                                <button className="bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] w-9/12 text-[14px]" type="button">
                                    Choose
                                </button>
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
                            <div className='cardContent flex justify-between border border-t-[#E2DFDF] px-4 py-6 items-center'>
                                <span className='flex'>
                                    <PaymentsOutlinedIcon className='mr-3' />
                                    Price
                                </span>
                                <h3 className='text-[16px] font-black'>US $ 12.00</h3>
                            </div>
                            <div className="cardButton flex justify-center border border-t-[#E2DFDF] px-4 py-6">
                                <button className="bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] w-9/12 text-[14px]" type="button">
                                    Choose
                                </button>
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
                            <div className='cardContent flex justify-between border border-t-[#E2DFDF] px-4 py-6 items-center'>
                                <span className='flex'>
                                    <PaymentsOutlinedIcon className='mr-3' />
                                    Price
                                </span>
                                <h3 className='text-[16px] font-black'>US $ 12.00</h3>
                            </div>
                            <div className="cardButton flex justify-center border border-t-[#E2DFDF] px-4 py-6">
                                <button className="bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] w-9/12 text-[14px]" type="button">
                                    Choose
                                </button>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </>
  )
}

export default MListing