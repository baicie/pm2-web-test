import axios, { AxiosRequestConfig } from 'axios';
import { defaultErrorHandler } from '../error-handler';
import { useI18nNotPinia } from '../hooks';
import { getToken } from '../token';

export interface ExtraFetchParams {
  /** extra data for extends */
  extra?: any;
  /** 扩展请求头 */
  headers?: any;
  /** cancel request */
  cancel?: Promise<string | undefined>;
}

export interface WrappedFetchParams extends ExtraFetchParams {
  /** http method */
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD';
  url: string;
  /** post json data */
  data?: any;
  /** post form data */
  form?: any;
  /** query data */
  query?: any;
  /** header */
  header?: any;
  /** path data */
  path?: any;
}

const { getType } = useI18nNotPinia();

export const fetch = axios.create({
  timeout: 60000,
  withCredentials: false,
});

async function ajax(
  param: WrappedFetchParams,
  // path?: string,
  // basePath?: string
): Promise<any> {
  const { method, url, data, form, query, header, extra, cancel, headers } =
    param;

  let config: AxiosRequestConfig = {
    ...extra,
    method: method.toLowerCase(),
    headers: { ...headers, ...header },
  };

  if (getToken()) {
    config.headers = {
      token: getToken(),
      ...config.headers,
    };
  }

  // json
  if (data) {
    config = {
      ...config,
      headers: {
        // 可覆盖
        'Content-Type': 'application/json',
        ...config.headers,
      },
      data: data,
    };
  }

  // form
  if (form) {
    config = {
      ...config,
      data: form,
    };
  }

  // 下载
  if (extra?.download) {
    config = {
      ...config,
      responseType: 'blob',
    };
  }

  const response = await fetch.request({
    ...config,
    url: `http://localhost:6174${url}`,
    // url: url,
    params: {
      ...query,
      lang: getType(),
    },
  });
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  if (response.data && response.data.code !== 200) {
    // defaultErrorHandler(response.data.data);
    // return;
    throw new Error(response.data.data);
  }

  return response.data;
}

export default ajax;

export interface BaseRes<T> {
  code: number;
  msg: string;
  data: T;
}

export function get<T>(url: string, params?: unknown): Promise<BaseRes<T>> {
  return ajax({
    method: 'GET',
    url: url,
    query: params ?? {},
  });
}

export function post<T>(url: string, params?: unknown): Promise<BaseRes<T>> {
  return ajax({
    method: 'POST',
    url: url,
    data: params ?? {},
  });
}
