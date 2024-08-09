export interface FilterProps {
  key: string;
  value: string;
}

export interface PackageFilterProps {
  validityDay: FilterProps[];
  quotaData: FilterProps[];
  network: FilterProps[];
  speed: FilterProps[];
  otherService: FilterProps[];
  quotaTheteringNominal: FilterProps[];
}
