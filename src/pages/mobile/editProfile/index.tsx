import React from 'react'
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import FlagImage from 'assets/img/flag.png';

const MEditProfile = () => {
  return (
    <>
        <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Edit Account' />
        <div className='content-wrapper p-4 bg-[#FFF7DA] min-h-[calc(100vh-4rem)]'>
            <div className='form-account'>
                <div className='form mb-6'>
                    <label className='text-[14px] font-normal mb-3' htmlFor=''>
                        Full Name
                    </label>
                    <input
                    type='text'
                    placeholder='Full Name'
                    className='px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full'
                    />
                </div>
                <div className='form mb-6 grid grid-cols-4 gap-3 items-end'>
                    <div className="form col-span-3">
                        <label className='text-[14px] font-normal mb-3' htmlFor="">Phone Number</label>
                        <div className="relative flex w-full flex-wrap items-stretch">
                            <span className="z-10 leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base flex items-center justify-center w-10 px-2 py-3 border-r border-[#BEBEBE]">
                                <img src={FlagImage} alt="" />
                            </span>
                            <input type="text" placeholder="Placeholder" className="px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full pl-10"/>
                        </div>
                    </div>
                    <div className="form">
                        <button className="bg-white color-[#000000] font-medium text-sm px-3 py-3 rounded-[9px] w-full text-[14px] border border-[#BEBEBE]" type="button">
                            Change
                        </button>
                    </div>
                </div>
                <div className='form mb-6'>
                    <label className='text-[14px] font-normal mb-3' htmlFor=''>
                        Email
                    </label>
                    <input
                    type='text'
                    placeholder='Email'
                    className='px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full'
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default MEditProfile