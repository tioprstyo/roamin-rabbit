import { ReactNode } from 'react';

export interface RouteObjectProps {
  key: string;
  path: string;
  element: ReactNode;
  children?: RouteObjectProps[];
}
