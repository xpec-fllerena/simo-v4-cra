
import { Breadcrumb, TitleScreen } from "components/Core"
import CollapseWithDetail from "components/Core/Collapse/WithDetail"
import { useParams } from "react-router-dom"

const DetailScreen = () => {
  const { coverage_id } = useParams()

  return (
    <div className="w-full h-full flex flex-col items-start justify-start">
      <Breadcrumb
        data={[
          { name: "Listado de coberturas", href: "/coverages" },
          { name: "Detalle de cobertura", href: `/coverages/${coverage_id}` },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title={`Detalle de cobertura #${coverage_id}`} />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-6 py-4 px-6">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <h4 className="font-semibold text-[#4C4C4C]">Información</h4>
            <div className="grid grid-cols-2 grid-rows-2 bg-white rounded-xl border divide-x divide-y">
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Id de cobertura</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{coverage_id}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Id de courier</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">AAAA</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Alias del courier</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">AAA</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Alias de la ruta</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">BBB</p>
            </div>
          </div>
          <CollapseWithDetail title="Origen de la ruta" details={{}} />
          <CollapseWithDetail title="Destino de la ruta" details={{}} />
          <CollapseWithDetail title="Tiempo de trabajo" details={{}} />
          <CollapseWithDetail title="Fechas de entrega" details={{}} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <h4 className="font-semibold text-[#4C4C4C]">Detalle del coverage</h4>
            <div className="grid grid-cols-2 grid-rows-3 bg-white rounded-xl border divide-x divide-y">
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Tipo de envío</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">XX</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Tipo de entrega</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">XX</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Estado</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Activo</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Leadtime</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">5-d</p>
            </div>
          </div>
          <CollapseWithDetail title="Días de recogida" details={{}} />
          <CollapseWithDetail title="Costo de la cobertura" details={{}} />
        </div>
      </div>
    </div>
  )
}

export default DetailScreen
