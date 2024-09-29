import axios, { AxiosError, AxiosResponse } from 'axios';
import { ErrorResponse, RequestBodyProps } from 'interfaces';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const config: RequestBodyProps = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

const get = async (url: string, body?: object) => {
  return await axios
    .get(`${process.env.REACT_APP_BASE_URL}${url}`, {
      ...config,
      headers: {
        ...config.headers,
        Authorization: Cookies.get('token')
          ? `Bearer ${Cookies.get('token')}`
          : '',
      },
      params: body,
    })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      const errorResp = error.response?.data as ErrorResponse;
      toast.error(errorResp.message);
      return error;
    });
};

const post = async (url: string, body?: object) => {
  return await axios
    .post(`${process.env.REACT_APP_BASE_URL}${url}`, body, {
      ...config,
      headers: {
        ...config.headers,
        Authorization: Cookies.get('token')
          ? `Bearer ${Cookies.get('token')}`
          : '',
      },
    })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      const errorResp = error.response?.data as ErrorResponse;
      toast.error(errorResp.message);
      return error;
    });
};

const put = async (url: string, body: object) => {
  return await axios
    .put(`${process.env.REACT_APP_BASE_URL}${url}`, body, {
      ...config,
      headers: {
        ...config.headers,
        Authorization: Cookies.get('token')
          ? `Bearer ${Cookies.get('token')}`
          : '',
      },
    })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      const errorResp = error.response?.data as ErrorResponse;
      toast.error(errorResp.message);
      return error;
    });
};

const api = {
  get,
  post,
  put,
};

export { api };
