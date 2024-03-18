import axios, { AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:53084/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default class Request {
  static defaults() {
    return axiosInstance.defaults;
  }

  static get<T = any>(url: string, config: AxiosRequestConfig = {}) {
    const axiosConfig = { ...config };
    return axiosInstance.get<T>(url, axiosConfig);
  }

  static patch<T = any>(
    url: string,
    data: object,
    config: AxiosRequestConfig = {}
  ) {
    const axiosConfig = { ...config };

    return axiosInstance.patch<T>(url, data, axiosConfig);
  }

  static post(url: string, data: any, config?: AxiosRequestConfig) {
    const axiosConfig = { ...config };

    return axiosInstance.post(url, data, axiosConfig);
  }

  static put(url: string, data: object, config?: AxiosRequestConfig) {
    const axiosConfig = { ...config };

    return axiosInstance.put(url, data as FormData, axiosConfig);
  }

  static delete<DataType>(url: string, config?: AxiosRequestConfig<DataType>) {
    const axiosConfig = { ...config };

    return axiosInstance.delete(url, axiosConfig);
  }

  static request(config: AxiosRequestConfig) {
    return axiosInstance.request(config);
  }
}

export function csrfHeader(): object {
  const csrfToken = document.querySelector(
    "meta[name=csrf-token]"
  ) as HTMLMetaElement;

  return { "X-CSRF-Token": csrfToken ? csrfToken.content : "" };
}
