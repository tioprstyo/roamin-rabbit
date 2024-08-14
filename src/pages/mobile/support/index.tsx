import React, { useState } from 'react'
import { HEADER_TYPE } from 'interfaces';
import { Header } from 'components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HowToImage from 'assets/img/howto.png';
import { useRecoilValue } from 'recoil';
import { slidetSettingState } from 'atom/sliderSetting';
import Slider from "react-slick";
import VideoImage from 'assets/img/video.png';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MSupport = () => {
  var settings = useRecoilValue(slidetSettingState);
  const [show, setShow] = useState<number>(0);

  const tab = (value: number) => {show == value ? setShow(0) : setShow(value)}

  return (   
    <>
      <Header headerType={HEADER_TYPE.NORMAL} headerTitle='How To' />
      <div className='content-wrapper p-4 bg-[#FFF7DA] pb-[120px] min-h-[calc(100vh-6rem)]'>
        <div className="card flex flex-row gap-x-4 items-center rounded-lg bg-white p-4 border border-[#E2DFDF]">
            <div className='user-profile basis-1/5'>
            <img className='w-full rounded-full border' src={HowToImage} alt={HowToImage} />
            </div>
            <div className='user-name basis-3/4 flex flex-col gap-y-1 justify-between'>
                <b className='text-base font-extrabold'>Not sure what you need?</b>
                <p className='text-xs font-[350]'>RoaminRabbit will be happy to listen and suggest the best solution.</p>
            </div>
            <div className="user-info basis-auto">
                <ChevronRightIcon />
            </div>
        </div>
        <div className="tips mt-6 mb-4">
            <h6 className='text-[18px] font-extrabold mb-2'>Tips For You</h6>
            <Slider {...settings}>
                <div>
                    <img src={VideoImage} alt={VideoImage} />
                </div>
                <div>
                    <img src={VideoImage} alt={VideoImage} />
                </div>
                <div>
                    <img src={VideoImage} alt={VideoImage} />
                </div>
            </Slider>
        </div>
        <div className="info-section mb-4">
            <h3 className='text-base font-extrabold mb-2'>FAQ (Frequently Asking Questions)</h3>
            <div onClick={() => tab(1)} className='cardContent flex justify-between border border-t-[#E2DFDF] rounded-t-[9px] px-3 py-3 items-center bg-white'>
              <span className='text-base font-medium'>When can I install my eSIM?</span>
                {show == 1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </div>
            <div className={`contentHide1 ${show == 1 ? 'block': 'hidden'} bg-white`}>
                <div className='cardContent flex flex-col items-start border border-t-[#E2DFDF] px-3 py-3'>
                    <p className='text-[12px] font-medium text-[#989898]'>PLAN TYPE</p>
                    <h6 className='text-[16px] font-medium'>Data, Call (100 Minutes), Text (20 SMS)</h6>
                </div>
            </div>
            <div onClick={() => tab(2)} className='cardContent flex justify-between border border-t-[#E2DFDF] px-3 py-3 items-center bg-white'>
              <span className='text-base font-medium'>When does my eSIM data package expire?</span>
                {show == 2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </div>
            <div className={`contentHide2 ${show == 2 ? 'block': 'hidden'} bg-white`}>
                <div className='cardContent flex flex-col items-start border border-t-[#E2DFDF] px-3 py-3'>
                    <p className='text-[12px] font-medium text-[#989898]'>PLAN TYPE</p>
                    <h6 className='text-[16px] font-medium'>Data, Call (100 Minutes), Text (20 SMS)</h6>
                </div>
            </div>
            <div onClick={() => tab(3)} className='cardContent flex justify-between border border-t-[#E2DFDF] rounded-b-[9px] px-3 py-3 items-center bg-white'>
                <span className='text-base font-medium'>Can I use tethering (Personal Hotspot)?</span>
                {show == 3 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </div>
            <div className={`contentHide3 ${show == 3 ? 'block': 'hidden'} bg-white`}>
                <div className='cardContent flex flex-col items-start border border-t-[#E2DFDF] px-3 py-3'>
                    <p className='text-[12px] font-medium text-[#989898]'>PLAN TYPE</p>
                    <h6 className='text-[16px] font-medium'>Data, Call (100 Minutes), Text (20 SMS)</h6>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default MSupport