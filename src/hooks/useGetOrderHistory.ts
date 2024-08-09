import { HistoryOrderProps, HistoryOrderResponse } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

export const useGetOrderHistory = () => {
  const [data, setData] = useState<HistoryOrderProps[]>();
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async () => {
    setIsLoading(true);
    try {
      const resp: HistoryOrderResponse = await api.get('/orders');
      if (resp?.status === 'success') {
        setData(resp?.data);
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
