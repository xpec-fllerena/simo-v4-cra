import { ReactNode } from "react"
import { Table as Tab } from "flowbite-react"
import cn from "classnames"

interface ITableCell {
  children: ReactNode
  mainCol?: boolean
  className?: string
}

const TableCell = ({ children, mainCol, className }: ITableCell) => {
  return (
    <Tab.Cell
      className={cn(
        "whitespace-nowrap border-l-2 font-medium text-[14px]",
        {
          "bg-[#EFEFEF]": Boolean(mainCol),
        },
        className,
      )}
    >
      {children}
    </Tab.Cell>
  )
}

export default TableCell
