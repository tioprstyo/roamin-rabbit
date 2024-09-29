import { profileState } from 'atom';
import { OtpProps, OtpRequest, OtpResponse } from 'interfaces';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { api } from 'services';

export const useVerifyOTP = () => {
  const [data, setData] = useState<OtpProps>();
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useRecoilState(profileState);

  const fetching = async ({ phoneNumber, otp }: OtpRequest) => {
    setIsLoading(true);
    try {
      const resp: OtpResponse = await api.post('/auth/verify-otp', {
        phoneNumber,
        otp,
      });
      if (resp?.status === 'success') {
        Cookies.set('token', resp.data?.token || '');
        setData(resp.data);
        setProfile({
          ...profile,
          token: resp.data?.token ? `Bearer ${resp.data?.token}` : '',
          isLogin: resp.data?.token ? true : false,
        });
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
    }
  };

  return {
    data,
    fetching,
    isLoading,
  };
};
