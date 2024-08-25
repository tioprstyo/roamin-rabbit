import { PackageDetailProps, PackageDetailResponse } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

export const useGetPackageDetail = () => {
  const [data, setData] = useState<PackageDetailProps>();
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async (packageId: string) => {
    setIsLoading(true);
    try {
      const resp: PackageDetailResponse = await api.get(
        `/packages/${packageId}/detail`,
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
