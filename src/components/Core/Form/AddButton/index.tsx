
import { LuPlus } from "react-icons/lu"

interface IAddButton {
  onClick: () => void
}

const AddButton = ({ onClick }: IAddButton) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-row items-center justify-center gap-2 border border-transparent text-[#349CBE] hover:opacity-70 hover:border-[#349CBE] rounded-lg px-4 py-2"
    >
      <LuPlus className="text-xl font-medium" />
      <p className="font-medium">Agregar</p>
    </button>
  )
}

export default AddButton
