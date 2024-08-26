import { ListParamsProps, PackageFilterProps } from 'interfaces';

export interface FilterListProps {
  handleBackButton: () => void;
  packageFilter?: PackageFilterProps;
  params: ListParamsProps;
}
