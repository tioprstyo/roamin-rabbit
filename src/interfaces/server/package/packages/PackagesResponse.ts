import { MetaDatalistProps } from 'interfaces';
import { PackagesProps } from './PackagesProps';

export interface PackagesResponse {
  data: PackagesProps[];
  status: string;
  metadata: MetaDatalistProps | undefined;
}
