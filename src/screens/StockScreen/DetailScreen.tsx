
import { Breadcrumb, TitleScreen } from "components/Core"
import CollapseWithDetail from "components/Core/Collapse/WithDetail"
import { useParams } from "react-router-dom"

const DetailScreen = () => {
  const { stock_id } = useParams()

  return (
    <div className="w-full h-full flex flex-col items-start justify-start">
      <Breadcrumb
        data={[
          { name: "Listado de stock", href: "/stock" },
          { name: "Detalle de stock", href: `/stock/${stock_id}` },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title={`Detalle de stock #${stock_id}`} />
        {/* <p>SourceDetailScreen</p> */}
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-6 py-4 px-6">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <h4 className="font-semibold text-[#4C4C4C]">Información</h4>
            <div className="grid grid-cols-2 grid-rows-2 bg-white rounded-xl border divide-x divide-y">
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Id de stock</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{stock_id}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Nombre de stock</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{stock_id}</p>
            </div>
          </div>
          <CollapseWithDetail title="Sources" details={{}} />
          <CollapseWithDetail title="Stock de seguridad" details={{}} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <h4 className="font-semibold text-[#4C4C4C]">Acciones</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailScreen
