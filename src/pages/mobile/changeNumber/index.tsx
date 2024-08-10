import React from 'react'
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import PhoneInput from 'react-phone-input-2'

const MChangeNumber = () => {
  return (
    <>
        <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Change Phone Number' />
        <div className='content-wrapper p-4 bg-[#FFF7DA] min-h-[calc(100vh-4rem)]'>
            <div className='coupon-content'>
                <div className="info text-center pb-10">
                    <p className='text-sm font-[350]'>Make sure your new phone number uses WhatsApp. So that you can verify the phone number.</p>
                </div>
                <div className='form mb-6'>
                    <label className='text-[14px] font-normal mb-3' htmlFor=''>
                        New Phone Number
                    </label>
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
                <div className='form'>
                    <button
                    className='bg-[#FFEC69] color-[#000000] font-extrabold text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 w-full text-[14px]'
                    type='button'
                    >
                    Submit
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default MChangeNumber