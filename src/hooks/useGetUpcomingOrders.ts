import { UpcommingOrderResponse } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

export const useGetUpcomingOrders = () => {
  const [data, setData] = useState<UpcommingOrderResponse>();
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async () => {
    setIsLoading(true);
    try {
      const resp: UpcommingOrderResponse = await api.get('/orders/upcoming');
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
    fetching,
    isLoading,
  };
};
