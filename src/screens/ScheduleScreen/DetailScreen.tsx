
import { Breadcrumb, TitleScreen } from "components/Core"
import CollapseWithDetail from "components/Core/Collapse/WithDetail"
import { useParams } from "react-router-dom"

const DetailScreen = () => {
  const { schedule_id } = useParams()

  return (
    <div className="w-full h-full flex flex-col items-start justify-start">
      <Breadcrumb
        data={[
          { name: "Listado de agendamiento", href: "/schedule" },
          { name: "Detalle de agendamiento", href: `/schedule/${schedule_id}` },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title={`Detalle de agendamiento #${schedule_id}`} />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-6 py-4 px-6">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <h4 className="font-semibold text-[#4C4C4C]">Información</h4>
            <div className="grid grid-cols-2 grid-rows-2 bg-white rounded-xl border divide-x divide-y">
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Id de schedule</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{schedule_id}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Tipo</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Activo</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Tipo de entrega</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">MISMO-DIA</p>
            </div>
          </div>
          <CollapseWithDetail title="Tipos de envío" details={{}} />
          <CollapseWithDetail title="Reglas" details={{}} />
          <CollapseWithDetail title="Slots" details={{}} />
          <CollapseWithDetail title="Configuración por defecto sources" details={{}} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <h4 className="font-semibold text-[#4C4C4C]">Detalle del schedule</h4>
            <div className="grid grid-cols-2 grid-rows-3 bg-white rounded-xl border divide-x divide-y">
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Fechas a entregar</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">1</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Habilitado</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">No</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Horario habilitado</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">00:00 - 18:00</p>
            </div>
          </div>
          <CollapseWithDetail title="Configuración por defecto del producto" details={{}} />
        </div>
      </div>
    </div>
  )
}

export default DetailScreen
