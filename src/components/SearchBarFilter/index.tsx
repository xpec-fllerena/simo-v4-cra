import { useCallback, useContext } from "react"
import { Button } from "components/Core"
import { AppContext } from "store/context/AppContext"
import { IoIosSearch } from "react-icons/io"
import { MdFilterList } from "react-icons/md"

const SearchBarFilter = () => {
  const { open_table_filters, set_open_table_filters } = useContext(AppContext)

  const handle_filters = useCallback(
    () => set_open_table_filters(!open_table_filters),
    [open_table_filters, set_open_table_filters],
  )

  return (
    <div className="w-full flex flex-col lg:flex-row gap-4">
      <div className="w-full h-10">
        <div className="relative w-full h-full border border-[#ACA7A7] rounded-2xl outline-none">
          <IoIosSearch className="absolute text-xl text-[#ACA7A7] top-2 left-3" />
          <input
            type="text"
            className="w-full h-full outline-none border-none rounded-2xl pl-10 shadow-md focus-visible:border-none"
            placeholder="Buscar"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-end gap-2">
        <Button label="Buscar" className="!bg-slate-600 !text-white !font-semibold !order-2 !lg:order-1" />
        <button
          onClick={handle_filters}
          className="flex flex-row order-1 lg:order-2 items-center justify-center p-2 gap-1 font-semibold text-[#4C4C4C] border border-transparent transform transition duration-500 hover:scale-105"
        >
          <MdFilterList className="text-2xl" />
          <p>Filtrar</p>
        </button>
      </div>
    </div>
  )
}

export default SearchBarFilter
