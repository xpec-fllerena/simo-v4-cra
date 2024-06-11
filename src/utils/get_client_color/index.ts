import { Env, MultiClient } from "config";

const get_client_color = (): string => {
  let [_client] = MultiClient.get_user_env(
    null,
    Env.clients,
    Env.env,
    Env.defaults
  );

  const clients: { [k: string]: string } = {
    core: "#F9004D",
    entel: "#002EFE",
    wom: "#451287"
  }
  if (!_client) return clients?.core
  return clients.hasOwnProperty(_client) ? clients[_client] : clients.core
}

export default get_client_color
