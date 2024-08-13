import {
  CreateOrderResponse,
  CreateOrderProps,
  CreateOrderRequest,
} from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

export const useCreateOrder = () => {
  const [data, setData] = useState<CreateOrderProps>();
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async ({
    packageId,
    paymentMethod,
    paymentMetadata,
    promoCode,
  }: CreateOrderRequest) => {
    setIsLoading(true);
    try {
      const resp: CreateOrderResponse = await api.post('/orders', {
        packageId,
        paymentMethod,
        paymentMetadata,
        promoCode,
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
    fetching,
    isLoading,
  };
};
