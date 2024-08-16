import React, { useState } from 'react'
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import VisaImage from 'assets/img/visa.png'; 
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Checkbox from '@mui/material/Checkbox';

const MConfirm = () => {
    const [checked, setChecked] = useState({
        compatibles: false,
        terms: false,
    });
    const { compatibles, terms } = checked;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked({
          ...checked,
          [event.target.name]: event.target.checked,
        });
      };

    
  return (
    <>
        <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Order Details' />
        <div className='content-wrapper p-4 bg-[#FFF7DA] min-h-[calc(100vh-4rem)] pb-28'>
            <div className="package-plan mt-4">
                <h2 className='text-lg font-extrabold mb-2'>Package Plan</h2>
                <div className="listCard border border-[#E2DFDF] bg-white rounded-[9px]">
                    <div className='cardHeader p-4 grid grid-cols-4 gap-2 items-center'>
                        <div className='square-section'>
                            <div className="w-full h-[63px] bg-[#E7E7E7] rounded-[9px]"></div>
                        </div>
                        <div className='detail-section col-span-2'>
                            <b className='text-[13px] font-black'>Sobat Halo</b>
                            <p className='text-[13px] font-normal'>20 GB - Data, Calls, Text</p>
                            <p className='text-[13px] font-normal'>30 Days - Validity</p>
                        </div>
                        <div className='price-section'>
                            <b className='text-[15px] font-black'>$ 500.00</b>
                        </div>
                    </div>
                </div>
            </div>
            <div className="order-infomation mt-4">
                <h2 className='text-lg font-extrabold mb-2'>Order Summary</h2>
                <div className='card border border-[#E2DFDF] bg-white rounded-[9px] mb-3'>
                    <div className='cardContent flex flex-row justify-between items-start px-3 py-3'>
                        <p className='text-sm font-medium'>Subtotal</p>
                        <h6 className='text-base font-medium'>$ 50.00</h6>
                    </div>
                    <div className='cardContent flex flex-row justify-between items-start px-3 py-3'>
                        <p className='text-sm font-medium'>Service</p>
                        <h6 className='text-base font-medium'>Included</h6>
                    </div>
                    <div className='cardContent flex flex-row justify-between items-start border border-t-[#E2DFDF] px-3 py-3'>
                        <p className='text-base font-medium'>Total</p>
                        <h6 className='text-base font-medium'>$ 50.00</h6>
                    </div>
                </div>
            </div>
            <div className="payment-detail mt-4">
                <h2 className='text-lg font-extrabold mb-2'>Payment Details</h2>
                <div className="listCard border border-[#E2DFDF] bg-white rounded-[9px]">
                    <div className='cardContent flex justify-between border border-t-[#E2DFDF] p-4 items-center'>
                        <span className='text-base font-medium'>Credit Card</span>
                        <p className='text-base font-medium inline-flex'><img src={VisaImage} alt="" /> **** 7842 <ChevronRightOutlinedIcon className='ml-2'/></p>
                    </div>
                </div>
            </div>
            <div className="promo mt-4">
                <h2 className='text-lg font-extrabold mb-2'>Promo</h2>
                <div className="listCard border border-[#E2DFDF] bg-white rounded-[9px]">
                    <div className='cardContent flex justify-between border border-t-[#E2DFDF] p-4 items-center'>
                        <span className='text-base font-medium'>TR08293</span>
                        <ChevronRightOutlinedIcon/>
                    </div>
                </div>
            </div>
            <div className="checkbos-section mt-4 grid gap-y-4 justify-items-start">
                <div className="check-form flex flex-row-reverse items-baseline">
                    <label htmlFor="check1" className='flex items-center text-sm font-[350]'>By proceeding with this order, I acknowledge that I have accepted and read the device compatible</label>
                    <input checked={compatibles} onChange={handleChange} className='mr-3' type="checkbox" name="compatibles" id="check1" />
                </div>
                <div className="check-form flex flex-row-reverse items-baseline">
                    <label htmlFor="check2" className='flex items-center text-sm font-[350'>I agree to Terms & Conditions and Refund Policy .</label>
                    <input checked={terms} onChange={handleChange} className='mr-3' type="checkbox" name="terms" id="check2" />
                </div>
            </div>
        </div>
        <div className="fromBuy grid grid-cols-2 items-center justify-center border border-t-[#E2DFDF] p-4 fixed bottom-0 left-0 right-0 bg-white">
            <div className='buyPrice text-center'>
                <h6 className='text-xl font-black'>US $ 50.00</h6>
            </div>
            <div className='buyButton text-center'>
                <button disabled={compatibles && terms ? false : true} className="bg-[#FFEC69] disabled:bg-[#9C9C9C] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] w-9/12 text-[14px]" type="button">
                    Buy Now
                </button>
            </div>
        </div>
    </>
  )
}

export default MConfirm