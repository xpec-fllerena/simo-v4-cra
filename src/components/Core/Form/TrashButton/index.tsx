
import { FaRegTrashAlt } from "react-icons/fa"
import { Tooltip } from "components/Core"

interface ITrashButton {
  onClick: () => void
}

const TrashButton = ({ onClick }: ITrashButton) => {
  return (
    <Tooltip content="Eliminar">
      <button
        type="button"
        onClick={onClick}
        className="bg-[#FF1F620D] hover:opacity-70 border border-transparent hover:border-[#FF0F00] px-4 py-2 rounded-lg cursor-pointer"
      >
        <FaRegTrashAlt className="text-xl font-semibold text-[#FF0F00]" />
      </button>
    </Tooltip>
  )
}

export default TrashButton
