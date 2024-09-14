export interface PaymenrMetadataProps {
  work: string;
  in: string;
  progress: string;
}
export interface CreateOrderRequest {
  packageId: string;
  paymentMethod: string;
  paymentMetadata: PaymenrMetadataProps;
  promoCode: string;
}
