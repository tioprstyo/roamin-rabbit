import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useGetOrderHistory } from 'hooks';
import moment from 'moment';
import CircularProgress from '@mui/material/CircularProgress';

const MHistory = () => {
  const navigate = useNavigate();
  const { data, isLoading, fetching } = useGetOrderHistory();

  useEffect(() => {
    fetching();
  }, []);

  return (
    <>
      <Header
        headerType={HEADER_TYPE.DETAIL}
        headerTitle='Order History'
        classname='mb-1 shadow'
      />
      <div className='content-wrapper bg-[#FFF7DA] dark:bg-roamin-dark-600 min-h-[calc(100vh-4rem)] divide-y divide-roamin-neutral-600 dark:divide-roamin-dark-400'>
          {isLoading ? (
            <div className='loading mt-10 flex justify-center'>
              <CircularProgress />
            </div>
          ) : (
            <>
              {data ? (
                <>
                  {data.map((item, i) => (
                    <div
                      className='card flex flex-row gap-x-2 items-center bg-white dark:bg-roamin-dark-700 p-4'
                      key={i}
                    >
                      <div className='paket-square basis-2/12'>
                        <div className='w-full h-[51px] bg-[#E7E7E7] rounded-[9px]'></div>
                      </div>
                      <div className='paket-name basis-3/4 flex flex-row gap-x-2 justify-between'>
                        <div className='left-info'>
                          <b className='text-xs font-black text-black dark:text-white'>
                            {item.name}
                          </b>
                          <p className='text-xs font-normal text-black dark:text-white'>
                            {item.caption}
                          </p>
                          <p className='text-xs font-normal text-black dark:text-white'>
                            {item.validity}
                          </p>
                        </div>
                        <div className='right-info text-right'>
                          <span className='text-xs font-normal text-black dark:text-white'>
                            {moment(item.createdAt).format('DD MMM yyyy, hh:mm')}
                          </span>
                          <p
                            className={`text-xs font-normal ${item.orderStatus == 'complate' ? 'text-[#15DB59]' : item.orderStatus == 'failed' ? 'text-[#FF7245] ' : item.orderStatus == 'pending' ? 'text-[#F8B421]' : item.orderStatus == 'expired' ? 'text-[#B1B1B1]' : 'text-[#F8B421]'}`}
                          >
                            {item.orderStatusString}
                          </p>
                          <b className='text-sm font-black text-black dark:text-white'>
                            {item.price}
                          </b>
                        </div>
                      </div>
                      <div className='paket-info basis-auto'>
                        <ChevronRightIcon className='text-black dark:text-white' />
                      </div>
                    </div>
                  ))}
                </>
              ) : null}
            </>
          )}
      </div>
    </>
  );
};

export default MHistory;
