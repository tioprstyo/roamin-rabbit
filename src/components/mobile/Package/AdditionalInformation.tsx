import React from 'react';
import { AdditionalInformationProps } from 'interfaces';
import SimCard from 'assets/img/sim_card.png';
import SimCardDownload from 'assets/img/sim_card_download.png';
import AcuteIcon from 'assets/img/acute.png';
import NetworkCheck from 'assets/img/network_check.png';
import RouterIcon from 'assets/img/router.png';
import RouteIcon from 'assets/img/route.png';
import EkycCard from 'assets/img/id_card.png';
import SystemUpdate from 'assets/img/system_update.png';

const AdditionalInformation = ({
  planType,
  speed,
  quotaTethering,
  ipRouting,
  ekyc,
  topupOption,
}: AdditionalInformationProps) => {
  return (
    <>
      <div className='cardContent flex gap-5 items-start px-3 py-3 text-black dark:text-white'>
        <div className='bg-white dark:bg-roamin-dark-500 p-1 rounded-lg'>
          <img src={SimCard} className='w-6 h-6' alt='simcard-icon' />
        </div>
        <div>
          <p className='text-[12px] font-medium text-[#989898]'>PLAN TYPE</p>
          <h6 className='text-[16px] font-medium'>{planType}</h6>
        </div>
      </div>
      <div className='cardContent flex gap-5 items-start px-3 py-3 text-black dark:text-white'>
        <div className='bg-white dark:bg-roamin-dark-500 py-1 px-1.5 rounded-lg'>
          <img src={NetworkCheck} className='w-9 h-6' alt='network-icon' />
        </div>
        <div>
          <p className='text-[12px] font-medium text-[#989898]'>SPEED</p>
          <h6 className='text-[16px] font-medium'>{speed}</h6>
          <span className='text-[14px] font-light'>
            This data plan is expected to have 5G speed. However, network
            coverage and speed may vary by location and time of day.
          </span>
        </div>
      </div>
      <div className='cardContent flex gap-5 items-start px-3 py-3 text-black dark:text-white'>
        <div className='bg-white dark:bg-roamin-dark-500 py-1.5 px-1 rounded-lg'>
          <img src={SystemUpdate} className='w-6 h-6' alt='network-icon' />
        </div>
        <div>
          <p className='text-[12px] font-medium text-[#989898]'>INSTALATION</p>
          <h6 className='text-[16px] font-medium'>
            Scan QR or enter code manually
          </h6>
        </div>
      </div>
      <div className='cardContent flex gap-5 items-start px-3 py-3 text-black dark:text-white'>
        <div className='bg-white dark:bg-roamin-dark-500 p-1 rounded-lg'>
          <img src={AcuteIcon} className='w-9 h-6.5' alt='network-icon' />
        </div>
        <div>
          <p className='text-[12px] font-medium text-[#989898]'>
            ACTIVATION POLICY
          </p>
          <h6 className='text-[16px] font-medium'>
            The validity period starts when the eSIM connects to any supported
            network/s.
          </h6>
        </div>
      </div>
      <div className='cardContent flex gap-5 items-start px-3 py-3 text-black dark:text-white'>
        <div className='bg-white dark:bg-roamin-dark-500 p-1 rounded-lg'>
          <img src={RouteIcon} className='w-6.5 h-6' alt='network-icon' />
        </div>
        <div>
          <p className='text-[12px] font-medium text-[#989898]'>IP ROUTING</p>
          <h6 className='text-[16px] font-medium'>
            {ipRouting ? 'Yes' : 'No'}
          </h6>
        </div>
      </div>
      <div className='cardContent flex gap-5 items-start px-3 py-3 text-black dark:text-white'>
        <div className='bg-white dark:bg-roamin-dark-500 p-1 rounded-lg'>
          <img src={RouterIcon} className='w-6.5 h-6' alt='network-icon' />
        </div>
        <div>
          <p className='text-[12px] font-medium text-[#989898]'>TETHERING</p>
          <h6 className='text-[16px] font-medium'>{quotaTethering}</h6>
        </div>
      </div>
      <div className='cardContent flex gap-5 items-start px-3 py-3 text-black dark:text-white'>
        <div className='bg-white dark:bg-roamin-dark-500 p-1 rounded-lg'>
          <img src={EkycCard} className='w-6.5 h-6' alt='network-icon' />
        </div>
        <div>
          <p className='text-[12px] font-medium text-[#989898]'>
            eKYC (IDENTITY VERIFICATION)
          </p>
          <h6 className='text-[16px] font-medium'>
            {ekyc ? 'Required' : 'Not Required'}
          </h6>
        </div>
      </div>
      <div className='cardContent flex gap-5 items-start px-3 py-3 text-black dark:text-white'>
        <div className='bg-white dark:bg-roamin-dark-500 p-1 rounded-lg'>
          <img src={SimCardDownload} className='w-6.5 h-6' alt='network-icon' />
        </div>
        <div>
          <p className='text-[12px] font-medium text-[#989898]'>
            Top Up Options
          </p>
          <h6 className='text-[16px] font-medium'>
            {topupOption ? 'Yes' : 'No'}
          </h6>
        </div>
      </div>
    </>
  );
};

export default AdditionalInformation;
