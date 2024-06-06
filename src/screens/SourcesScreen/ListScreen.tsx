
import { Breadcrumb, TitleScreen, Paginator, Table, Checkbox, Tooltip } from "components/Core"
import ButtonListNavigation from "components/ButtonListNavigation"
import SearchBarFilter from "components/SearchBarFilter"
import { get_data_table_sources } from "helpers/data_tables"
import usePaginationTable from "hooks/usePaginationTable"
import useSearchOSRM from "hooks/useSearchOSRM"
import { useEffect } from "react"
import { LuPencil } from "react-icons/lu"

import { Dropdown } from "flowbite-react"

const ListScreen = () => {
  const { loading_app, data, search_osrm_action } = useSearchOSRM({ entity: "sources" })
  const {
    current_data,
    current_page,
    set_current_data,
    handle_page_change,
    handle_per_page,
    per_page,
    total_records,
    total_pages,
  } = usePaginationTable({
    data,
  })

  useEffect(() => {
    search_osrm_action({ from: per_page * current_page, size: per_page })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current_page, per_page])

  const data_table_sources = get_data_table_sources(current_data)
  const any_source_selected = current_data?.find((el: any) => Boolean(el?.source_checked))

  const check_source = (id_source: string) => {
    const source_selected: any = current_data?.find((el: any) => el.id === id_source)
    set_current_data(
      current_data.map((el: any) => {
        if (el?.id === source_selected?.id) {
          return Boolean(source_selected?.source_checked)
            ? { ...el, source_checked: false }
            : { ...el, source_checked: true }
        }
        return el
      }),
    )
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-start pb-8">
      <Breadcrumb data={[{ name: "Listado de sources", href: "/sources" }]} />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title="listado de sources" />
        {/* <p>SourceListScreen</p> */}
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col lg:flex-row justify-between items-end lg:items-center gap-4 px-6">
          <SearchBarFilter />
          {any_source_selected ? (
            <div className="border-[#F9004D] animate-pulse z-10 hover:animate-none">
              <Dropdown label="Acciones" style={{ background: "#F9004D", fontWeight: 600, padding: 0 }}>
                <Dropdown.Item>Habilitar</Dropdown.Item>
                <Dropdown.Item>Deshabilitar</Dropdown.Item>
                <Dropdown.Item>Activar Retiro en tienda</Dropdown.Item>
                <Dropdown.Item>Desactivar Retiro en tienda</Dropdown.Item>
              </Dropdown>
            </div>
          ) : (
            <ButtonListNavigation label="Crear source" route="/sources/new" />
          )}
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
                <Table.HeadCell>name</Table.HeadCell>
                <Table.HeadCell>storePickup</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                {!loading_app && data_table_sources?.length ? (
                  data_table_sources.map((source: any, i: number) => (
                    <Table.Row key={i}>
                      <Table.Cell className="flex flex-row items-center justify-end gap-2">
                        <Tooltip content="Editar" align="top">
                          <a href={`/sources/${source?.id}/edit`}>
                            <LuPencil className="pencil_edit opacity-0 text-lg cursor-pointer" />
                          </a>
                        </Tooltip>
                        <Checkbox
                          name={`option_${i}`}
                          onSelect={() => check_source(source.id)}
                          // checked={source?.source_checked}
                        />
                      </Table.Cell>
                      <Table.Cell mainCol>
                        <a href={`/sources/${source?.id}`} className="text-[#F9004D] underline">
                          {source?.id}
                        </a>
                      </Table.Cell>
                      <Table.Cell>{source?.name}</Table.Cell>
                      <Table.Cell>{source?.storePickup}</Table.Cell>
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
