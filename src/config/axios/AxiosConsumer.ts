import AxiosClient from "config/axios/AxiosClient";
import OMNIX_MODULE from "constants/OMNIX_MODULE";

const axiosClassOOM = new AxiosClient(OMNIX_MODULE.OOM);
const axiosClassOIM = new AxiosClient(OMNIX_MODULE.OIM);
const axiosClassOLM = new AxiosClient(OMNIX_MODULE.OLM);
const axiosClassOSRM = new AxiosClient(OMNIX_MODULE.OSRM);
const axiosClassOMA = new AxiosClient(OMNIX_MODULE.OMA);
const axiosClassOSM = new AxiosClient(OMNIX_MODULE.OSM);
const axiosClassOITM = new AxiosClient(OMNIX_MODULE.OITM);

const axiosClassServiceListener = new AxiosClient(OMNIX_MODULE.LISTENER);

export default function AxiosConsumer(client: OMNIX_MODULE): AxiosClient {
  switch (client) {
    case "OOM":
      return axiosClassOOM;
    case "OIM":
      return axiosClassOIM;
    case "OSM":
      return axiosClassOSM;
    case "LISTENER":
      return axiosClassServiceListener;
    case "OITM":
      return axiosClassOITM;
    case "OMA":
      return axiosClassOMA;
    case "OLM":
      return axiosClassOLM;
    case "OSRM":
      return axiosClassOSRM;
    default:
      return axiosClassOSRM;
  }
}
