import React from 'react'
import { useState} from 'react';
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SimCardOutlinedIcon from '@mui/icons-material/SimCardOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import NoSimImage from '../../assets/img/no-sim.png';
import { useNavigate } from "react-router-dom";

const EsimPage = () => {
  const navigate = useNavigate();
  const [openTab, setOpenTab] = useState<number>(1);
  
  return (
    <>
        <div className='main-wrapper max-w-screen-md mx-auto'>
            <div className='header p-4 flex items-center justify-center'>
                <h1 className='ml-[20px] text-2xl font-extrabold'>My eSIM</h1>
            </div>
            <div className='content-wrapper'>
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <ul
                            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                            role="tablist"
                        >
                            <li className="-mb-px last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                    "text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                                    (openTab === 1
                                        ? "text-[#1D1B20] border-b-2 border-[#FFDE95]"
                                        : "text-[#B3B3B3] border-b-2")
                                    }
                                    onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    Active
                                </a>
                            </li>
                            <li className="-mb-px last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                    "text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                                    (openTab === 2
                                        ? "text-[#1D1B20] border-b-2 border-[#FFDE95]"
                                        : "text-[#B3B3B3] border-b-2")
                                    }
                                    onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link2"
                                    role="tablist"
                                >
                                    Deactive
                                </a>
                            </li>
                        </ul>
                        <div className="relative flex flex-col min-w-0 break-words w-full">
                            <div className="px-4 py-5 flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={'text-center ' + (openTab === 1 ? "block" : "hidden")} id="link1">
                                        <img className='mx-auto mt-10' src={NoSimImage} alt="" />
                                        <p className='my-7'>
                                            You don't have an active
                                            <br />
                                             data plan
                                        </p>
                                        <button onClick={() => navigate('/listing')} className="bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 mt-3 w-full text-[14px]" type="button">
                                            Buy Now
                                        </button>
                                    </div>
                                    <div className={'text-center ' + (openTab === 2 ? "block" : "hidden")} id="link2">
                                        <img className='mx-auto mt-10' src={NoSimImage} alt="" />
                                        <p className='my-7'>
                                            You don't have an active
                                            <br />
                                             data plan
                                        </p>
                                        <button onClick={() => navigate('/listing')} className="bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 mt-3 w-full text-[14px]" type="button">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default EsimPage