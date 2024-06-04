
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

// interface IButtonGroup {}

const ButtonGroup = () => {
  const navigate = useNavigate()

  const handle_back = useCallback(() => navigate(-1), [navigate])

  return (
    <div className="flex flex-row gap-2 font-semibold">
      <button
        type="button"
        onClick={handle_back}
        className="w-full lg:w-48 p-2 text-sm text-md border border-[#F9004D] hover:bg-[#F8BBD0] text-[#F9004D] rounded-md shadow-sm hover:shadow-md transform transition duration-500 hover:scale-105"
      >
        Cancelar
      </button>
      <button
        type="submit"
        className="w-full lg:w-48 p-2 text-sm text-md bg-[#F9004D] hover:bg-[#F8BBD0] text-white rounded-md shadow-sm hover:shadow-md transform transition duration-500 hover:scale-105"
      >
        Guardar
      </button>
    </div>
  )
}

export default ButtonGroup
