import { inputNumberState } from 'atom/inputNumber';
import { AuthResponse, AuthProps } from 'interfaces';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { api } from 'services';

export const useLogin = () => {
  const [data, setData] = useState<AuthProps>();
  const [isLoading, setIsLoading] = useState(false);
  const [inputNumber, setInputNumber] = useRecoilState(inputNumberState);

  const fetching = async (phoneNumber: string) => {
    phoneNumber = `+${phoneNumber}`;
    setInputNumber(phoneNumber);
    setIsLoading(true);
    try {
      const resp: AuthResponse = await api.post('/auth/login', {
        phoneNumber,
      });
      if (resp?.status === 'success') {
        console.log(resp)
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
