import { CancelToken } from "axios";
import {axiosClientOSM} from "config/axios/AxiosClient";
import { API_URL_USER } from "constants/API_URL_CONSTANTS";

export async function login_user_service(
  { user: key, password: secret }: any,
  cancelToken: CancelToken
) {
  const url = `${API_URL_USER}/auth`;
  const body = { key, secret };
  let result = await axiosClientOSM.post(url, body, { cancelToken });
  return result;
}
