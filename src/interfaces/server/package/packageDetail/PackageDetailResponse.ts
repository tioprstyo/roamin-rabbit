import { PackageDetailProps } from './PackageDetailProps';

export interface PackageDetailResponse {
  data: PackageDetailProps | undefined;
  status: string;
}
