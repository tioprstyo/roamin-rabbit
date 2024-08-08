import { LoginResponse } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

export const useLogin = () => {
  const [data, setData] = useState<LoginResponse>();
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async (phoneNumber: string) => {
    setIsLoading(true);
    try {
      const resp = (await api.post('/auth/login', {
        phoneNumber,
      })) as unknown as LoginResponse;
      if (resp?.status === 'success') {
        setData(resp);
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
    }
  };

  return {
    data,
    mutate,
    isLoading,
  };
};
