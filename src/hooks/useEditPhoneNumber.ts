import { AuthResponse, AuthProps } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

export const useEditPhoneNumber = () => {
  const [data, setData] = useState<AuthProps>();
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async (phoneNumber: string) => {
    setIsLoading(true);
    try {
      const resp: AuthResponse = await api.put('/account/change-phone', {
        phoneNumber,
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
