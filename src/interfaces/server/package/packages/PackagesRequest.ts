export interface PackagesRequest {
  isoCode: string;
  network: string;
  priceRangeMax: number;
  priceRangeMin: number;
  quotaData: number;
  quotaTheteringNominal: string;
  speed: string;
  validityDay: number;
}
