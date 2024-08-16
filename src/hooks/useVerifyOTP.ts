import { OtpProps, OtpRequest, OtpResponse } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

export const useVerifyOTP = () => {
  const [data, setData] = useState<OtpProps>();
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async ({ phoneNumber, otp }: OtpRequest) => {
    setIsLoading(true);
    try {
      const resp: OtpResponse = await api.post('/auth/verify-otp', {
        phoneNumber,
        otp,
      });
      if (resp?.status === 'success') {
        setData(resp.data);
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
