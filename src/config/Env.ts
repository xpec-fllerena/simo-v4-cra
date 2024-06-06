import { CLIENT, ENV } from "./init";

export default class Env {
  static _comment =
    "Information about the environment. @version 1.0.1 @author Naldo Duran<naldorck@gmail.com>";

  static clients = Object.keys(CLIENT);
  static env = Object.keys(ENV);

  static children_clients = [
    {
      client: CLIENT.LOGYTECH,
      children: CLIENT.SHIPERTO,
    },
  ];

  static defaults = {
    client: CLIENT.CASAIDEAS,
    env: ENV.DEV,
  };
}
