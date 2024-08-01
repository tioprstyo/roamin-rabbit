import React from 'react';
import { useState, useRef, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const MVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const inputRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value.length === 1 && index < newOtp.length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    if (value.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  };

  const handleOtpSubmit = () => {
    // console.log(otp.join(''));
    navigate('/home');
  };

  useEffect(() => {
    if (otp.every((digit) => digit !== '')) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [otp]);

  return (
    <>
      <div className='header p-4 flex items-center '>
        <ArrowBackIcon onClick={() => navigate(-1)} />
      </div>
      <div className='content-wrapper p-4 mt-10'>
        <div className='heading'>
          <h1 className='font-black text-[28px] leading-10'>Let’s Verify</h1>
          <p className='text-[16px] text-[#505454] font-normal mt-5'>
            OTP code has send to your WhatsApp
            <br />
            <span className='font-semibold'>[number phone]</span>
          </p>
        </div>
        <div className='form-content mt-5'>
          <div className='form mb-6 flex flex-col gap-2'>
            <div className='input flex flex-row gap-2'>
              {otp.map((digit, index) => (
                <input
                  key={index}
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
              <p className='text-[16px] text-[#363636] font-normal'>
                Wait for <b className='text-[#40B7B0]'>02:59</b> to resend the
                OTP
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
