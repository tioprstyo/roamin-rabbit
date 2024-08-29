import { UserProps, UsersResponse } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

export const useGetProfile = () => {
  const [data, setData] = useState<UserProps>();
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async () => {
    setIsLoading(true);
    try {
      const resp: UsersResponse = await api.get('/account');
      if (resp?.status === 'success') {
        setData(resp?.data);
        setIsLoading(false);
      } else {
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
