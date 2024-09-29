export interface PackagePlanData {
  id: string;
  pic: string;
  name: string;
  orderId: string;
  usedSms: number;
  quotaSms: number;
  usedCall: number;
  usedData: number;
  createdAt: string;
  expiredAt: string;
  packageId: string;
  quotaCall: number;
  quotaData: number;
  remainingSms: number;
  remainingCall: number;
  remainingData: number;
}
