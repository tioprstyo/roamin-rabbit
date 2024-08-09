import { AuthResponse, AuthProps, UserRegisterRequest } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

export const useRegister = () => {
  const [data, setData] = useState<AuthProps>();
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async ({ fullName, phoneNumber }: UserRegisterRequest) => {
    setIsLoading(true);
    try {
      const resp: AuthResponse = await api.post('/auth/register', {
        fullName,
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
    mutate,
    isLoading,
  };
};
