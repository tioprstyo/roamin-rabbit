import { AuthResponse, AuthProps } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';
import { useRecoilState } from 'recoil';
import { inputNumberState } from 'atom/inputNumber';

export const useEditPhoneNumber = () => {
  const [data, setData] = useState<AuthProps>();
  const [isLoading, setIsLoading] = useState(false);
  const [inputNumber, setInputNumber] = useRecoilState(inputNumberState);

  const fetching = async (phoneNumber: string) => {
    setInputNumber(phoneNumber);
    setIsLoading(true);
    try {
      const resp: AuthResponse = await api.put('/account/change-phone', {
        phoneNumber,
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
