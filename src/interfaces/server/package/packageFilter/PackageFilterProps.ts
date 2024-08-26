export interface FilterProps {
  key: string;
  value: string;
}

export interface PackageFilterProps {
  validityDay: FilterProps[];
  quotaData: FilterProps[];
  network: FilterProps[];
  speed: FilterProps[];
  planType: FilterProps[];
  quotaTheteringNominal: FilterProps[];
}
