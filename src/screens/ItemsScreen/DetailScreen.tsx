
import { Breadcrumb, TitleScreen } from "components/Core"
import CollapseWithDetail from "components/Core/Collapse/WithDetail"
import { useParams } from "react-router-dom"

const DetailScreen = () => {
  const { item_id } = useParams()

  return (
    <div className="w-full h-full flex flex-col items-start justify-start">
      <Breadcrumb
        data={[
          { name: "Listado de artículos", href: "/items" },
          { name: "Detalle de artículo", href: `/items/${item_id}` },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title={`Detalle de artículo #${item_id}`} />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-6 py-4 px-6">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <h4 className="font-semibold text-[#4C4C4C]">Información</h4>
            <div className="grid grid-cols-2 grid-rows-2 bg-white rounded-xl border divide-x divide-y">
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Id de item</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{item_id}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Nombre</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{item_id}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Tipo</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Activo</p>
            </div>
          </div>
          <CollapseWithDetail title="Categorías" details={{}} />
          <CollapseWithDetail title="Stock de seguridad" details={{}} />
          <CollapseWithDetail title="Tiempos de preparación" details={{}} />
          <CollapseWithDetail title="Custom" details={{}} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <h4 className="font-semibold text-[#4C4C4C]">Detalle del item</h4>
            <div className="grid grid-cols-2 grid-rows-4 bg-white rounded-xl border divide-x divide-y">
              <p className="text-sm text-[#4C4C4C] px-4 py-3">SKU</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">{item_id}</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Retiro en tienda</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">No</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Inventario</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">0</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Inventario completo</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">2</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Estado</p>
              <p className="text-sm text-[#4C4C4C] px-4 py-3">Activo</p>
            </div>
          </div>
          <CollapseWithDetail title="Atributos logisticos" details={{}} />
        </div>
      </div>
    </div>
  )
}

export default DetailScreen
