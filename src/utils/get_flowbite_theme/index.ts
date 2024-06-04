import entel_colors from "utils/get_flowbite_theme/entel"
import core_colors from "utils/get_flowbite_theme/core"
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Env, MultiClient } from "config";

const get_flowbite_theme = (): CustomFlowbiteTheme => {
  let [_client] = MultiClient.get_user_env(
    null,
    Env.clients,
    Env.env,
    Env.defaults
  );

  const clients: { [k: string]: CustomFlowbiteTheme } = {
    core: core_colors,
    entel: entel_colors,
  }
  if (!_client) return clients?.core
  return clients.hasOwnProperty(_client) ? clients[_client] : clients.core
}

export default get_flowbite_theme
