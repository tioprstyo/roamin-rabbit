import { ListParamsProps, PackagesResponse } from 'interfaces';
import { useEffect, useState } from 'react';
import { api } from 'services';

export const useGetPackageList = () => {
  const [data, setData] = useState<PackagesResponse>({
    data: {},
    status: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async (params: ListParamsProps) => {
    setIsLoading(true);
    try {
      const resp: PackagesResponse = await api.get(
        `/packages/${params.countryId}`,
        params,
      );
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
