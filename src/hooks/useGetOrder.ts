
import { useContext, useState } from "react"
import { get_order_service } from "services/order_services"
import useCancelToken from "hooks/useCancelToken"
import { AppContext } from "store/context/AppContext"
import AuthContext from "store/context/PublicContext"

const useGetOrder = () => {
  const [data, set_data] = useState<any>()
  const { newCancelToken, isCancel } = useCancelToken()

  const {
    user: { token },
  } = useContext(AuthContext)

  const {
    loading_app,
    set_loading_app,
  } = useContext(AppContext)

  const get_order_action = async (id: any) => {
    try {
      set_loading_app(true)
      set_data(null)
      let {
        data: { message },
      } = await get_order_service(id, token, newCancelToken())
      set_data(message)
      set_loading_app(false)
    } catch (error: any) {
      set_loading_app(false)
      if (isCancel(error)) return
    }
  }

  return {
    data,
    loading_app,
    get_order_action,
  }
}

export default useGetOrder
