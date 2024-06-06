import { LOGGING_IN, LOGGING_OUT } from "store/types/publicTypes";
import { SIMO_VAR } from "constants/APP_CONSTANTS";

export const logInAction = (user: any) => {
  localStorage.setItem(SIMO_VAR, JSON.stringify(user));
  return {
    type: LOGGING_IN,
    payload: user,
  };
};

export const logOutAction = () => {
  // localStorage.removeItem(SIMO_VAR);
  return { type: LOGGING_OUT };
};
