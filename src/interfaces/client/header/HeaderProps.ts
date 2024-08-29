export interface HeaderProps {
  headerType: string;
  headerTitle: string;
  classname?: string;
  handleBackButton?: () => void;
}

export const HEADER_TYPE = {
  DEFAULT: 'default',
  DETAIL: 'detail',
  NORMAL: 'normal',
};
