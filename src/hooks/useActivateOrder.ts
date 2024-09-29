import { ActivateOrderProps, ActivateOrderResponse } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

export const useActivateOrder = () => {
  const [data, setData] = useState<ActivateOrderProps>();
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async (id: string) => {
    setIsLoading(true);
    try {
      const resp: ActivateOrderResponse = await api.post(
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
    fetching,
    isLoading,
  };
};
