
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
import schemaValidationSchedule from "utils/yup/schedule_schema"
import { Controller, useFieldArray } from "react-hook-form"
import schedule_values from "utils/forms_default/schedule_values"
import { HOURS_OF_DAY, SHIPPING_TYPES, UNIT_TIME } from "constants/FORM_CONSTANTS"
import { Schedule } from "components/DinamicFormSections"

const NewScreen = () => {
  const { control, errors } = useForm({
    defaultValues: schedule_values,
    schema: schemaValidationSchedule,
  })
  const slots_field_form = useFieldArray({ control, name: "slots" })
  const rules_field_form = useFieldArray({ control, name: "rules" })
  const working_sessions_field_form = useFieldArray({ control, name: "sourceDefaultSettings.workingSessions" })

  const add_new_slot = () => slots_field_form.append({ from: "", to: "", label: "" })
  const add_new_rule = () =>
    rules_field_form.append({
      receptionTime: {
        daysOfWeek: [],
        from: "",
        to: "",
      },
      deliveryTime: {
        offset: {
          value: "",
          unit: "",
        },
        fixedHour: "",
        label: "",
      },
    })
  const add_new_working_session = () =>
    working_sessions_field_form.append({
      productType: "",
      from: "",
      to: "",
      enable_locktime: false,
      lockTime: {
        from: "",
        to: "",
      },
    })

  return (
    <div className="w-full h-full flex flex-col items-start justify-start pb-10">
      <Breadcrumb
        data={[
          { name: "Listado de agendamiento", href: "/schedule" },
          { name: "Creación de agendamiento", href: "/schedule/new" },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center pt-4 px-6">
        <TitleScreen title="creación de agendamiento" />
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
                  <TextField label="Id Agendamiento" onChange={onChange} value={value} />
                )}
              />
              <Controller
                name="deliveryType"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField label="Tipo de entrega" onChange={onChange} value={value} />
                )}
              />
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="shippingType"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Select label="Tipo de envío" options={SHIPPING_TYPES} onChange={onChange} value={value} />
                  )}
                />
                <Controller
                  name="datesToReturn"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField type="number" label="Cantidad de fechas a entregar" onChange={onChange} value={value} />
                  )}
                />
              </div>
            </div>
          </FormSection>
          <FormSection title="Habilitar agendamiento" helperText="Habilitar agendamiento" number={2}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="status"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Switch label="Estado del agendamiento" onChange={onChange} checked={value} />
                  )}
                />
                <Controller
                  name="permit_enable_time"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Switch label="Habilitar por rango de horario" onChange={onChange} checked={value} />
                  )}
                />
              </div>
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name={`enableTime.from`}
                  defaultValue=""
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select label="Inicio" options={HOURS_OF_DAY} onChange={onChange} value={value} />
                  )}
                />
                <Controller
                  name={`enableTime.to`}
                  defaultValue=""
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select label="Fín" options={HOURS_OF_DAY} onChange={onChange} value={value} />
                  )}
                />
              </div>
            </div>
          </FormSection>
          <FormSection title="Tipo de estimación" helperText="Tipo de estimación" number={3}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <Controller
                name="type"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <Select label="Tipo" options={[]} onChange={onChange} value={value} />
                )}
              />
              <div className="w-full flex flex-col gap-4">
                {rules_field_form.fields.map((ruleItem, i) => {
                  return (
                    <Schedule.RulesFields
                      key={ruleItem.id}
                      index={i}
                      rule={rules_field_form}
                      control={control}
                      errors={errors}
                    />
                  )
                })}
                <div className="flex flex-row items-center justify-start">
                  <AddButton onClick={add_new_rule} />
                </div>
              </div>
            </div>
          </FormSection>
          <FormSection title="Slots" helperText="Slots" number={4}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              {slots_field_form.fields.map((slotItem, i) => {
                return (
                  <Schedule.SlotsFields
                    key={slotItem.id}
                    index={i}
                    slot={slots_field_form}
                    control={control}
                    errors={errors}
                  />
                )
              })}
              <div className="flex flex-row items-center justify-start">
                <AddButton onClick={add_new_slot} />
              </div>
            </div>
          </FormSection>
          <FormSection
            title="Configuración por defecto sources"
            helperText="Configuración por defecto sources"
            number={5}
          >
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <div className="w-full flex flex-row items-center justify-start px-2">
                <h4 className="">Offset </h4>
              </div>
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="sourceDefaultSettings.leadtime.value"
                  defaultValue={""}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField label="Cantidad de tiempo" type="number" onChange={onChange} value={value} />
                  )}
                />
                <Controller
                  name="sourceDefaultSettings.leadtime.unit"
                  defaultValue={""}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select label="Unidad de tiempo" options={UNIT_TIME} onChange={onChange} value={value} />
                  )}
                />
              </div>
              <div className="w-full flex flex-row items-center justify-start px-2">
                <h4 className="">Crossdock </h4>
              </div>
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="sourceDefaultSettings.crossdock.value"
                  defaultValue={""}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField label="Cantidad de tiempo" type="number" onChange={onChange} value={value} />
                  )}
                />
                <Controller
                  name="sourceDefaultSettings.crossdock.unit"
                  defaultValue={""}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select label="Unidad de tiempo" options={UNIT_TIME} onChange={onChange} value={value} />
                  )}
                />
              </div>
              <div className="w-full flex flex-row items-center justify-start px-2">
                <h4 className="">Jornada de trabajo general del source </h4>
              </div>
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name={`sourceDefaultSettings.workingTime.from`}
                  defaultValue=""
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select label="Inicio" options={HOURS_OF_DAY} onChange={onChange} value={value} />
                  )}
                />
                <Controller
                  name={`sourceDefaultSettings.workingTime.to`}
                  defaultValue=""
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select label="Fín" options={HOURS_OF_DAY} onChange={onChange} value={value} />
                  )}
                />
              </div>
            </div>
          </FormSection>
          <FormSection
            title="Jornada de trabajo por tipo de producto del source"
            helperText="Jornada de trabajo por tipo de producto del source"
            number={6}
          >
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <div className="w-full flex flex-col gap-4">
                {working_sessions_field_form.fields.map((working_sessionItem, i) => {
                  return (
                    <Schedule.WorkingSessionsFields
                      key={working_sessionItem.id}
                      index={i}
                      working_session={working_sessions_field_form}
                      control={control}
                      errors={errors}
                    />
                  )
                })}
                <div className="flex flex-row items-center justify-start">
                  <AddButton onClick={add_new_working_session} />
                </div>
              </div>
            </div>
          </FormSection>
          <FormSection
            title="Configuración por defecto del producto"
            helperText="Configuración por defecto del producto"
            number={7}
          >
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <div className="w-full flex flex-row items-center justify-start px-2">
                <h4 className="">Leadtime </h4>
              </div>
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="productDefaultSettings.leadtime.value"
                  defaultValue={""}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField label="Cantidad de tiempo" type="number" onChange={onChange} value={value} />
                  )}
                />
                <Controller
                  name="productDefaultSettings.leadtime.unit"
                  defaultValue={""}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select label="Unidad de tiempo" options={UNIT_TIME} onChange={onChange} value={value} />
                  )}
                />
              </div>
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="productDefaultSettings.volume"
                  defaultValue={""}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField label="Volumen" onChange={onChange} value={value} />
                  )}
                />
                <Controller
                  name="productDefaultSettings.cost"
                  defaultValue={""}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField label="Costo" onChange={onChange} value={value} />
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
