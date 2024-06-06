
import { Breadcrumb, ButtonGroup, FormSection, Select, TextField, TitleScreen, Chip } from "components/Core"
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
          { name: "Listado de stock", href: "/stock" },
          { name: "Creación de stock", href: "/stock/new" },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title="creación de stock" />
        {/* <p>StockNewScreen</p> */}
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
                    <TextField label="Nombre del stock" onChange={onChange} value={value} />
                  )}
                />
              </div>
            </div>
          </FormSection>
          <FormSection title="Sources" helperText="Sources" number={2} classNameContent="p-4">
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-8">
              <div className="w-full flex flex-col lg:flex-row flex-wrap gap-2">
                <Chip label="source" onDelete={() => console.log("")} />
              </div>
              <Controller
                name="sources"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <Select label="Sources" options={[]} onChange={onChange} value={value} multi />
                )}
              />
            </div>
          </FormSection>
          <FormSection title="Stock de seguridad" helperText="Stock de seguridad" number={3} classNameContent="p-4">
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="type"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Select label="Tipo" options={[]} onChange={onChange} value={value} multi />
                  )}
                />
                <Controller
                  name="value"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField label="Valor" onChange={onChange} value={value} />
                  )}
                />
              </div>
            </div>
          </FormSection>
        </div>
      </form>
    </div>
  )
}

export default NewScreen
