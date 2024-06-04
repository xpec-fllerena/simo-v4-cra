import { CancelToken } from "axios"
import AxiosConsumer from "config/axios/AxiosConsumer"
import { API_URL_SEARCH } from "constants/API_URL_CONSTANTS"
import OMNIX_MODULE from "constants/OMNIX_MODULE";

const axios_client = AxiosConsumer(OMNIX_MODULE.OSRM).getClient()

export async function search_osrm_service(entity: string, body: any, token: string, cancelToken: CancelToken) {
  const url = `${API_URL_SEARCH}/${entity}`
  let result = await axios_client.post(url, body, { cancelToken, headers: { Authorization: token } })
  return result
}
