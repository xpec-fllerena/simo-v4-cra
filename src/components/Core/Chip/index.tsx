import { CgClose } from "react-icons/cg"

interface IChip {
  label: string
  onDelete: () => void
}

const Chip = ({ label, onDelete }: IChip) => {
  return (
    <div className="flex flex-row items-center justify-center gap-2 px-4 py-1 rounded-full bg-[#E4E4E4] font-medium text-sm text-[#636363]">
      <p>{label}</p>
      <CgClose className="cursor-pointer font-semibold" onClick={onDelete} />
    </div>
  )
}

export default Chip
