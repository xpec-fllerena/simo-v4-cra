import { CancelToken } from "axios";
import { API_URL_ORDER, API_URL_SG } from "constants/API_URL_CONSTANTS";
import { axiosClientOOM } from "config/axios/AxiosClient";

export async function get_sg_service(
  id: string,
  token: string,
  cancelToken: CancelToken
) {
  const url = `${API_URL_ORDER}/all/${API_URL_SG}/${id}`;
  let result = await axiosClientOOM.get(url, {
    cancelToken,
    headers: { Authorization: token },
  });
  return result;
}
