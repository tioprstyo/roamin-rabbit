import { PackagesProps } from './PackagesProps';

interface PackagesResponseProps {
  [key: string]: PackagesProps[];
}

export interface PackagesResponse {
  data: PackagesResponseProps;
  status: string;
}
