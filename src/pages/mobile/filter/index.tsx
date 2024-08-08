import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';

const MFilter = () => {
  const navigate = useNavigate();

  return (
    <>
        <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Filter' />
        <div className='content-wrapper p-4 pb-[120px] min-h-[calc(100vh-6rem)]'>
            <div className='heading py-7 border-b border-[#CECECE]'> 
                <h6 className='text-xl font-semibold'>Choose Your Package Plan</h6>
            </div>
            <div className="network-section py-7">
                <div className="filter grid grid-cols-2 gap-4">
                    <div className="form">
                        <label className='text-[14px] font-normal mb-3' htmlFor="">Data (GB)</label>
                        <select name="" id="" className='px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full'>
                            <option value="20">20</option>
                            <option value="21">21</option>
                        </select>
                    </div>
                    <div className="form">
                        <label className='text-[14px] font-normal mb-3' htmlFor="">Validity (Days)</label>
                        <select name="" id="" className='px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full'>
                            <option value="20">20</option>
                        </select>
                    </div>
                    <div className="form">
                        <label className='text-[14px] font-normal mb-3' htmlFor="">Network</label>
                        <select name="" id="" className='px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full'>
                            <option value="20">20</option>
                        </select>
                    </div>
                    <div className="form">
                        <label className='text-[14px] font-normal mb-3' htmlFor="">Speed</label>
                        <select name="" id="" className='px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full'>
                            <option value="20">20</option>
                        </select>
                    </div>
                    <div className="form">
                        <label className='text-[14px] font-normal mb-3' htmlFor="">Other Services</label>
                        <select name="" id="" className='px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full'>
                            <option value="20">20</option>
                        </select>
                    </div>
                    <div className="form">
                        <label className='text-[14px] font-normal mb-3' htmlFor="">Thetering</label>
                        <select name="" id="" className='px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full'>
                            <option value="20">20</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="price-form py-7">
                <h6 className='text-sm font-extrabold mb-4'>Price Range ($)</h6>
                <div className="filter grid grid-cols-2 gap-4 pt-4 border-t border-[#CECECE]">
                    <div className="form">
                        <label className='text-[14px] font-normal mb-3' htmlFor="">From</label>
                        <input type="text" placeholder="Full Name" className="px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full"/>
                    </div>
                    <div className="form">
                        <label className='text-[14px] font-normal mb-3' htmlFor="">To</label>
                        <input type="text" placeholder="Full Name" className="px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full"/>
                    </div>
                </div>
            </div>
            <div className="buy-section p-4 border-t border-[#CECECE] fixed left-0 right-0 bottom-0 bg-white">
                <button onClick={() => navigate('/listing')} className="bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 w-full text-[14px]" type="button">
                    Apply
                </button>
            </div>
        </div>
    </>
  )
}

export default MFilter