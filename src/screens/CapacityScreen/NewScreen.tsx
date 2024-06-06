
import { Breadcrumb, ButtonGroup, FormSection, TitleScreen, DatePicker, TextField, Select } from "components/Core"
import useForm from "hooks/useForm"
import { Controller } from "react-hook-form"
import capacity_values from "utils/forms_default/capacity_values"
import schemaValidationCapacity from "utils/yup/capacity_schema"

const NewScreen = () => {
  const { control } = useForm({
    defaultValues: capacity_values,
    schema: schemaValidationCapacity,
  })

  return (
    <div className="w-full h-full flex flex-col items-start justify-start pb-10">
      <Breadcrumb
        data={[
          { name: "Listado de capacidad usada", href: "/capacity" },
          { name: "Creación de capacidad usada", href: "/capacity/new" },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center pt-4 px-6">
        <TitleScreen title="creación de capacidad usada" />
      </div>
      <form className="w-full flex flex-col py-2 px-4">
        <div className="w-full flex flex-row items-center justify-end lg:pb-10 py-2">
          <ButtonGroup />
        </div>
        <div className="w-full flex flex-col items-center gap-4">
          <FormSection title="Rango de fechas de reserva" helperText="Rango de fechas de reserva" number={1}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="dateFrom"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => <DatePicker label="Inicio" />}
                />
                <Controller
                  name="dateTo"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => <DatePicker label="Fin" />}
                />
              </div>
              <Controller
                name="maxCapacity"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField type="number" label="Cantidad a reservar" onChange={onChange} value={value} />
                )}
              />
            </div>
          </FormSection>
          <FormSection title="Detalle de reserva" helperText="Detalle de reserva" number={2}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name={`type`}
                  defaultValue=""
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select label="Tipo de capacidad" options={[]} onChange={onChange} value={value} />
                  )}
                />
                <Controller
                  name={`entityType`}
                  defaultValue=""
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select label="Tipo de entidad" options={[]} onChange={onChange} value={value} />
                  )}
                />
              </div>
            </div>
          </FormSection>
          <FormSection title="Detalle de entidad" helperText="Detalle de entidad" number={3}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <Controller
                name={`entityIds`}
                defaultValue=""
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select label="Id de entidad" options={[]} onChange={onChange} value={value} multi />
                )}
              />
            </div>
          </FormSection>
        </div>
      </form>
    </div>
  )
}

export default NewScreen
