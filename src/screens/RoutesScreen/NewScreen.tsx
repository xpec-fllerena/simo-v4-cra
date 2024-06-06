
import { Breadcrumb, ButtonGroup, FormSection, Select, Switch, TextField, TitleScreen } from "components/Core"
import useForm from "hooks/useForm"
import route_values from "utils/forms_default/route_values"
import schemaValidationRoutes from "utils/yup/routes_schema"
import { Controller } from "react-hook-form"

const NewScreen = () => {
  const { control } = useForm({
    defaultValues: route_values,
    schema: schemaValidationRoutes,
  })

  const ROUTE_TYPE = [
    { id: 1, label: "Ubicación", value: "location" },
    { id: 2, label: "Source", value: "source" },
  ]

  return (
    <div className="w-full h-full flex flex-col items-start justify-start pb-10">
      <Breadcrumb
        data={[
          { name: "Listado de rutas", href: "/routes" },
          { name: "Creación de ruta", href: "/routes/new" },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center pt-4 px-6">
        <TitleScreen title="creación de ruta" />
      </div>
      <form className="w-full flex flex-col py-2 px-4">
        <div className="w-full flex flex-row items-center justify-end lg:pb-10 py-2">
          <ButtonGroup />
        </div>
        <div className="w-full flex flex-col items-center gap-4">
          <FormSection title="Información general" helperText="Información general" number={1}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <Controller
                name="id"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField label="Id Ruta" onChange={onChange} value={value} />
                )}
              />
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="status"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Switch label="Estado de ruta" onChange={onChange} checked={value} />
                  )}
                />
              </div>
            </div>
          </FormSection>
          <FormSection title="Source" helperText="Source" number={2}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <Controller
                name="type"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <Select label="Tipo" options={ROUTE_TYPE} onChange={onChange} value={value} />
                )}
              />
            </div>
          </FormSection>
          <FormSection title="Target" helperText="Target" number={3}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <Controller
                name="type"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <Select label="Tipo" options={ROUTE_TYPE} onChange={onChange} value={value} />
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
