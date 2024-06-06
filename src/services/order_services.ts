import { CancelToken } from "axios";
import { axiosClientOOM } from "config/axios/AxiosClient";
import { API_URL_ORDER } from "constants/API_URL_CONSTANTS";

export async function get_order_service(
  id: string,
  token: string,
  cancelToken: CancelToken
) {
  const url = `${API_URL_ORDER}/${id}`;
  let result = await axiosClientOOM.get(url, {
    cancelToken,
    headers: { Authorization: token },
  });
  return result;
}
