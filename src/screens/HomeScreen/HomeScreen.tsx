
import { Breadcrumb, TitleScreen } from "components/Core"

const HomeScreen = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <Breadcrumb data={[]} />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title="inicio" />
        {/* <p>HomeScreen</p> */}
      </div>
    </div>
  )
}

export default HomeScreen
