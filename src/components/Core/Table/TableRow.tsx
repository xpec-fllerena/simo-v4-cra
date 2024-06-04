import { ReactNode } from "react"
import { Table as Tab } from "flowbite-react"

interface ITableRow {
  children: ReactNode
}

const TableRow = ({ children }: ITableRow) => {
  return <Tab.Row className="row_table bg-transparent hover:bg-[#EFEFEF]">{children}</Tab.Row>
}

export default TableRow
