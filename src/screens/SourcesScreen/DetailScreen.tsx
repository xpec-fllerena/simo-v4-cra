
import { Breadcrumb, TitleScreen } from "components/Core"
import CollapseWithDetail from "components/Core/Collapse/WithDetail"
import { useParams } from "react-router-dom"

const DetailScreen = () => {
  const { source_id } = useParams()

  return (
    <div className="w-full h-full flex flex-col items-start justify-start">
      <Breadcrumb
        data={[
          { name: "Listado de sources", href: "/sources" },
          { name: "Detalle de source", href: `/sources/${source_id}` },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title={`Detalle de source #${source_id}`} />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-6 py-4 px-6">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <h4 className="font-semibold text-[#4C4C4C]">Información</h4>
            <div className="grid grid-cols-2 grid-rows-3 bg-white rounded-xl border divide-x divide-y">
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Id de source</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{source_id}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Nombre</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{source_id}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Tipo</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Fisico</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Retiro en tienda</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Si</p>
            </div>
          </div>
          <CollapseWithDetail title="Agendamiento" details={{}} />
          <CollapseWithDetail title="Capacidad de volumen" details={{}} />
          <CollapseWithDetail title="Capacidad de despacho" details={{}} />
          <CollapseWithDetail title="Crossdock" details={{}} />
          <CollapseWithDetail title="Jornada de trabajo general del source" details={{}} />
          <CollapseWithDetail title="Jornada de trabajo por tipo de producto" details={{}} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <h4 className="font-semibold text-[#4C4C4C]">Detalle del source</h4>
            <div className="grid grid-cols-2 grid-rows-4 bg-white rounded-xl border divide-x divide-y">
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Alias</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{source_id}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Estado del source</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Activo</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Stock de seguridad</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">0</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Ranking</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">2</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Sitio</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Test</p>
            </div>
          </div>
          <CollapseWithDetail title="Configuración del calendario" details={{}} />
        </div>
      </div>
    </div>
  )
}

export default DetailScreen
