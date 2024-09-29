import { inputNumberState } from 'atom/inputNumber';
import { AuthResponse, AuthProps, UserRegisterRequest } from 'interfaces';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { api } from 'services';

export const useRegister = () => {
  const [data, setData] = useState<AuthProps>();
  const [isLoading, setIsLoading] = useState(false);
  const [inputNumber, setInputNumber] = useRecoilState(inputNumberState);

  const fetching = async ({ fullName, phoneNumber }: UserRegisterRequest) => {
    phoneNumber = '+' + phoneNumber;
    setInputNumber(phoneNumber);
    setIsLoading(true);
    try {
      const resp: AuthResponse = await api.post('/auth/register', {
        fullName,
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
