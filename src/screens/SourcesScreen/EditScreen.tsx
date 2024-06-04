
import { Breadcrumb, TitleScreen } from "components/Core"
import { useParams } from "react-router-dom"

const EditScreen = () => {
  const { source_id } = useParams()

  return (
    <div className="w-full h-full flex flex-col items-start justify-start">
      <Breadcrumb
        data={[
          { name: "Listado de sources", href: "/sources" },
          { name: "Detalle de source", href: `/sources/${source_id}` },
          { name: "Editar source", href: `/sources/${source_id}/edit` },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title={`Editar source #${source_id}`} />
      </div>
    </div>
  )
}

export default EditScreen
