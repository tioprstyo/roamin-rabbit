import { UserProps } from 'interfaces';
import Cookies from 'js-cookie';
import { atom } from 'recoil';

export const profileState = atom<UserProps>({
  key: 'profileAtom',
  default: {
    profile: undefined,
    token: Cookies.get('token') || '',
    isLogin: Cookies.get('token') ? true : false,
    isLoading: false,
    activePlan: [],
  },
});
