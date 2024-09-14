import React, { useEffect, useState } from 'react'
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import KuponImage from 'assets/img/kupon.png';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ListParamsProps } from 'interfaces';
import { parseQueryParams } from 'services';

const MCoupon = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [voucer, setVoucer] = useState({
    promoCode: ''
  });
  const params: ListParamsProps = {};

  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVoucer({
      ...voucer,
      [event.target.name]: event.target.value.toLocaleUpperCase(),
    });
  };

  const submit = () => {
    const newParams = {
        ...params,
        ...voucer
    }

    navigate(`/confirmasi${parseQueryParams(newParams)}`)
  }

  useEffect(() => {
    if(params?.promoCode){
        setVoucer({
            ...voucer,
            promoCode: params.promoCode.toLocaleUpperCase()
        })
    }
  }, [searchParams])

  
  return (
    <>
        <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Add Promo Code' />
        <div className='content-wrapper p-4 bg-[#FFF7DA] dark:bg-roamin-dark-700 min-h-[calc(100vh-4rem)]'>
            <div className='coupon-content'>
                <img className='mx-auto my-10' src={KuponImage} alt="" />
                <div className='form mb-6'>
                    <label className='text-[14px] font-normal mb-3 dark:text-white' htmlFor=''>
                        Have a Promo/Referral Code?
                    </label>
                    <input
                    value={voucer.promoCode}
                    onChange={(e)=> handleChange(e)}
                    name='promoCode'
                    type='text'
                    placeholder='Enter Code'
                    className='px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full'
                    />
                </div>
                <div className='form'>
                    <button
                    onClick={submit}
                    className='bg-[#FFEC69] color-[#000000] font-extrabold text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 w-full text-[14px]'
                    type='button'
                    >
                    Apply
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default MCoupon