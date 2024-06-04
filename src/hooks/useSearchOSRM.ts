
import { useContext, useState } from "react";
import { search_osrm_service } from "services/osrm_services";
import useCancelToken from "hooks/useCancelToken";
import { AppContext } from "store/context/AppContext";
import AuthContext from "store/context/PublicContext";

const useSearchOSRM = ({ entity }: any) => {
  const [data, set_data] = useState<any>();
  const { newCancelToken, isCancel } = useCancelToken();

  const {
    user: { token },
  } = useContext(AuthContext);

  const { loading_app, set_loading_app } = useContext(AppContext);

  const search_osrm_action = async (body: any) => {
    try {
      set_loading_app(true);
      set_data(null);
      let {
        data: { message },
      } = await search_osrm_service(entity, body, token, newCancelToken());
      set_data(message);
      set_loading_app(false);
    } catch (error: any) {
      set_loading_app(false);
      if (isCancel(error)) return;
    }
  };

  return {
    data,
    set_data,
    loading_app,
    search_osrm_action,
  };
};

export default useSearchOSRM;
