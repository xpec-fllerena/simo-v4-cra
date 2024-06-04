
import { Breadcrumb, TitleScreen } from "components/Core"
import CollapseWithDetail from "components/Core/Collapse/WithDetail"
import DetailHistoryStatus from "components/DetailHistoryStatus"
import useGetSg from "hooks/useGetSg"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

const DetailScreen = () => {
  const { sg_id } = useParams()
  const { data: sg, get_sg_action } = useGetSg()

  useEffect(() => {
    get_sg_action(sg_id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sg_id])

  return (
    <div className="w-full h-full flex flex-col items-start justify-start">
      <Breadcrumb
        data={[
          { name: "Listado de grupo de envíos", href: "/sgs" },
          { name: "Detalle de grupo de envíos", href: `/sgs/${sg_id}` },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title={`Detalle de grupo de envíos #${sg_id}`} />
        {/* <p>SourceDetailScreen</p> */}
      </div>
      <div className="w-full h-auto py-4 px-6">
        <DetailHistoryStatus statusses={sg?.status} />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-6 py-4 px-6">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <h4 className="font-semibold text-[#4C4C4C]">Información</h4>
            <div className="grid grid-cols-2 grid-rows-4 bg-white rounded-xl border divide-x divide-y">
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Número de grupo de envíos</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{sg_id}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Número de órden</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{sg?.orderId}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Estado del grupo de envíos</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{sg?.currentStatus?.tag}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Canal</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{sg?.channel}</p>
            </div>
          </div>
          <CollapseWithDetail
            title="Source"
            details={{
              id: sg?.source?.id,
            }}
          />
          <CollapseWithDetail
            title="Target"
            details={{
              id: sg?.target?.source?.id || sg?.target?.customer?.id,
            }}
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <h4 className="font-semibold text-[#4C4C4C]">Detalle de grupo de envíos</h4>
            <div className="grid grid-cols-2 grid-rows-4 bg-white rounded-xl border divide-x divide-y">
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Fecha creación órden</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{sg?.orderCreationDate}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Sitio</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{sg?.site}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Estado de la órden</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{sg?.currentStatus?.tag}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">ID Canal de venta</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{sg?.salesChannelId}</p>
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
