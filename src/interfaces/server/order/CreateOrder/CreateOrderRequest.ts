export interface PaymenrMetadataProps {
  work: string;
  id: string;
  progress: string;
}
export interface CreateOrderRequest {
  packageId: string;
  paymentMethod: string;
  paymentMetadata: PaymenrMetadataProps;
  promoCode: string;
}
