import React from 'react'
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SimCardOutlinedIcon from '@mui/icons-material/SimCardOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
        <div className='main-wrapper max-w-screen-md mx-auto'>
            <div className='header p-4 flex items-center '>
                <div className="w-[62.1px] h-[62.1px] bg-[#FFEC69] rounded-[9px]"></div>
                <h1 className='ml-[20px] text-2xl font-extrabold'>Roaming Rabbit</h1>
            </div>
            <div className='content-wrapper p-4'>
                <div className='heading'>
                    <span className='font-normal text-[32px] leading-10'>
                        Get easily to 
                        <br />
                        <h1 className='font-black'>
                            connect with others 
                        </h1>
                        upon arrival
                    </span>
                </div>
                <div className='form-content mt-11'>
                    <div className="form mb-6">
                        <label className='text-[14px] font-normal mb-3' htmlFor="">Choose your trip</label>
                        <input type="text" placeholder="Full Name" className="px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full"/>
                    </div>
                    <div className="form">
                        <button onClick={() => navigate('/listing')} className="bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 w-full text-[14px]" type="button">
                            Search
                        </button>
                    </div>
                </div>
                <div className="registrer mt-16 text-center">
                    <span className='text-sm font-medium'>Does my device support it?</span>
                    <br />
                    <a className='text-sm text-[#5F97BC] underline decoration-solid decoration-[#5F97BC]' href="">See list of devices that support esim</a>
                </div>
            </div>
            <div className="navigation flex justify-around items-center absolute bottom-0 left-0 right-0 py-3 border-t border-[#CECECE]">
                <NavLink to="/home"className="text-[12px] font-extrabold flex flex-col items-center">
                    {({ isActive }) => (
                        <>
                            <span className={`mb-2 px-5 py-1 rounded-[16px] ${isActive ? 'bg-[#FFEC69]' : ''}`}>
                                <HomeOutlinedIcon sx={{ fontSize: 30 }} />
                            </span>
                            Home
                        </>
                    )}
                </NavLink>
                <NavLink to="/manage" className="text-[12px] font-extrabold flex flex-col items-center">
                    {({ isActive }) => (
                        <>
                            <span className={`mb-2 px-5 py-1 rounded-[16px] ${isActive ? 'bg-[#FFEC69]' : ''}`}>
                                <SimCardOutlinedIcon sx={{ fontSize: 30 }} />
                            </span>
                            Manage
                        </>
                    )}
                </NavLink>
                <NavLink to="/messages"className="text-[12px] font-extrabold flex flex-col items-center">
                    {({ isActive }) => (
                        <>
                            <span className={`mb-2 px-5 py-1 rounded-[16px] ${isActive ? 'bg-[#FFEC69]' : ''}`}>
                                <HelpCenterOutlinedIcon sx={{ fontSize: 30 }} />
                            </span>
                            Support
                        </>
                    )}
                </NavLink>
                <NavLink to="/messages"className="text-[12px] font-extrabold flex flex-col items-center">
                    {({ isActive }) => (
                        <>
                            <span className={`mb-2 px-5 py-1 rounded-[16px] ${isActive ? 'bg-[#FFEC69]' : ''}`}>
                                <AccountBoxOutlinedIcon sx={{ fontSize: 30 }} />
                            </span>
                            Me
                        </>
                    )}
                </NavLink>
            </div>
        </div>
    </>
  )
}

export default HomePage