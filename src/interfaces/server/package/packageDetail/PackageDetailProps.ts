import { OtherPackageData } from './OtherPackageData';
import { PackageDetailData } from './PackageDetailData';

export interface PackageDetailProps {
  package: PackageDetailData;
  otherPackages: OtherPackageData;
}
