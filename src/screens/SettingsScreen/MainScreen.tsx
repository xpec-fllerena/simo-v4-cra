
import { Breadcrumb, TitleScreen } from "components/Core"

const MainScreen = () => {
  const CardItem = ({ link, name }: any) => (
    <a
      href={link}
      className="w-full lg:w-48 flex items-center justify-center p-4 text-center border-2 hover:border hover:border-[#F9004D] hover:text-[#F9004D] text-[#4C4C4C] rounded-lg shadow-md hover:shadow-lg cursor-pointer"
    >
      <p className="font-semibold capitalize">{name}</p>
    </a>
  )

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <Breadcrumb data={[{ name: "Configuraciones", href: "/settings" }]} />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title="Configuraciones" />
      </div>
      <div className="w-full flex flex-col justify-center items-start px-6 p-4">
        <div className="w-auto flex flex-col gap-4">
          <h3 className="text-md font-semibold text-[#4C4C4C]">Esquemas de seguridad</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-4">
            <CardItem link="#" name="Roles" />
            <CardItem link="#" name="Permisos" />
            <CardItem link="#" name="Usuarios" />
          </div>
        </div>
        <div className="w-auto flex flex-col gap-4">
          <h3 className="text-md font-semibold text-[#4C4C4C]">Reglas de negocio</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-4">
            <CardItem link="/settings/safety" name="Stock de seguridad" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainScreen
