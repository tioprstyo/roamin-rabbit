import { PackageFilterProps, PackagesFilterResponse } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

export const useGetPackageFilter = () => {
  const [data, setData] = useState<PackageFilterProps>();
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async () => {
    setIsLoading(true);
    try {
      const resp: PackagesFilterResponse = await api.get('/packages/filter');
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
