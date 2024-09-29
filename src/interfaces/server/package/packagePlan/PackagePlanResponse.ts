import { PackagePlanData } from './PackagePlanData';

export interface PackagePlanResponse {
  data: PackagePlanData | undefined;
  status: string;
}
