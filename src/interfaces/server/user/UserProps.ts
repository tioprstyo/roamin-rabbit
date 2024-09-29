import { ActivePlanProps } from './ActivePlanProps';
import { ProfileProps } from './ProfileProps';

export interface UserProps {
  profile: ProfileProps;
  activePlan: ActivePlanProps[];
}
