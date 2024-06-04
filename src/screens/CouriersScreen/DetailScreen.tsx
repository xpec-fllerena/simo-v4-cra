
import { Breadcrumb, TitleScreen } from "components/Core"
import CollapseWithDetail from "components/Core/Collapse/WithDetail"
import { useParams } from "react-router-dom"

const DetailScreen = () => {
  const { courier_id } = useParams()

  return (
    <div className="w-full h-full flex flex-col items-start justify-start">
      <Breadcrumb
        data={[
          { name: "Listado de couriers", href: "/couriers" },
          { name: "Detalle de courier", href: `/couriers/${courier_id}` },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title={`Detalle de courier #${courier_id}`} />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-6 py-4 px-6">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <h4 className="font-semibold text-[#4C4C4C]">Información</h4>
            <div className="grid grid-cols-2 grid-rows-2 bg-white rounded-xl border divide-x divide-y">
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Id de courier</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{courier_id}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Nombre</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{courier_id}</p>
            </div>
          </div>
          <CollapseWithDetail title="Capacidad de volumen" details={{}} />
          <CollapseWithDetail title="Capacidad de despacho" details={{}} />
          <CollapseWithDetail title="Criterios" details={{}} />
          <CollapseWithDetail title="Crossdock" details={{}} />
          <CollapseWithDetail title="Canales" details={{}} />
          <CollapseWithDetail title="Tipo de producto" details={{}} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <h4 className="font-semibold text-[#4C4C4C]">Detalle del courier</h4>
            <div className="grid grid-cols-2 grid-rows-4 bg-white rounded-xl border divide-x divide-y">
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Alias</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{courier_id}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Estado del courier</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Activo</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Tipo de envío</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">0</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Tipo de entrega</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">2</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Estrategia de costos</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Test</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Estrategia de ubicación</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Test</p>
            </div>
          </div>
          <CollapseWithDetail title="Jornadas laborales" details={{}} />
          <CollapseWithDetail title="Dias no laborables" details={{}} />
        </div>
      </div>
    </div>
  )
}

export default DetailScreen
