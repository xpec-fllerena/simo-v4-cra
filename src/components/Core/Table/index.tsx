import { ReactNode } from "react"
import TableHead from "components/Core/Table/TableHead"
import TableHeadCell from "components/Core/Table/TableHeadCell"
import TableBody from "components/Core/Table/TableBody"
import TableRow from "components/Core/Table/TableRow"
import TableCell from "components/Core/Table/TableCell"
import { Table as Tab } from "flowbite-react"

interface ITable {
  children: ReactNode
}

const Table = ({ children }: ITable) => {
  return <Tab hoverable>{children}</Tab>
}

Table.Head = TableHead
Table.HeadCell = TableHeadCell
Table.Body = TableBody
Table.Row = TableRow
Table.Cell = TableCell

export default Table
