import { AuthResponse, AuthProps, UserRequest } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

export const useEditProfile = () => {
  const [data, setData] = useState<AuthProps>();
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async ({ name, email }: UserRequest) => {
    setIsLoading(true);
    try {
      const resp: AuthResponse = await api.put('/account/edit', {
        name,
        email,
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
