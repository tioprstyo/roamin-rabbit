import { profileState } from 'atom';
import { UserProps, UsersResponse } from 'interfaces';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { api } from 'services';

export const useGetProfile = () => {
  const [data, setData] = useState<UserProps>();
  const [user, setUser] = useRecoilState(profileState);
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async () => {
    setIsLoading(true);
    setUser({
      ...user,
      isLoading: true,
    });
    try {
      const resp: UsersResponse = await api.get('/account');
      if (resp?.status === 'success') {
        setData(resp?.data);
        setUser({
          ...user,
          profile: resp.data?.profile,
          activePlan: resp.data ? resp.data?.activePlan : [],
          isLoading: false,
        });
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setUser({
          ...user,
          isLoading: false,
        });
      }
    } catch (err) {
      setIsLoading(false);
      setUser({
        ...user,
        isLoading: false,
      });
    }
  };

  return {
    data,
    fetching,
    isLoading,
  };
};
