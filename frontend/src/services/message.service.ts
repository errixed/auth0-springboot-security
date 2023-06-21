import { AxiosRequestConfig } from "axios";
import { ApiResponse } from "../models/api-response";
import { callExternalApi } from "./external-api.service";

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;

export const getAdminResource = async (): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/api/messages/admin`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const { data, error } = (await callExternalApi({ config })) as ApiResponse;

  return {
    data,
    error,
  };
};
