
import { useContext } from "react"
import { createPortal } from "react-dom"

import { AppContext } from "store/context/AppContext"
import st from "components/Core/Spinner/Spinner.module.css"

const Spinner = () => {
  const { loading_app } = useContext(AppContext)

  const template = (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.65)",
      }}
      className="absolute z-50 w-screen h-screen grid place-items-center top-0 left-0"
    >
      <div className="relative w-28 h-24 bg-white rounded-xl grid place-items-center">
        <div className={st["spinner"]}></div>
      </div>
    </div>
  )

  return loading_app ? createPortal(template, document.body) : null
}

Spinner.displayName = "Spinner"

export default Spinner
