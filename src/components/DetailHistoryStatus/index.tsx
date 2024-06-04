
import cn from "classnames"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"
import { FiHexagon } from "react-icons/fi"

const DetailHistoryStatus = ({ statusses }: any) => {
  const Step = ({ status, isLastItem }: any) => (
    <div className="w-52 min-w-fit h-auto flex flex-col items-center gap-2 text-[#F9004D] text-left relative">
      <div
        className={cn(
          "rounded-full transition duration-500 ease-in-out h-8 w-8 py-1 border-2 bg-[#F9004D] border-[#F9004D] z-10",
          {
            "!w-10": Boolean(isLastItem),
            "!h-10": Boolean(isLastItem),
          },
        )}
      >
        <FiHexagon className="w-full h-full text-white text-xl" />
      </div>
      <div className="flex flex-col text-xs font-medium uppercase text-black">
        <p className="font-semibold">{status?.tag}</p>
        <div className="flex flex-col  flex-wrap capitalize text-[#4C4C4C]">
          <p>Fecha: {status?.date}</p>
          <p>Hora</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full h-auto flex flex-row items-center justify-between gap-4">
      {/* <SlArrowLeft className="text-2xl text-gray-500 cursor-pointer" /> */}
      <div className="w-full h-auto flex flex-col gap-4 border rounded-lg p-4 bg-white overflow-x-auto">
        <h4 className="font-medium">Historial de estados:</h4>
        <div className="relative w-full flex flex-row items-center justify-evenly gap-2 py-2 overflow-x-auto">
          {statusses?.map((status: any, i: number, _itms: any) => (
            <Step key={i} status={status} isLastItem={i === statusses?.length - 1} />
          ))}
          <div className="absolute top-6 w-full h-1 border-b-2 border-[#F9004D]"></div>
        </div>
      </div>
      {/* <SlArrowRight className="text-2xl text-gray-500 cursor-pointer" /> */}
    </div>
  )
}

export default DetailHistoryStatus
