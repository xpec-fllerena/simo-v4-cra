import { CancelToken } from "axios"
import { API_URL_ORDER, API_URL_SG } from "constants/API_URL_CONSTANTS"
import AxiosConsumer from "config/axios/AxiosConsumer"
import OMNIX_MODULE from "constants/OMNIX_MODULE";

const axios_client = AxiosConsumer(OMNIX_MODULE.OSRM).getClient()

export async function get_sg_service(id: string, token: string, cancelToken: CancelToken) {
  const url = `${API_URL_ORDER}/all/${API_URL_SG}/${id}`
  let result = await axios_client.get(url, { cancelToken, headers: { Authorization: token } })
  return result
}
