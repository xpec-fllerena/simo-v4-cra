import { lazy } from "react";
import * as themes from "overrides/layouts";
import { Env, MultiClient } from "config";

const useMultiClient = () => {
  const [_client, _env] = MultiClient.get_user_env(
    null,
    Env.clients,
    Env.env,
    Env.defaults
  );

  const get_layout_path = (path: any, path_list: any) => {
    let path_overrided = path;
    //eslint-disable-next-line
    const theme: any = themes;

    for (const path_current of path_list) {
      const replaced = path_current.replaceAll("/", "?.");
      //eslint-disable-next-line
      const path_current_active = eval(`theme?.${replaced}`);

      if (!!path_current_active) {
        if (path_current_active.includes(path)) {
          path_overrided = `overrides/theme/${path_current}/${path}`;
          break;
        }
      }
    }

    return import(`./../${path_overrided}`);
  };

  const get_component: any = (path: string) => {
    const path_list = [
      `${_client}/${_env}`,
      `${_client}/base`,
      `omnix/${_env}`,
      `omnix/base`,
    ];

    return lazy(() => get_layout_path(path, path_list));
  };

  return { get_component };
};

export default useMultiClient;
