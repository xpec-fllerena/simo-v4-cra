import { CancelToken } from "axios"
import AxiosConsumer from "config/axios/AxiosConsumer"
import OMNIX_MODULE from "constants/OMNIX_MODULE";
import { API_URL_USER } from "constants/API_URL_CONSTANTS"

const axios_client = AxiosConsumer(OMNIX_MODULE.OSM).getClient()

export async function login_user_service({ user: key, password: secret }: any, cancelToken: CancelToken) {
  console.log("gda")
  const url = `${API_URL_USER}/auth`
  const body = { key, secret }
  let result = await axios_client.post(url, body, { cancelToken })
  return result
}
