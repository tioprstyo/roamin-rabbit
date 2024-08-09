import { AuthProps } from './AuthProps';

export interface AuthResponse {
  data: AuthProps | undefined;
  status: string;
}
