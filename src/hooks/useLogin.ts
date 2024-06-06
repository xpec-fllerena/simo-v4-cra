
import { useContext, useState } from "react";
import { login_user_service } from "services/user_services";
import { AppContext } from "store/context/AppContext";
import { useNavigate } from "react-router-dom";
import useCancelToken from "hooks/useCancelToken";
import AuthContext from "store/context/PublicContext";
import { logInAction, logOutAction } from "store/actions/publicActions";

interface ILoginData {
  user: string;
  password: string;
}

interface IErrorLogin {
  code: number;
  message: string;
}

const useLogin = () => {
  const [error_login, set_error_login] = useState<IErrorLogin>({
    code: 0,
    message: "",
  });
  const { newCancelToken, isCancel } = useCancelToken();

  const { dispatch } = useContext(AuthContext);

  const { set_loading_app } = useContext(AppContext);
  const navigate = useNavigate();

  const login_user_action = async (body: ILoginData) => {
    try {
      set_loading_app(true);
      set_error_login({
        code: 0,
        message: "",
      });
      let {
        data: { message },
      }: any = await login_user_service(body, newCancelToken());
      const { id, name, role, email, token } = message;
      dispatch(logInAction({ id, name, role, email, token }));
      set_loading_app(false);
      navigate("/dashboard");
    } catch (error: any) {
      set_loading_app(false);
      set_error_login({
        code: error?.response?.status,
        message: error.response?.data?.message,
      });
      if (isCancel(error)) return;
    }
  };

  const logout_user_action = () => {
    dispatch(logOutAction);
    navigate("/");
    window.location.reload();
  };

  return {
    login_user_action,
    logout_user_action,
    error_login,
  };
};

export default useLogin;
