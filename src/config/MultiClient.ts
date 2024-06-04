import { CLIENT } from "./init";

class MultiClient {
  static list_includes_value(list: any, default_value?: any) {
    const _href = window.location.href;
    let element = list.filter((value: any) => _href.includes(value));

    return element[0] ?? default_value;
  }

  static get_user_env(
    auth: any,
    clients: any,
    env_list: any,
    defaults: any,
    set_manually?: any
  ) {
    const _href = window.location.href;

    if (!!set_manually) {
      return [set_manually.client, set_manually.env];
    }

    if (_href.includes(CLIENT.LOCALHOST)) {
      let simulation_client_list: any = [...clients];
      simulation_client_list.shift();
      const simulation_client = this.list_includes_value(
        simulation_client_list,
        defaults.client
      );
      const simulation_env = this.list_includes_value(env_list, defaults.env);

      return [simulation_client, simulation_env];
    }

    if (!!auth) {
      if (auth.toLowerCase() === CLIENT.LOGYTECH) {
        auth = CLIENT.SHIPERTO;
      }
      return [auth, this.list_includes_value(env_list, env_list[2])];
    }

    return [
      this.list_includes_value(clients),
      this.list_includes_value(env_list, env_list[2]),
    ];
  }
}

export default MultiClient;
