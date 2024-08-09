import { ActivateOrderProps, ActivateOrderResponse } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

export const useGetActivateOrder = () => {
  const [data, setData] = useState<ActivateOrderProps>();
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async (id: string) => {
    setIsLoading(true);
    try {
      const resp: ActivateOrderResponse = await api.get(
        `/orders/${id}/activate`,
      );
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
