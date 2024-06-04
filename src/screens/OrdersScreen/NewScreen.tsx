
import { Breadcrumb, TitleScreen } from "components/Core"

const NewScreen = () => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start">
      <Breadcrumb
        data={[
          { name: "Listado de órdenes", href: "/orders" },
          { name: "Creación de órdenes", href: "/orders/new" },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title="creación de órdenes" />
        {/* <p>SourceNewScreen</p> */}
      </div>
    </div>
  )
}

export default NewScreen
