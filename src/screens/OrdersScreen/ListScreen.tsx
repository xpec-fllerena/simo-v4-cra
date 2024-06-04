
import { Breadcrumb, TitleScreen, Paginator, Table, Tooltip } from "components/Core"
import ButtonListNavigation from "components/ButtonListNavigation"
import SearchBarFilter from "components/SearchBarFilter"
import { get_data_table_orders } from "helpers/data_tables"
import useFiltersTable from "hooks/useFiltersTable"
import usePaginationTable from "hooks/usePaginationTable"
import useSearchOSRM from "hooks/useSearchOSRM"
import { AppContext } from "store/context/AppContext"
import { useContext, useEffect } from "react"
import { LuPencil } from "react-icons/lu"

const ListScreen = () => {
  const { loading_app, data, search_osrm_action } = useSearchOSRM({ entity: "orders" })
  const { current_data, current_page, handle_page_change, handle_per_page, per_page, total_records, total_pages } =
    usePaginationTable({
      data,
    })
  const { filters_table } = useContext(AppContext)

  useEffect(() => {
    search_osrm_action({ from: per_page * current_page, size: per_page, filters: filters_table })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current_page, per_page, filters_table])

  const data_table_orders = get_data_table_orders(current_data)

  return (
    <div className="w-full h-full flex flex-col items-center justify-start pb-8">
      <Breadcrumb data={[{ name: "Listado de órdenes", href: "/orders" }]} />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title="listado de órdenes" />
        {/* <p>SourceListScreen</p> */}
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col lg:flex-row justify-between items-end lg:items-center gap-4 px-6">
          <SearchBarFilter />
          <ButtonListNavigation label="Crear Órden" route="/orders/new" />
        </div>
        <div className="w-full flex flex-col gap-2 px-6">
          <Paginator
            current_page={current_page}
            handle_page_change={handle_page_change}
            per_page={per_page}
            total_records={total_records}
            total_pages={total_pages}
            handle_per_page={handle_per_page}
          />
          <div className="w-full overflow-x-auto">
            <Table>
              <Table.Head>
                <Table.HeadCell className="!w-5">
                  <></>
                </Table.HeadCell>
                <Table.HeadCell>id</Table.HeadCell>
                <Table.HeadCell>channel</Table.HeadCell>
                <Table.HeadCell>currentStatus</Table.HeadCell>
                <Table.HeadCell>shippingType</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                {!loading_app && data_table_orders?.length ? (
                  data_table_orders.map((order: any, i: number) => (
                    <Table.Row key={i}>
                      <Table.Cell className="flex flex-row items-center justify-end gap-2">
                        <Tooltip content="Editar" align="top">
                          <a href={`/order/${order?.id}/edit`}>
                            <LuPencil className="pencil_edit opacity-0 text-lg cursor-pointer" />
                          </a>
                        </Tooltip>
                      </Table.Cell>
                      <Table.Cell mainCol>
                        <a href={`/orders/${order?.id}`} className="text-[#F9004D] underline">
                          {order?.id}
                        </a>
                      </Table.Cell>
                      <Table.Cell>{order?.channel}</Table.Cell>
                      <Table.Cell>{order?.currentStatus}</Table.Cell>
                      <Table.Cell>{order?.shippingType}</Table.Cell>
                    </Table.Row>
                  ))
                ) : (
                  <Table.Row>
                    <Table.Cell>{loading_app ? "Espere..." : "Sin resultados"}</Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListScreen
