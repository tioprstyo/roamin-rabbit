import { ExpiredOrderResponse } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

export const useGetExpiredOrder = () => {
  const [data, setData] = useState<ExpiredOrderResponse>({
    data: [],
    status: '',
    metadata: undefined,
  });
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async () => {
    setIsLoading(true);
    try {
      const resp: ExpiredOrderResponse = await api.get('/orders/expired');
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
