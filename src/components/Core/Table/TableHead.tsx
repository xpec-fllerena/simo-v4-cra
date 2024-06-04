import { ReactNode } from "react"
import { Table as Tab } from "flowbite-react"

interface ITableHead {
  children: ReactNode
}

const TableHead = ({ children }: ITableHead) => {
  return <Tab.Head className="divide-x divide-y border-2">{children}</Tab.Head>
}

export default TableHead
