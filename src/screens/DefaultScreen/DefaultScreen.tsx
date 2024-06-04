import background_login from "img/background_login.svg"
import logo_xmonitor_login from "img/logo_xmonitor_login.svg"

const DefaultScreen = () => {
  return (
    <div className="relative w-screen h-screen grid place-items-center">
      <img src={background_login} alt="backgroung_login" className="absolute w-full h-full object-cover -z-10" />
      <div className="w-full h-full md:w-96 md:h-96 flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-xl">
        <img src={logo_xmonitor_login} alt="logo" className="w-3/4" />
      </div>
    </div>
  )
}

export default DefaultScreen
