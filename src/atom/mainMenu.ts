import { atom } from 'recoil';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SimCardOutlinedIcon from '@mui/icons-material/SimCardOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

export const mainMenuState = atom({
  key: 'mainMenuAtom',
  default: [
    {
      title: 'Home',
      key: 'home',
      path: '/',
      icon: HomeOutlinedIcon,
    },
    {
      title: 'Manage',
      key: 'manage',
      path: '/manage',
      icon: SimCardOutlinedIcon,
    },
    {
      title: 'Support',
      key: 'support',
      path: '/support',
      icon: HelpCenterOutlinedIcon,
    },
    {
      title: 'Me',
      key: 'me',
      path: '/profile',
      icon: AccountBoxOutlinedIcon,
    },
  ],
});
