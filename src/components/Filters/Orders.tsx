
import useFiltersTable from "hooks/useFiltersTable"
import { Button, Collapse, Select, TextField } from "components/Core"
import { useCallback, useState } from "react"

const OrdersFilter = () => {
  const [id, set_id] = useState("")
  const { apply_filter } = useFiltersTable({
    table_name: "orders",
  })

  const handle_change_id = (e: any) => {
    e.preventDefault()
    set_id(e?.target?.value)
  }

  const apply_filter_id = useCallback(() => apply_filter({ id }), [id, apply_filter])

  const handle_change_select = (e: any) => {
    console.log("e", e?.target?.value)
  }

  return (
    <div className="relative w-full flex flex-col">
      <Collapse name="" header={<h1>Id</h1>}>
        <div className="w-full flex flex-row items-center justify-center gap-2">
          <TextField label="Id" onChange={handle_change_id} />
          <Button label="Aplicar" className="w-28 !p-0" onClick={apply_filter_id} />
        </div>
      </Collapse>
      <Collapse name="" header={<h1>Channel</h1>}>
        <div className="w-full flex flex-row items-center justify-center gap-2">
          <Select
            label="Channel"
            onChange={handle_change_select}
            options={[
              { label: "Ecommerce", value: 1, id: 1 },
              { label: "Pos", value: 2, id: 2 },
            ]}
          />
          <Button label="Aplicar" className="w-28 !p-0" />
        </div>
      </Collapse>
    </div>
  )
}

export default OrdersFilter
