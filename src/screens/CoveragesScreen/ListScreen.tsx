
import { Breadcrumb, Paginator, Table, TitleScreen, Tooltip } from "components/Core"
import ButtonListNavigation from "components/ButtonListNavigation"
import SearchBarFilter from "components/SearchBarFilter"
import { get_data_table_coverages } from "helpers/data_tables"
import usePaginationTable from "hooks/usePaginationTable"
import useSearchOSRM from "hooks/useSearchOSRM"
import { useEffect } from "react"
import { LuPencil } from "react-icons/lu"

const ListScreen = () => {
  const { loading_app, data, search_osrm_action } = useSearchOSRM({ entity: "coverages" })
  const { current_data, current_page, handle_page_change, handle_per_page, per_page, total_records, total_pages } =
    usePaginationTable({
      data,
    })

  useEffect(() => {
    search_osrm_action({ from: per_page * current_page, size: per_page })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current_page, per_page])

  const data_table_coverages = get_data_table_coverages(current_data)

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <Breadcrumb data={[{ name: "Listado de coberturas", href: "/coverages" }]} />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title="listado de coberturas" />
        {/* <p>CoveragesListScreen</p> */}
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col lg:flex-row justify-between items-end lg:items-center gap-4 px-6">
          <SearchBarFilter />
          <ButtonListNavigation label="Crear Cobertura" route="/coverages/new" />
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
                <Table.HeadCell>courierId</Table.HeadCell>
                <Table.HeadCell>routeId</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                {!loading_app && data_table_coverages?.length ? (
                  data_table_coverages.map((coverage: any, i: number) => (
                    <Table.Row key={i}>
                      <Table.Cell className="flex flex-row items-center justify-end gap-2">
                        <Tooltip content="Editar" align="top">
                          <a href={`/coverages/${coverage?.id}/edit`}>
                            <LuPencil className="pencil_edit opacity-0 text-lg cursor-pointer" />
                          </a>
                        </Tooltip>
                      </Table.Cell>
                      <Table.Cell mainCol>
                        <a href={`/coverages/${coverage?.id}`} className="text-[#F9004D] underline">
                          {coverage?.id}
                        </a>
                      </Table.Cell>
                      <Table.Cell>{coverage?.courierId}</Table.Cell>
                      <Table.Cell>{coverage?.routeId}</Table.Cell>
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
