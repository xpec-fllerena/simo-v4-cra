
import { Breadcrumb, TitleScreen } from "components/Core"
import CollapseWithDetail from "components/Core/Collapse/WithDetail"
import DetailHistoryStatus from "components/DetailHistoryStatus"
import useGetOrder from "hooks/useGetOrder"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

const DetailScreen = () => {
  const { order_id } = useParams()
  const { data: order, get_order_action } = useGetOrder()

  useEffect(() => {
    get_order_action(order_id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order_id])

  return (
    <div className="w-full h-full flex flex-col items-start justify-start">
      <Breadcrumb
        data={[
          { name: "Listado de órdenes", href: "/orders" },
          { name: "Detalle de órden", href: `/orders/${order_id}` },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title={`Detalle de órden #${order_id}`} />
        {/* <p>SourceDetailScreen</p> */}
      </div>
      <div className="w-full h-auto py-4 px-6">
        <DetailHistoryStatus statusses={order?.status} />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-6 py-4 px-6">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <h4 className="font-semibold text-[#4C4C4C]">Información</h4>
            <div className="grid grid-cols-2 grid-rows-3 bg-white rounded-xl border divide-x divide-y">
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Número de órden</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{order_id}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Estado de la órden</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{order?.currentStatus?.tag}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Canal</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{order?.channel}</p>
            </div>
          </div>
          <CollapseWithDetail
            title="Información de envío"
            details={{
              country: order?.shippingAddress?.country,
              city: order?.shippingAddress?.city,
              address: order?.shippingAddress?.address,
            }}
          />
          <CollapseWithDetail
            title="Información de facturación"
            details={{
              country: order?.billingAddress?.country,
              city: order?.billingAddress?.city,
              address: order?.billingAddress?.address,
            }}
          />
          <CollapseWithDetail
            title="Información de cliente"
            details={{
              id: order?.customer?.id,
              name: order?.customer?.name,
              phone: order?.customer?.phone,
            }}
          />
          <CollapseWithDetail
            title="Información de pago"
            details={{
              type: order?.paymentInfo && order?.paymentInfo[0]?.type,
              amount: order?.paymentInfo && order?.paymentInfo[0]?.amount,
            }}
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <h4 className="font-semibold text-[#4C4C4C]">Detalle de la órden</h4>
            <div className="grid grid-cols-2 grid-rows-4 bg-white rounded-xl border divide-x divide-y">
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Fecha creación órden</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{order?.creationDate}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Sitio</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{order?.site}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Estado de la órden</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{order?.currentStatus?.tag}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">ID Canal de venta</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{order?.salesChannelId}</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h4 className="font-semibold text-[#4C4C4C]">Grupo de envíos</h4>
            <div className="w-full flex flex-col bg-white rounded-xl border divide-x divide-y">
              <div className="w-full flex flex-row items-center justify-between">
                <p className="text-sm text-[#F9004D] underline px-4 py-3">#fg234567890</p>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <p className="text-sm text-[#F9004D] underline px-4 py-3">#fg234567890</p>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <p className="text-sm text-[#F9004D] underline px-4 py-3">#fg234567890</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h4 className="font-semibold text-[#4C4C4C]">Adjuntos</h4>
            <div className="w-full flex flex-col bg-white rounded-xl border py-3">
              <p className="text-sm text-[#F9004D] underline px-4 py-2">img_8923.png</p>
              <p className="text-sm text-[#F9004D] underline px-4 py-2">relevant-info.pdf</p>
              <p className="text-sm text-[#F9004D] underline px-4 py-2">relevant-info.jdf</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailScreen
