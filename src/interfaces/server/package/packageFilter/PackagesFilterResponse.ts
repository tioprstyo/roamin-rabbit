import { PackageFilterProps } from './PackageFilterProps';

export interface PackagesFilterResponse {
  data: PackageFilterProps | undefined;
  status: string;
}
