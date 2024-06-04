import cn from "classnames"
import { ReactNode } from "react"
import { Table as Tab } from "flowbite-react"

interface ITableHeadCell {
  children: ReactNode
  className?: string
}

const TableHeadCell = ({ children, className }: ITableHeadCell) => {
  return (
    <Tab.HeadCell className={cn("bg-[#EFEFEF] py-3  border-l-2 !text-[16px] capitalize", className)}>
      {children}
    </Tab.HeadCell>
  )
}

export default TableHeadCell
