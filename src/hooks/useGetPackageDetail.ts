import { PackageDetailProps, PackageDetailResponse } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

export const useGetPackageDetail = (id: string) => {
  const [data, setData] = useState<PackageDetailProps>();
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async () => {
    setIsLoading(true);
    try {
      const resp: PackageDetailResponse = await api.get(
        `/packages/${id}/detail`,
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
