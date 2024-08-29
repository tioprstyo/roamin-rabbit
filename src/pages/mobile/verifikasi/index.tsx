import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import { useRecoilState } from 'recoil';
import { inputNumberState } from 'atom/inputNumber';
import { useCountdown, useVerifyOTP } from 'hooks';
import Cookies from 'js-cookie';
import moment from 'moment';

const MVerification = () => {
  const navigate = useNavigate();
  const inputRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const inputNumber = useRecoilState(inputNumberState);
  const { data, fetching: fetchingOTP } = useVerifyOTP();
  const prevRoute = useLocation();
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const { minutes, seconds } = useCountdown(
    moment(new Date(), 'H:m').add(3, 'minutes').format('YYYY-MM-DD H:m'),
  );

  const handleOtpChange = (value: string, index: number) => {
    const re = /^[0-9\b]+$/;
    const newOtp = [...otp];
    newOtp[index] = value;
    if (value === '' || re.test(value)) {
      setOtp(newOtp);
      if (value.length === 1 && index < newOtp.length - 1) {
        inputRef.current[index + 1]?.focus();
      }
    }

    if (value.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  };

  const handleOtpSubmit = () => {
    const inputOtp = otp.join('');
    fetchingOTP({
      phoneNumber: inputNumber[0],
      otp: inputOtp,
    });
  };

  useEffect(() => {
    if (otp.every((digit) => digit !== '')) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }

    if (data) {
      if (prevRoute.state?.previousPath == '/change-number') {
        navigate('/profile');
      } else {
        Cookies.set('token', data.token);
        navigate('/');
      }
    }
  }, [otp, data]);

  return (
    <>
      <Header headerType={HEADER_TYPE.DETAIL} headerTitle='' />
      <div className='content-wrapper p-4 mt-10 min-h-[calc(100vh-6rem)]'>
        <div className='heading'>
          <h1 className='font-black text-[28px] dark:text-roamin-yellow-500 leading-10'>
            Let’s Verify
          </h1>
          <p className='text-[16px] text-[#505454] dark:text-white font-normal mt-5'>
            OTP code has send to your WhatsApp
            <br />
            <span className='font-semibold'>[{inputNumber[0]}]</span>
          </p>
        </div>
        <div className='form-content mt-5'>
          <div className='form mb-6 flex flex-col gap-2'>
            <div className='input flex flex-row gap-2'>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  inputMode='numeric'
                  value={digit}
                  maxLength={1}
                  type='text'
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  ref={(ref) => (inputRef.current[index] = ref)}
                  className='px-3 py-3 w-1/6 mt-1 text-center placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] outline-none focus:outline-none focus:ring'
                />
              ))}
            </div>
            <div className='timer mt-3'>
              <p className='text-[16px] text-[#363636] dark:text-white font-normal'>
                Wait for{' '}
                <b className='text-[#40B7B0]'>
                  {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </b>{' '}
                to resend the OTP
              </p>
            </div>
          </div>
          <div className='form'>
            <button
              onClick={handleOtpSubmit}
              disabled={isButtonDisabled}
              className='bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 w-full text-[14px] disabled:bg-[#E9E9E9] disabled:text-[#9E9E9E]'
              type='button'
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MVerification;
