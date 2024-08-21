import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useGetOrderHistory } from 'hooks';
import moment from 'moment';

const MHistory = () => {
  const navigate = useNavigate();
  const {data, fetching} = useGetOrderHistory();

  useEffect(() => {
    if(!data){
        fetching();
    }
  },[data]);

  return (
        <>
            <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Order History' />
            <div className='content-wrapper bg-[#FFF7DA] min-h-[calc(100vh-4rem)]'>
                {data ? 
                    <>
                        {data.map((data, i) => 
                                <div className="card flex flex-row gap-x-2 items-center bg-white p-4 border border-[#E2DFDF]" key={i}>
                                    <div className='paket-square basis-2/12'>
                                        <div className="w-full h-[51px] bg-[#E7E7E7] rounded-[9px]"></div>
                                    </div>
                                    <div className='paket-name basis-3/4 flex flex-row gap-x-2 justify-between'>
                                        <div className='left-info'>
                                            <b className='text-xs font-black'>{data.name}</b>
                                            <p className='text-xs font-normal'>{data.caption}</p>
                                            <p className='text-xs font-normal'>{data.validity}</p>
                                        </div>
                                        <div className="right-info text-right">
                                            <span className='text-xs font-normal'>{moment(data.createdAt).format('DD MMM yyyy, hh:mm')}</span>
                                            <p className={`text-xs font-normal ${data.orderStatus == 'complate' ? 'text-[#15DB59]': (data.orderStatus == 'failed' ? 'text-[#FF7245] ': (data.orderStatus == 'pending' ? 'text-[#F8B421]' : (data.orderStatus == 'expired' ? 'text-[#B1B1B1]': 'text-[#F8B421]')))}`}>{data.orderStatusString}</p>
                                            <b className='text-sm font-black'>{data.name}</b>
                                        </div>
                                    </div>
                                    <div className="paket-info basis-auto">
                                        <ChevronRightIcon />
                                    </div>
                                </div>
                            )
                        }
                    </>
                    : null
                }
            </div>
        </>
  )
}

export default MHistory