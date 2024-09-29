import { CreateOrderRequest, CreateOrderResponse } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

export const useOrder = () => {
  const [data, setData] = useState<CreateOrderResponse>();
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async (order: CreateOrderRequest) => {
    setIsLoading(true);
    try {
      const resp: CreateOrderResponse = await api.post('/orders', {
        packageId: order.packageId,
        promoCode: order.promoCode,
        paymentMethod: order.paymentMethod,
        paymentMetadata: {
          in: order.paymentMetadata.in,
          work: order.paymentMetadata.work,
          progress: order.paymentMetadata.progress,
        },
      });
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
