import axios, { AxiosError, AxiosResponse } from 'axios';
import { RequestBodyProps } from 'interfaces';
import Cookies from 'js-cookie';

const Authorization = Cookies.get('token');
const config: RequestBodyProps = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization,
  },
};

const get = (url: string, body?: object) => {
  if (body) {
    config.params = body;
  }
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}${url}`, config)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error;
    });
};

const post = (url: string, body?: object) => {
  return axios
    .post(`${process.env.REACT_APP_BASE_URL}${url}`, body, config)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error;
    });
};

const put = (url: string, body: object) => {
  return axios
    .put(`${process.env.REACT_APP_BASE_URL}${url}`, body, config)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error;
    });
};

const api = {
  get,
  post,
  put,
};

export { api };
