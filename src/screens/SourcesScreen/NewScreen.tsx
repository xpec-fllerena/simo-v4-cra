
import {
  Breadcrumb,
  FormSection,
  TitleScreen,
  TextField,
  ButtonGroup,
  Select,
  AddButton,
  Switch,
} from "components/Core"
import { Controller, useFieldArray } from "react-hook-form"
import schemaValidationSources from "utils/yup/sources_schema"
import useForm from "hooks/useForm"
import { Sources } from "components/DinamicFormSections"
import { DAYS_OF_WEEK_NUMBER, UNIT_TIME, SHIPPING_TYPES } from "constants/FORM_CONSTANTS"
import source_values from "utils/forms_default/source_values"
import CalendarSettingsDatesComponent from "components/CalendarSettingsDatesComponent"
import time_zone from "helpers/time_zone_helper"

const NewScreen = () => {
  const { control, errors, handleSubmit, setValue } = useForm({
    defaultValues: source_values,
    schema: schemaValidationSources,
  })

  const location_field_form = useFieldArray({ control, name: "location" })
  const custom_field_form = useFieldArray({ control, name: "custom" })
  const volume_capacity_field_form = useFieldArray({ control, name: "volumeCapacity" })
  const dispatch_capacity_field_form = useFieldArray({ control, name: "dispatchCapacity" })
  const schedule_field_form = useFieldArray({ control, name: "schedule" })
  const crossdock_field_form = useFieldArray({ control, name: "crossdock" })
  const working_sessions_field_form = useFieldArray({ control, name: "workingSessions" })
  const working_time_field_form = useFieldArray({ control, name: "workingTime" })

  const on_submit = (data: any) => {
    console.log("data", data)
  }
  console.log("errors", errors)

  const add_new_location = () => location_field_form.append({ type: "string", key: "", value: "" })
  const add_new_custom = () => custom_field_form.append({ type: "string", key: "", value: "" })
  const add_new_volume_capacity = () =>
    volume_capacity_field_form.append({ daysOfWeek: [], capacity: "", overCapacity: "" })
  const add_new_dispatch_capacity = () =>
    dispatch_capacity_field_form.append({
      daysOfWeek: [],
      deliveryType: "",
      productType: "",
      dispatch: "",
      overCapacity: "",
    })
  const add_new_schedule = () =>
    schedule_field_form.append({
      deliveryType: "",
      shippingType: [],
      productType: "",
      leadtime: {
        value: "",
        unit: "",
      },
      slots: [{ from: "", to: "", label: "" }],
    })
  const add_new_crossdock = () =>
    crossdock_field_form.append({
      productType: "",
      value: "",
      unitValue: "",
    })
  const add_new_working_sessions = () =>
    working_sessions_field_form.append({
      daysOfWeek: [],
      productType: "",
      capacity: "",
      from: "",
      to: "",
      lockTime: { from: "", to: "" },
    })
  const add_new_working_time = () =>
    working_time_field_form.append({
      daysOfWeek: [],
      from: "",
      to: "",
    })

  return (
    <div className="w-full h-full flex flex-col items-start justify-start pb-10">
      <Breadcrumb
        data={[
          { name: "Listado de sources", href: "/sources" },
          { name: "Creación de sources", href: "/sources/new" },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center pt-4 px-6">
        <TitleScreen title="creación de sources" />
      </div>
      <form onSubmit={handleSubmit(on_submit)} className="w-full flex flex-col py-2 px-4">
        <div className="w-full flex flex-row items-center justify-end lg:pb-10 py-2">
          <ButtonGroup />
        </div>
        <div className="w-full flex flex-col items-center gap-4">
          <FormSection title="Información general" helperText="Información general" number={1} classNameContent="p-4">
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <Controller
                name="id"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => <TextField label="Id" onChange={onChange} value={value} />}
              />
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField label="Nombre del source" onChange={onChange} value={value} />
                  )}
                />
                <Controller
                  name="alias"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField label="Alias (opcional)" onChange={onChange} value={value} />
                  )}
                />
              </div>
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="type"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Select
                      label="Tipo"
                      options={[
                        { id: 1, label: "Virtual", value: "virtual" },
                        { id: 2, label: "Fisico", value: "physical" },
                      ]}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
                <Controller
                  name="physicalLink"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField label="Enlace físico" onChange={onChange} value={value} />
                  )}
                />
              </div>
            </div>
          </FormSection>
          <FormSection title="Ubicación" helperText="Ubicación" number={2}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              {location_field_form.fields.map((locationItem, i) => {
                return (
                  <Sources.LocationFields
                    key={locationItem.id}
                    index={i}
                    location={location_field_form}
                    control={control}
                    errors={errors}
                  />
                )
              })}
              <div className="flex flex-row items-center justify-start">
                <AddButton onClick={add_new_location} />
              </div>
            </div>
          </FormSection>
          <FormSection title="Stock" helperText="Stock" number={3}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="safety"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField label="Asignar stock de seguridad" onChange={onChange} value={value} />
                  )}
                />
                <Controller
                  name="ranking"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField label="Ranking" onChange={onChange} value={value} />
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
                    <Switch label="Estado del source" onChange={onChange} checked={value} />
                  )}
                />
              </div>
            </div>
          </FormSection>
          <FormSection title="Contacto" helperText="Contacto" number={4}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="contact.name"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField label="Nombre" onChange={onChange} value={value} />
                  )}
                />
                <Controller
                  name="contact.phone"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField label="Número de contacto" onChange={onChange} value={value} />
                  )}
                />
              </div>
            </div>
          </FormSection>
          <FormSection title="Custom" helperText="Custom" number={5}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              {custom_field_form.fields.map((customItem, i) => {
                return (
                  <Sources.CustomFields
                    key={customItem.id}
                    index={i}
                    custom={custom_field_form}
                    control={control}
                    errors={errors}
                  />
                )
              })}
              <div className="flex flex-row items-center justify-start">
                <AddButton onClick={add_new_custom} />
              </div>
            </div>
          </FormSection>
          <FormSection title="Capacidad de volumen" helperText="Capacidad de volumen" number={6}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              {volume_capacity_field_form.fields.map((volumeCapacityItem, i) => {
                return (
                  <Sources.VolumeCapacityFields
                    key={volumeCapacityItem.id}
                    index={i}
                    volume_capacity={volume_capacity_field_form}
                    control={control}
                    errors={errors}
                  />
                )
              })}
              <div className="flex flex-row items-center justify-start">
                <AddButton onClick={add_new_volume_capacity} />
              </div>
            </div>
          </FormSection>
          <FormSection title="Capacidad de despacho" helperText="Capacidad de despacho" number={7}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              {dispatch_capacity_field_form.fields.map((dispatchCapacityItem, i) => {
                return (
                  <Sources.DispatchCapacityFields
                    key={dispatchCapacityItem.id}
                    index={i}
                    dispatch_capacity={dispatch_capacity_field_form}
                    control={control}
                    errors={errors}
                  />
                )
              })}
              <div className="flex flex-row items-center justify-start">
                <AddButton onClick={add_new_dispatch_capacity} />
              </div>
            </div>
          </FormSection>
          <FormSection title="Agendamiento" helperText="Agendamiento" number={8}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              {schedule_field_form.fields.map((scheduleItem, i) => {
                return (
                  <Sources.ScheduleFields
                    key={scheduleItem.id}
                    index={i}
                    schedule={schedule_field_form}
                    control={control}
                    errors={errors}
                  />
                )
              })}
              <div className="flex flex-row items-center justify-start">
                <AddButton onClick={add_new_schedule} />
              </div>
            </div>
          </FormSection>
          <FormSection title="Crossdock" helperText="Crossdock" number={9}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              {crossdock_field_form.fields.map((crossdockItem, i) => {
                return (
                  <Sources.CrossdockFields
                    key={crossdockItem.id}
                    index={i}
                    crossdock={crossdock_field_form}
                    control={control}
                    errors={errors}
                  />
                )
              })}
              <div className="flex flex-row items-center justify-start">
                <AddButton onClick={add_new_crossdock} />
              </div>
            </div>
          </FormSection>
          <FormSection
            title="Jornada de trabajo por tipo de producto"
            helperText="Jornada de trabajo por tipo de producto"
            number={10}
          >
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              {working_sessions_field_form.fields.map((workingSessionItem, i) => {
                return (
                  <Sources.WorkingSessionsFields
                    key={workingSessionItem.id}
                    index={i}
                    working_session={working_sessions_field_form}
                    control={control}
                    errors={errors}
                  />
                )
              })}
              <div className="flex flex-row items-center justify-start">
                <AddButton onClick={add_new_working_sessions} />
              </div>
            </div>
          </FormSection>
          <FormSection
            title="Jornada de trabajo general del source"
            helperText="Jornada de trabajo general del source"
            number={11}
          >
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              {working_time_field_form.fields.map((workingTimeItem, i) => {
                return (
                  <Sources.WorkingTimeFields
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
          <FormSection title="Configuración del calendario" helperText="Configuración del calendario" number={12}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <Controller
                name={`calendarSettings.timezone`}
                defaultValue=""
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    label="Zona horaria"
                    options={time_zone.map((element, i) => ({ id: i, label: element, value: element }))}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              <Controller
                name={`calendarSettings.nonWorkingDays`}
                defaultValue={[]}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    label="Días no laborales a la semana"
                    options={DAYS_OF_WEEK_NUMBER}
                    onChange={onChange}
                    value={value}
                    multi
                  />
                )}
              />
              <Controller
                name={`calendarSettings.nonWorkingDates`}
                defaultValue={[]}
                control={control}
                render={() => (
                  <CalendarSettingsDatesComponent name={`calendarSettings.nonWorkingDates`} setValue={setValue} />
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
