import axios, { AxiosInstance } from "axios";
import { IProcessEnv } from "interfaces/IProcessEnv";
import { IAuth } from "interfaces/IUser";
import { GROUP_SERVICE_SERIES, SIMO_VAR } from "constants/APP_CONSTANTS";
import { Env, MultiClient } from "config";

export default class AxiosClient {
  private id: number;
  private type: string;
  private client: AxiosInstance;
  private _process: IProcessEnv;

  constructor(type: string) {
    this.type = type;
    this._process = process.env;
    this.client = this.createAxiosInstance(this.type);
    this.id = new Date().getTime();

    this.seInterceptorRequest();
  }

  setTokenAuth(token: any): void {
    if (token) {
      this.client.defaults.headers.common["Authorization"] = token;
    } else {
      delete this.client.defaults.headers.common["Authorization"];
    }
  }

  private seInterceptorRequest() {
    this.client.interceptors.request.use(
      (config: any) => {
        if (config.headers.common["Authorization"]) return config;
        const userAuth: string = localStorage.getItem(SIMO_VAR) || "{}";
        if (userAuth.match(/user/)) {
          const { user }: IAuth = JSON.parse(userAuth);

          if (user?.token) config.headers.common["Authorization"] = user.token;
          else delete config.headers.common["Authorization"];
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  getClient(): AxiosInstance {
    return this.client;
  }

  buildUrl(group: string): string {
    let [_client, env] = MultiClient.get_user_env(
      null,
      Env.clients,
      Env.env,
      Env.defaults
    );

    if (group === GROUP_SERVICE_SERIES) {
      const url: any =
        this._process[`REACT_APP_${env.toUpperCase()}_URL_LISTENER`.trim()];
      return `${url}`;
    }

    const urlBase: any =
      this._process[
        `REACT_APP_BASE_${env.toUpperCase()}_URL_${_client.toUpperCase()}`
      ];
    const urlGroup: any = this._process[`REACT_APP_API_URL_${group}`];
    console.log("url", `${urlBase}-${urlGroup}`)
    return `${urlBase}-${urlGroup}`;
  }

  createAxiosInstance(group: string): AxiosInstance {
    return axios.create({
      baseURL: this.buildUrl(group),
    });
  }
  getId(): number {
    return this.id;
  }
}
