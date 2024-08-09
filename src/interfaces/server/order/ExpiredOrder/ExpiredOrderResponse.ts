import { MetaDatalistProps } from 'interfaces';
import { ExpiredOrderProps } from './ExpiredOrderProps';

export interface ExpiredOrderResponse {
  data: ExpiredOrderProps[];
  status: string;
  metadata: MetaDatalistProps | undefined;
}
