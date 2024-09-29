import {
  ListParamsProps,
  PackagePlanData,
  PackagePlanResponse,
} from 'interfaces';
import { useEffect, useState } from 'react';
import { api } from 'services';

export const useGetPlanDetail = () => {
  const [data, setData] = useState<PackagePlanData>();
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async (packagePlanId: string) => {
    setIsLoading(true);
    try {
      const resp: PackagePlanResponse = await api.get(
        `/active-packages/${packagePlanId}/detail/`,
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
