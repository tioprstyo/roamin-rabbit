import { ActivePlanProps } from './ActivePlanProps';
import { ProfileProps } from './ProfileProps';

export interface UserProps {
  profile: ProfileProps | undefined;
  token: string;
  isLogin: boolean;
  isLoading: boolean;
  activePlan: ActivePlanProps[];
}
