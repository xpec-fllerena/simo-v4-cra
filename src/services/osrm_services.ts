import { CancelToken } from "axios";
import { axiosClientOSRM } from "config/axios/AxiosClient";
import { API_URL_SEARCH } from "constants/API_URL_CONSTANTS";

export async function search_osrm_service(
  entity: string,
  body: any,
  token: string,
  cancelToken: CancelToken
) {
  const url = `${API_URL_SEARCH}/${entity}`;
  let result = await axiosClientOSRM.post(url, body, {
    cancelToken,
    headers: { Authorization: token },
  });
  return result;
}
