import React, { useEffect, useState } from 'react'
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import PhoneInput from 'react-phone-input-2'
import { useEditPhoneNumber, useGetProfile } from 'hooks';
import { useNavigate } from 'react-router-dom';

const MChangeNumber = () => {
  const navigate = useNavigate();
  const {data: dataProfile, fetching: fetchingProfile} = useGetProfile();
  const {data, fetching} = useEditPhoneNumber();
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  useEffect(() => {
    if(!dataProfile){
        fetchingProfile();
    }

    if(data){
        navigate('/verifikasi', { state: { previousPath: location.pathname } });
    }

    setPhoneNumber(dataProfile?.profile.phoneNumber || '');

  }, [dataProfile, data, navigate])

  return (
    <>
        <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Change Phone Number' />
        <div className='content-wrapper p-4 bg-[#FFF7DA] dark:bg-roamin-dark-600 min-h-[calc(100vh-4rem)]'>
            <div className='coupon-content'>
                <div className="info text-center pb-10">
                    <p className='text-sm font-[350] dark:text-white'>Make sure your new phone number uses WhatsApp. So that you can verify the phone number.</p>
                </div>
                <div className='form mb-6'>
                    <label className='text-[14px] font-normal mb-3 dark:text-white' htmlFor=''>
                        New Phone Number
                    </label>
                    <PhoneInput
                        country={'id'}
                        value={phoneNumber}
                        onChange={(e:string) => setPhoneNumber(e)}
                        inputClass="px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring w-full"
                        inputStyle={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '9px',
                            paddingLeft: '60px'
                        }}
                        buttonStyle={{
                            borderRadius: '9px 0 0 9px',
                            backgroundColor: 'white',
                            width: '51px'
                        }}
                        inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true
                        }}
                    />
                </div>
                <div className='form'>
                    <button
                    onClick={() => fetching(phoneNumber)}
                    className='bg-[#FFEC69] color-[#000000] font-extrabold text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 w-full text-[14px]'
                    type='button'
                    >
                    Submit
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default MChangeNumber