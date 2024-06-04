
import { Breadcrumb, Paginator, Table, TitleScreen } from "components/Core"
import ButtonListNavigation from "components/ButtonListNavigation"
import { get_data_table_capacity } from "helpers/data_tables"
import SearchBarFilter from "components/SearchBarFilter"
import usePaginationTable from "hooks/usePaginationTable"
import { useEffect } from "react"
import useSearchOSRM from "hooks/useSearchOSRM"

const ListScreen = () => {
  const { loading_app, data, search_osrm_action } = useSearchOSRM({ entity: "capacities" })
  const { current_data, current_page, handle_page_change, handle_per_page, per_page, total_records, total_pages } =
    usePaginationTable({
      data,
    })

  useEffect(() => {
    search_osrm_action({ from: per_page * current_page, size: per_page })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current_page, per_page])

  const data_table_capacities = get_data_table_capacity(current_data)

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <Breadcrumb data={[{ name: "Listado de capacidad usada", href: "/capacity" }]} />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title="listado de capacidad usada" />
        {/* <p>RoutesListScreen</p> */}
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col lg:flex-row justify-between items-end lg:items-center gap-4 px-6">
          <SearchBarFilter />
          <ButtonListNavigation label="Crear Capacidad" route="/capacity/new" />
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
                <Table.HeadCell>type</Table.HeadCell>
                <Table.HeadCell>date</Table.HeadCell>
                <Table.HeadCell>Acciones</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                {!loading_app && data_table_capacities?.length ? (
                  data_table_capacities.map((capacity: any, i: number) => (
                    <Table.Row key={i}>
                      <Table.Cell mainCol>{capacity?.id}</Table.Cell>
                      <Table.Cell>{capacity?.type}</Table.Cell>
                      <Table.Cell>{capacity?.date}</Table.Cell>
                      <Table.Cell>
                        <a href="#" className="font-medium text-[#F9004D] hover:underline">
                          Editar
                        </a>
                      </Table.Cell>
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
