import { ReactNode } from "react"
import { Table as Tab } from "flowbite-react"

interface ITableBody {
  children: ReactNode
}

const TableBody = ({ children }: ITableBody) => {
  return <Tab.Body className="divide-x divide-y border-2">{children}</Tab.Body>
}

export default TableBody
