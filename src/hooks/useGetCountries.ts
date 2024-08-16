import { CountriesResponse, CountriesProps } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

export const useGetCountries = () => {
  const [data, setData] = useState<CountriesProps[]>();
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async () => {
    setIsLoading(true);
    try {
      const resp: CountriesResponse = await api.get('/countries');
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
