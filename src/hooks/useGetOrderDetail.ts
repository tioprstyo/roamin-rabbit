import { OrderDetailProps, OrderDetailResponse } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

export const useGetOrderDetail = () => {
  const [data, setData] = useState<OrderDetailProps>();
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async (id: string) => {
    setIsLoading(true);
    try {
      const resp: OrderDetailResponse = await api.get(`/orders/${id}/detail`);
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
