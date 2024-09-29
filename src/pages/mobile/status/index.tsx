import React, { useEffect } from 'react';
import { AdditionalInformation, Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import { useNavigate, useParams } from 'react-router-dom';
import FlagImage from 'assets/img/flag.png';
import { useGetOrderDetail } from 'hooks';

const MStatus = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const { data, fetching } = useGetOrderDetail();

  useEffect(() => {
    fetching(id);
  }, []);

  return (
    <>
      <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Details' />
      <div className='content-wrapper bg-[#FFF7DA] dark:bg-roamin-dark-500 min-h-[calc(100vh-4rem)]'>
        <div className='header-info grid grid-cols-2 gap-x-2 gap-y-5 bg-white dark:bg-roamin-dark-800 p-6'>
          <div className='paket-name'>
            <h1 className='text-xl font-extrabold text-black dark:text-white'>
              {data?.name}
            </h1>
          </div>
          <div className='paket-status'>
            <span
              className={`px-4 py-2 rounded-[9px] text-xs text-black font-extrabold ${data?.orderStatus == 'expired' ? 'bg-[#79747E]' : data?.orderStatus == 'active' ? 'bg-[#10E85A]' : 'bg-[#FFEC69] dark:bg-roamin-yellow-500'}`}
            >
              {!data?.isActivated ? 'Not ' : ''}Active
            </span>
          </div>
          <div className='paket-square'>
            <div className='w-[157px] h-[97px] bg-[#E7E7E7] rounded-[9px]'>
              {data?.pic && (
                <img
                  className='object-cover w-[157px] h-[97px] rounded-[9px]'
                  src={data?.pic}
                  alt=''
                />
              )}
            </div>
          </div>
          <div className='paket-info flex flex-col justify-center text-black dark:text-white'>
            <h6 className='text-base font-extrabold'>
              {data?.quotaData} | {data?.validity}
            </h6>
            <span className='text-xs font-normal block mt-4'>ICCID</span>
            <b className='text-sm font-extrabold break-words'>{data?.iccid}</b>
          </div>
        </div>
        <div className='infornationn p-6'>
          <h2 className='text-xl font-extrabold mb-3 text-black dark:text-white'>
            Coverage (1 Country)
          </h2>
          <div className='cardCoverage flex border border-roamin-neutral-600 dark:border-roamin-neutral-800 bg-white rounded-[9px] p-3 mb-3 dark:bg-roamin-dark-700 text-black dark:text-white'>
            <img src={FlagImage} alt='' />
            <p className='text-base font-medium ml-3 inline'>{data?.country}</p>
          </div>
          <h2 className='text-xl font-extrabold mb-3 text-black dark:text-white'>
            Additional Information
          </h2>
          <div className='card border border-roamin-neutral-600 divide-y divide-roamin-neutral-600 dark:divide-roamin-neutral-800 dark:border-roamin-neutral-800 bg-white dark:bg-roamin-dark-700 rounded-[9px] mb-3'>
            <AdditionalInformation
              planType={data?.planType || ''}
              speed={data?.speed || ''}
              quotaTethering={data?.quotaTethering || ''}
              ipRouting={data?.ipRouting || false}
              ekyc={data?.ekyc || false}
              topupOption={data?.topupOption || false}
            />
          </div>
          {!data?.isActivated && (
            <div className='form-activate'>
              <button
                className='bg-[#FFEC69] text-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 w-full text-[14px]'
                type='button'
                onClick={() => navigate(`/activate/${id}`)}
              >
                Activate Now
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MStatus;
