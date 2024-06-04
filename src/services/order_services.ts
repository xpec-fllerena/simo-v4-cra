import { CancelToken } from "axios"
import AxiosConsumer from "config/axios/AxiosConsumer"
import { API_URL_ORDER } from "constants/API_URL_CONSTANTS"
import OMNIX_MODULE from "constants/OMNIX_MODULE";

const axios_client = AxiosConsumer(OMNIX_MODULE.OOM).getClient()

export async function get_order_service(id: string, token: string, cancelToken: CancelToken) {
  const url = `${API_URL_ORDER}/${id}`
  let result = await axios_client.get(url, { cancelToken, headers: { Authorization: token } })
  return result
}
