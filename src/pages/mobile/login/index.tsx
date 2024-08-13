import React, { useEffect, useState } from 'react';
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLogin } from 'hooks';
import PhoneInput from 'react-phone-input-2'

const MLogin = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const { data, fetching: fetchingLogin } = useLogin();

  useEffect(() => {
    if (data) {
      navigate('/verifikasi');
    }
  }, [data, navigate]);

  return (
    <>
      <Header headerType={HEADER_TYPE.DEFAULT} headerTitle='Roaming Rabbit' />
      <div className='content-wrapper p-4 min-h-[calc(100vh-6rem)]'>
        <div className='heading'>
          <h1 className='font-black text-[34px] leading-10'>
            Login
            <br />
            <span className='font-normal'>
              to activate
              <br />
              or check the usage
            </span>
          </h1>
        </div>
        <div className='form-content mt-11'>
          <div className='form mb-6'>
            <label className='text-[14px] font-normal mb-3' htmlFor=''>
              Phone Number
            </label>
            <PhoneInput
                onChange={(phoneNumber:string, e: React.ChangeEvent<HTMLInputElement> )=> setPhoneNumber(e.target.value)}
                country={'id'}
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
              onClick={() => fetchingLogin(phoneNumber)}
              className='bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 w-full text-[14px]'
              type='button'
            >
              Login
            </button>
          </div>
        </div>
        <div className='registrer mt-16 text-center'>
          <span className='text-sm font-medium'>
            Don’t have an account?{' '}
            <Link to='register' className='text-[#538EB6]'>
              Register
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default MLogin;
