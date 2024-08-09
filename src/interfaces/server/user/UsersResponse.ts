import { UserProps } from './UserProps';

export interface UsersResponse {
  data: UserProps | undefined;
  status: string;
}
