import { PackagesResponse } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

export const useGetPackageList = () => {
  const [data, setData] = useState<PackagesResponse>({
    data: [],
    status: '',
    metadata: undefined,
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async () => {
    setIsLoading(true);
    try {
      const resp: PackagesResponse = await api.get('/packages');
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
