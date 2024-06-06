import axios from "axios";
import { Env, MultiClient } from "config";
import OMNIX_MODULE from "constants/OMNIX_MODULE";

const buildUrl = (group: OMNIX_MODULE) => {
  const _process = process.env;
  const [_client, _env] = MultiClient.get_user_env(
    null,
    Env.clients,
    Env.env,
    Env.defaults
  );
  const env = _env?.toUpperCase();
  const currentWebsite = _client?.toUpperCase();
  const urlBase = _process[`REACT_APP_BASE_${env}_URL_${currentWebsite}`];
  const urlGroup = _process[`REACT_APP_API_URL_${group}`];
  return `${urlBase}-${urlGroup}`;
};

export const axiosClientOSM = axios.create({
  baseURL: buildUrl(OMNIX_MODULE.OSM),
});

export const axiosClientOOM = axios.create({
  baseURL: buildUrl(OMNIX_MODULE.OOM),
});

export const axiosClientOIM = axios.create({
  baseURL: buildUrl(OMNIX_MODULE.OIM),
});

export const axiosClientOLM = axios.create({
  baseURL: buildUrl(OMNIX_MODULE.OLM),
});

export const axiosClientDOWNLOAD = axios.create({
  baseURL: buildUrl(OMNIX_MODULE.DOWNLOAD),
});

export const axiosClientOSRM = axios.create({
  baseURL: buildUrl(OMNIX_MODULE.OSRM),
});

export const axiosClientPRIORITIZATION = axios.create({
  baseURL: buildUrl(OMNIX_MODULE.PRIORITIZATION),
});
