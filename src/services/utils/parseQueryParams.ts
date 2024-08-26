import { ListParamsProps } from 'interfaces';

export const parseQueryParams = (params: ListParamsProps) => {
  const objectToArray = Object.keys(params);
  let pathUrl = '?';
  for (let i = 0; i < objectToArray.length; i++) {
    pathUrl = `${pathUrl}${objectToArray[i]}=${
      params[objectToArray[i] as keyof typeof params]
    }${i < objectToArray.length - 1 ? '&' : ''}`;
  }
  return pathUrl;
};
