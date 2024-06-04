
import cn from "classnames"
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md"

interface IPaginator {
  current_page: any
  handle_page_change: any
  per_page: any
  total_records: any
  total_pages: any
  handle_per_page: any
}

const Paginator = ({
  current_page,
  per_page,
  total_records,
  handle_per_page,
  handle_page_change,
  total_pages,
}: IPaginator) => {
  const is_last_page: boolean = Boolean(current_page + 1 === total_pages)

  const handle_prev_page = () => {
    if (current_page === 0) return null
    handle_page_change(current_page - 1)
  }

  const handle_next_page = () => {
    if (is_last_page) return null
    handle_page_change(current_page + 1)
  }

  // const list_paginations = [
  //   { id: 1, label: "10", value: 10 },
  //   { id: 2, label: "20", value: 20 },
  // ]

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-start gap-4">
      <div className="w-auto flex flex-row items-center justify-start gap-2">
        <p className="text-xs">Filas por pagína: </p>
        {/* <Select label="" options={list_paginations} className="!w-16 !h-8 !border-none" /> */}
        <select
          value={per_page}
          onChange={(e: any) => handle_per_page(Number(e?.target?.value))}
          className="py-1 px-2 pe-4 block w-auto border-gray-200 rounded-lg text-sm focus:border-[#F9004D] focus:ring-[#F9004D] disabled:opacity-50 disabled:pointer-events-none"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </div>
      <div className="w-auto flex flex-row items-center justify-start gap-4">
        <p className="text-xs">
          {current_page * per_page}-{current_page * per_page + per_page} de {total_records}
        </p>
        <div className="flex gap-4">
          <MdOutlineArrowBackIosNew
            onClick={handle_prev_page}
            className={cn("font-bold cursor-pointer", {
              "cursor-not-allowed": Boolean(current_page === 0),
              "text-gray-400": Boolean(current_page === 0),
            })}
          />
          <MdArrowForwardIos
            onClick={handle_next_page}
            className={cn("font-bold cursor-pointer", {
              "cursor-not-allowed": Boolean(is_last_page),
              "text-gray-400": Boolean(is_last_page),
            })}
          />
        </div>
      </div>
    </div>
  )
}

export default Paginator
