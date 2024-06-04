
import { Breadcrumb, Paginator, Table, TitleScreen, Select, Button } from "components/Core"
import useSearchOSRM from "hooks/useSearchOSRM"
import { get_data_table_capacity } from "helpers/data_tables"
import usePaginationTable from "hooks/usePaginationTable"
import { Controller } from "react-hook-form"
import schemaValidationBusiness from "utils/yup/business_schema"
import business_schema from "utils/forms_default/business_schema"
import useForm from "hooks/useForm"

import { TiUpload } from "react-icons/ti"
import StatusLoadIndicator from "components/StatusLoadIndicator"
import { FileInput } from "flowbite-react";

const MainScreen = () => {
  const { loading_app, data } = useSearchOSRM({ entity: "capacities" })
  const { current_data, current_page, handle_page_change, handle_per_page, per_page, total_records, total_pages } =
    usePaginationTable({
      data,
    })

  const { control, handleSubmit, register } = useForm({
    defaultValues: business_schema,
    schema: schemaValidationBusiness,
  })
  const data_table_capacities = get_data_table_capacity(current_data)

  const on_submit = (data: any) => {
    console.log("data",data)
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <Breadcrumb data={[{ name: "Carga masiva", href: "/bulk" }]} />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title="Carga masiva" />
      </div>
      <div className="w-full flex flex-col gap-8">
        <form onSubmit={handleSubmit(on_submit)} className="w-full flex flex-col lg:flex-row justify-between items-end lg:items-center gap-4 px-6">
          <div className="w-full xl:w-3/4 flex flex-col md:flex-row items-center justify-start gap-4 lg:gap-8 bg-white rounded-lg shadow-md p-4">
            <h4 className="whitespace-nowrap text-[#4C4C4C] font-medium">Tipo de carga</h4>
            <Controller
              name="type"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <Select label="Tipo" options={[]} onChange={onChange} value={value} className="!w-60" />
              )}
            />
            <FileInput {...register("file")} className="" />
            <Button type="submit" label="Cargar archivo" className="!ml-10 !whitespace-nowrap" icon={TiUpload} />
          </div>
        </form>
        <div className="w-full flex flex-col gap-2 px-6">
          <div className="w-full flex flex-row justify-between items-center px-4 py-2">
            <h4 className="text-lg text-[#4C4C4C] font-medium">Historial de cargas masivas</h4>
            <StatusLoadIndicator on_success="Carga exitosa" on_error="Error" on_load="Procesando" />
          </div>
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
                <Table.HeadCell>Id de carga</Table.HeadCell>
                <Table.HeadCell>Tipo</Table.HeadCell>
                <Table.HeadCell>Detalle de archivo</Table.HeadCell>
                <Table.HeadCell>Estado de la carga</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                {!loading_app && data_table_capacities?.length ? (
                  data_table_capacities.map((capacity: any, i: number) => (
                    <Table.Row key={i}>
                      <Table.Cell mainCol>{capacity?.id}</Table.Cell>
                      <Table.Cell>{capacity?.type}</Table.Cell>
                      <Table.Cell>{capacity?.date}</Table.Cell>
                      <Table.Cell>
                        <p></p>
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

export default MainScreen
