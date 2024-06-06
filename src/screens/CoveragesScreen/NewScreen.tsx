
import {
  AddButton,
  Breadcrumb,
  ButtonGroup,
  FormSection,
  Select,
  Switch,
  TextField,
  TitleScreen,
} from "components/Core"
import useForm from "hooks/useForm"
import { Controller, useFieldArray } from "react-hook-form"
import coverage_values from "utils/forms_default/coverage_values"
import schemaValidationCoverages from "utils/yup/coverages_schema"
import { DAYS_OF_WEEK_NUMBER, SHIPPING_TYPES, UNIT_TIME } from "constants/FORM_CONSTANTS"
import { Coverages } from "components/DinamicFormSections"

const NewScreen = () => {
  const { control, errors } = useForm({
    defaultValues: coverage_values,
    schema: schemaValidationCoverages,
  })
  const working_time_field_form = useFieldArray({ control, name: "workingTime" })
  const cost_field_form = useFieldArray({ control, name: "cost" })

  const add_new_working_time = () =>
    working_time_field_form.append({
      daysOfWeek: [],
      from: "",
      to: "",
    })

  const add_new_cost = () => cost_field_form.append({ key: "", value: 0 })

  return (
    <div className="w-full h-full flex flex-col items-start justify-start pb-10">
      <Breadcrumb
        data={[
          { name: "Listado de coberturas", href: "/coverages" },
          { name: "Creación de cobertura", href: "/coverages/new" },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center pt-4 px-6">
        <TitleScreen title="creación de cobertura" />
      </div>
      <form className="w-full flex flex-col py-2 px-4">
        <div className="w-full flex flex-row items-center justify-end lg:pb-10 py-2">
          <ButtonGroup />
        </div>
        <div className="w-full flex flex-col items-center gap-4">
          <FormSection title="Información general" helperText="Información general" number={1}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="id"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField label="Id Cobertura" onChange={onChange} value={value} />
                  )}
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <Controller
                  name="status"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Switch label="Estado de la cobertura" onChange={onChange} checked={value} />
                  )}
                />
              </div>
            </div>
          </FormSection>
          <FormSection title="Detalle de cobertura" helperText="Detalle de cobertura" number={2}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <Controller
                name="routeId"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField label="Id Ruta" onChange={onChange} value={value} />
                )}
              />
              <Controller
                name="courierId"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField label="Id Courier" onChange={onChange} value={value} />
                )}
              />
            </div>
          </FormSection>
          <FormSection title="Detalles de Entrega y Despacho" helperText="Detalles de Entrega y Despacho" number={3}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="shippingType"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Select label="Tipo de envío" options={SHIPPING_TYPES} onChange={onChange} value={value} multi />
                  )}
                />
                <Controller
                  name="deliveryType"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Select label="Tipo de entrega" options={[]} onChange={onChange} value={value} />
                  )}
                />
              </div>
            </div>
          </FormSection>
          <FormSection title="Entrega y/o recogida" helperText="Entrega y/o recogida" number={4}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <Controller
                name={`deliveryDays`}
                defaultValue={[]}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    label="Días de entrega"
                    options={DAYS_OF_WEEK_NUMBER}
                    onChange={onChange}
                    value={value}
                    multi
                  />
                )}
              />
              <Controller
                name={`pickupDays`}
                defaultValue={[]}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    label="Días de recogida"
                    options={DAYS_OF_WEEK_NUMBER}
                    onChange={onChange}
                    value={value}
                    multi
                  />
                )}
              />
            </div>
          </FormSection>
          <FormSection title="Leadtime" helperText="Leadtime" number={5}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="leadtime.value"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField label="Cantidad de tiempo" onChange={onChange} value={value} />
                  )}
                />
                <Controller
                  name="leadtime.unit"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Select
                      label="Unidad de tiempo"
                      options={UNIT_TIME}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </div>
            </div>
          </FormSection>
          <FormSection
            title="Jornada de operación de cobertura"
            helperText="Jornada de operación de cobertura"
            number={6}
          >
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              {working_time_field_form.fields.map((workingTimeItem, i) => {
                return (
                  <Coverages.WorkingTimeFields
                    key={workingTimeItem.id}
                    index={i}
                    working_time={working_time_field_form}
                    control={control}
                    errors={errors}
                  />
                )
              })}
              <div className="flex flex-row items-center justify-start">
                <AddButton onClick={add_new_working_time} />
              </div>
            </div>
          </FormSection>
          <FormSection title="Costos de cobertura" helperText="Costos de cobertura" number={7}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              {cost_field_form.fields.map((costItem, i) => {
                return (
                  <Coverages.CostsFields
                    key={costItem.id}
                    index={i}
                    cost={cost_field_form}
                    control={control}
                    errors={errors}
                  />
                )
              })}
              <div className="flex flex-row items-center justify-start">
                <AddButton onClick={add_new_cost} />
              </div>
            </div>
          </FormSection>
        </div>
      </form>
    </div>
  )
}

export default NewScreen
