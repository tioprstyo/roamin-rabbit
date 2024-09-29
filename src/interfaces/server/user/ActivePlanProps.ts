export interface ActivePlanProps {
  id: string;
  orderId: string;
  pic: string;
  name: string;
  usedData: number;
  usedCall: number;
  usedSms: number;
  expiredAt: string;
  quotaCall: number;
  quotaData: number;
  quotaSms: number;
}
