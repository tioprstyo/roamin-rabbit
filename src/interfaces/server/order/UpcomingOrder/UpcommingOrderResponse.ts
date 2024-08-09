import { MetaDatalistProps, UpcomingOrderProps } from 'interfaces';

export interface UpcommingOrderResponse {
  data: UpcomingOrderProps[];
  status: string;
  metadata: MetaDatalistProps | undefined;
}
