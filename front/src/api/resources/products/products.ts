import type { AxiosRequestConfig } from "axios";
import { appAxios } from "../../axios";
import type { INewOrderForm } from "./IProduct";

export const URL = {
  registryRepairAnalysis: () => `produtos`,
  getRequestOrdersData: () => `produtos`,
  createRequestOrder: () => `produtos`,
};

export const registryRepairAnalysis = (
  data: INewOrderForm,
  axiosRequestConfig?: AxiosRequestConfig
) => {
  const { signal, abort } = new AbortController();
  const response = appAxios
    .post<string>(URL.registryRepairAnalysis(), data, {
      ...axiosRequestConfig,
      signal: axiosRequestConfig?.signal || signal,
    })
    .then((response) => response);
  return {
    response,
    abort,
  };
};

export const getRequestOrdersData = (
  axiosRequestConfig?: AxiosRequestConfig
) => {
  const { signal, abort } = new AbortController();
  const response = appAxios
    .get<[]>(URL.getRequestOrdersData(), {
      signal,
      ...axiosRequestConfig,
    })
    .then((response) => response.data);
  return {
    response,
    abort,
  };
};

export const createRequestOrder = (
  newOrder: INewOrderForm,
  axiosRequestConfig?: AxiosRequestConfig
) => {
  const { signal, abort } = new AbortController();

  const response = appAxios
    .post<INewOrderForm>(URL.createRequestOrder(), newOrder, {
      signal: axiosRequestConfig?.signal || signal,
      ...axiosRequestConfig,
    })
    .then((response) => response.data);

  return {
    response,
    abort,
  };
};
