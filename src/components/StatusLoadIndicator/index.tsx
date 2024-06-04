import { FaCircleCheck } from "react-icons/fa6"
import { PiWarningCircleFill } from "react-icons/pi"
import { BsFillQuestionCircleFill } from "react-icons/bs"

interface IStatusLoadIndicator {
  on_success: string
  on_error: string
  on_load: string
}

const StatusLoadIndicator = ({ on_error, on_load, on_success }: IStatusLoadIndicator) => {
  return (
    <div className="w-auto flex flex-col lg:flex-row items-center justify-center gap-4">
      <div className="flex flex-row items-center justify-center gap-2">
        <FaCircleCheck className="text-green-600" />
        <p className="text-[#4C4C4C] text-sm">{on_success}</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <PiWarningCircleFill className="text-xl text-red-600" />
        <p className="text-[#4C4C4C] text-sm">{on_error}</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <BsFillQuestionCircleFill className="text-yellow-400" />
        <p className="text-[#4C4C4C] text-sm">{on_load}</p>
      </div>
    </div>
  )
}

export default StatusLoadIndicator
