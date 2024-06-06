import { useReducer } from "react";
import publicReducer from "store/reducers/publicReducer";
import { createContext } from "react";
import { SIMO_VAR } from "constants/APP_CONSTANTS";

interface initialState {
  logged: boolean;
  user: any;
  dispatch: any;
}

const AuthContext = createContext({} as initialState);

const init = () => {
  const getUser = localStorage.getItem(SIMO_VAR);
  const user = getUser && JSON.parse(getUser);

  return {
    logged: !!user,
    user: user,
  };
};

export const PublicProvider = ({ children }: { children: JSX.Element }) => {
  const [publicState, dispatch] = useReducer(publicReducer, {}, init);

  return (
    <AuthContext.Provider
      value={{
        ...publicState,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
