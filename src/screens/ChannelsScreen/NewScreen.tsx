
import { Breadcrumb, ButtonGroup, FormSection, Select, TextField, TitleScreen } from "components/Core"
import useForm from "hooks/useForm"
import schemaValidationCouriers from "utils/yup/couriers_schema"
import courier_values from "utils/forms_default/courier_values"
import { Controller } from "react-hook-form"

const NewScreen = () => {
  const { control } = useForm({
    defaultValues: courier_values,
    schema: schemaValidationCouriers,
  })

  return (
    <div className="w-full h-full flex flex-col items-start justify-start">
      <Breadcrumb
        data={[
          { name: "Listado de canales", href: "/channels" },
          { name: "Creación de canales", href: "/channels/new" },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title="creación de canales" />
        {/* <p>ItemNewScreen</p> */}
      </div>
      <form className="w-full flex flex-col py-2 px-4 lg:px-10">
        <div className="w-full flex flex-row items-center justify-end lg:pb-10 py-2">
          <ButtonGroup />
        </div>
        <div className="w-full flex flex-col items-center gap-4">
          <FormSection title="Información general" helperText="Información general" number={1} classNameContent="p-4">
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="id"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField label="Id" onChange={onChange} value={value} />
                  )}
                />
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField label="Nombre del canal" onChange={onChange} value={value} />
                  )}
                />
              </div>
              <Controller
                name="stockId"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <Select label="Stock" options={[]} onChange={onChange} value={value} multi />
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
