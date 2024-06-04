
import { Breadcrumb, TitleScreen, Paginator, Table } from "components/Core"
import ButtonListNavigation from "components/ButtonListNavigation"
import SearchBarFilter from "components/SearchBarFilter"
import { get_data_table_sgs } from "helpers/data_tables"
import usePaginationTable from "hooks/usePaginationTable"
import useSearchOSRM from "hooks/useSearchOSRM"
import { useEffect } from "react"

const ListScreen = () => {
  const { loading_app, data, search_osrm_action } = useSearchOSRM({ entity: "shipping_groups" })
  const { current_data, current_page, handle_page_change, handle_per_page, per_page, total_records, total_pages } =
    usePaginationTable({
      data,
    })

  useEffect(() => {
    search_osrm_action({ from: per_page * current_page, size: per_page })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current_page, per_page])

  const data_table_sgs = get_data_table_sgs(current_data)

  return (
    <div className="w-full h-full flex flex-col items-center justify-start pb-8">
      <Breadcrumb data={[{ name: "Listado de grupo de envíos", href: "/sgs" }]} />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title="listado de grupo de envíos" />
        {/* <p>SourceListScreen</p> */}
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col lg:flex-row justify-between items-end lg:items-center gap-4 px-6">
          <SearchBarFilter />
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
                <Table.HeadCell>id</Table.HeadCell>
                <Table.HeadCell>channel</Table.HeadCell>
                <Table.HeadCell>orderId</Table.HeadCell>
                <Table.HeadCell>currentStatus</Table.HeadCell>
                <Table.HeadCell>shippingType</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                {!loading_app && data_table_sgs?.length ? (
                  data_table_sgs.map((sg: any, i: number) => (
                    <Table.Row key={i}>
                      <Table.Cell mainCol>
                        <a href={`/sgs/${sg?.id}`} className="text-[#F9004D] underline">
                          {sg?.id}
                        </a>
                      </Table.Cell>

                      <Table.Cell>{sg?.channel}</Table.Cell>
                      <Table.Cell>{sg?.orderId}</Table.Cell>
                      <Table.Cell>{sg?.currentStatus}</Table.Cell>
                      <Table.Cell>{sg?.shippingType}</Table.Cell>
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
