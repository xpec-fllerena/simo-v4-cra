
import { Fragment, useEffect, useState } from "react"
import { Controller } from "react-hook-form"

import useForm from "hooks/useForm"
import useLogin from "hooks/useLogin"
import { TextField, Button } from "components/Core"
import schemaValidationLogin from "utils/yup/login_schema"
import NotificationList from "components/Core/Notifications/NotificationList"
import Spinner from "components/Core/Spinner"
import background_login from "assets/img/background_login.svg"
import logo_xmonitor_login from "assets/img/logo_xmonitor_login.svg"

const LoginScreen = () => {
  const { login_user_action, error_login } = useLogin()
  const { handleSubmit, errors, control, isSubmitting } = useForm({ schema: schemaValidationLogin })
  const [mayus_active, set_mayus_active] = useState<boolean>(false)

  const handleKeyPress = (event: KeyboardEvent) => {
    const isUppercaseLetter = /^[A-Z]$/.test(event.key)
    if (isUppercaseLetter) {
      set_mayus_active(true)
    } else {
      set_mayus_active(false)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress)
    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [])

  const onSubmit = ({ user, password }: any) => {
    login_user_action({ user, password })
  }

  const get_error_message = () => {
    switch (error_login.code) {
      case 401:
        return "Los datos que has ingresado son incorrectos, intentalo de nuevo!"
      case 502:
        return "Se excedió el tiempo de espera"
      default:
        return "Error desconocido"
    }
  }

  console.log("err", errors)

  return (
    <Fragment>
      <NotificationList />
      <Spinner />
      <div className="relative w-screen h-screen grid place-items-center">
        <img
          src={background_login}
          alt="backgroung_login"
          className="absolute w-full h-full object-cover -z-10"
        />
        <div className="relative w-4/5 h-3/4 lg:h-auto md:w-96 lg:min-w-[30rem] flex flex-col items-center justify-center gap-10 px-4 py-8 md:py-12 lg:py-16 bg-[#FFFFFFE6] rounded-xl">
          <img src={logo_xmonitor_login} alt="logo" className="w-3/4 md:w-72 z-10" />
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 p-6 lg:p-10">
            <div className="w-full flex flex-col gap-2">
              <Controller
                name="user"
                control={control}
                w-full
                h-full
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField label="Usuario" onChange={onChange} value={value} />
                )}
              />
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField label="Contraseña" type="password" onChange={onChange} value={value} />
                )}
              />
            </div>
            {mayus_active ? (
              <p className=" text-yellow-600 font- text-xs text-center">Las mayúsculas están activas!</p>
            ) : null}
            {error_login.code > 400 ? (
              <p className="py-1 text-red-600 font- text-xs">Error: {get_error_message()}</p>
            ) : null}
            {Object.keys(errors).length ? (
              <div className="w-full border-2 border-yellow-500 bg-yellow-400 p-2 text-center text-sm rounded-md cursor-crosshair">
                <p>Verifique los campos, por favor!</p>
              </div>
            ) : null}
            <Button
              label={isSubmitting ? "Espere..." : "Ingresar"}
              disabled={Boolean(isSubmitting || Object.keys(errors).length)}
              type="submit"
            />
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default LoginScreen
