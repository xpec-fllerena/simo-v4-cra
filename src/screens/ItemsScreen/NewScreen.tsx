
import { Breadcrumb, ButtonGroup, FormSection, Switch, TextField, TitleScreen } from "components/Core"
import useForm from "hooks/useForm"
import route_values from "utils/forms_default/route_values"
import schemaValidationRoutes from "utils/yup/routes_schema"
import { Controller } from "react-hook-form"

const NewScreen = () => {
  const { control } = useForm({
    defaultValues: route_values,
    schema: schemaValidationRoutes,
  })

  return (
    <div className="w-full h-full flex flex-col items-start justify-start">
      <Breadcrumb
        data={[
          { name: "Listado de artículos", href: "/items" },
          { name: "Creación de artículos", href: "/items/new" },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title="creación de artículos" />
        {/* <p>ItemNewScreen</p> */}
      </div>
      <form className="w-full flex flex-col py-2 px-4 lg:px-10">
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
                  <TextField label="Id Artículo" onChange={onChange} value={value} />
                )}
              />
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField label="Nombre" onChange={onChange} value={value} />
                  )}
                />
                <Controller
                  name="sku"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField label="SKU" onChange={onChange} value={value} />
                  )}
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <Controller
                  name="storePickup"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Switch label="Retiro en tienda" onChange={onChange} checked={value} />
                  )}
                />
                <Controller
                  name="enabled"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Switch label="Artículo habilitado" onChange={onChange} checked={value} />
                  )}
                />
              </div>
            </div>
          </FormSection>
          <FormSection title="Detalle de artículo" helperText="Detalle de artículo" number={2}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <Controller
                name="categories"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField label="Categorías" onChange={onChange} value={value} />
                )}
              />
              <Controller
                name="barcodes"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField label="Código de barras" onChange={onChange} value={value} />
                )}
              />
            </div>
          </FormSection>
          <FormSection title="Atributos logísticos" helperText="Atributos logísticos" number={3}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <Controller
                name="logisticAttributes.preparationTime"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField label="Tiempo de preparación" onChange={onChange} value={value} />
                )}
              />
              <Controller
                name="logisticAttributes.size"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField label="Tamaño" onChange={onChange} value={value} />
                )}
              />
              <Controller
                name="logisticAttributes.volume"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField label="Volumen" onChange={onChange} value={value} />
                )}
              />
            </div>
          </FormSection>
          <FormSection title="Tiempo de preparación" helperText="Tiempo de preparación" number={3}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <Controller
                name="preparationTime.default"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField label="Default" onChange={onChange} value={value} />
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
