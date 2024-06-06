
import { Breadcrumb, FormSection, TitleScreen, TextField, ButtonGroup, Select, AddButton } from "components/Core"
import useForm from "hooks/useForm"
import schemaValidationCouriers from "utils/yup/couriers_schema"
import courier_values from "utils/forms_default/courier_values"
import { Couriers } from "components/DinamicFormSections"

import { Controller, useFieldArray } from "react-hook-form"
import { DAYS_OF_WEEK_NUMBER, SHIPPING_TYPES } from "constants/FORM_CONSTANTS"
import CalendarSettingsDatesComponent from "components/CalendarSettingsDatesComponent"

const NewScreen = () => {
  const { control, errors, handleSubmit, setValue } = useForm({
    defaultValues: courier_values,
    schema: schemaValidationCouriers,
  })

  const volume_capacity_field_form = useFieldArray({ control, name: "volumeCapacity" })
  const dispatch_capacity_field_form = useFieldArray({ control, name: "dispatchCapacity" })
  const working_time_field_form = useFieldArray({ control, name: "workingTime" })

  const on_submit = (data: any) => {
    console.log("data", data)
  }

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
          { name: "Listado de couriers", href: "/couriers" },
          { name: "Creación de couriers", href: "/couriers/new" },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center pt-4 px-6">
        <TitleScreen title="creación de couriers" />
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
            </div>
          </FormSection>
          <FormSection title="Detalles de Entrega y Despacho" helperText="Detalles de Entrega y Despacho" number={2}>
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
          <FormSection
            title="Estrategias de costo y cobertura"
            helperText="Estrategias de costo y cobertura"
            number={3}
          >
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="costStrategy"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Select
                      label="Estrategia de costo"
                      options={SHIPPING_TYPES}
                      onChange={onChange}
                      value={value}
                      multi
                    />
                  )}
                />
                <Controller
                  name="locationStrategy"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Select label="Estrategia de cobertura" options={[]} onChange={onChange} value={value} />
                  )}
                />
              </div>
            </div>
          </FormSection>
          <FormSection title="Cobertura del courier" helperText="Cobertura del courier" number={4}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="productType"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField label="Tipo de producto" onChange={onChange} value={value} />
                  )}
                />
                <Controller
                  name="status"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Select label="Estado de cobertura" options={[]} onChange={onChange} value={value} />
                  )}
                />
              </div>
              <Controller
                name="channel"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <Select multi label="Canales" options={[]} onChange={onChange} value={value} />
                )}
              />
            </div>
          </FormSection>
          <FormSection title="Segmentación del courier" helperText="Segmentación del courier" number={5}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              <Controller
                name="criterias"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField label="Criterias" onChange={onChange} value={value} />
                )}
              />
            </div>
          </FormSection>
          <FormSection title="Capacidad de despacho" helperText="Capacidad de despacho" number={6}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              {dispatch_capacity_field_form.fields.map((dispatchCapacityItem, i) => {
                return (
                  <Couriers.DispatchCapacityFields
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
          <FormSection title="Capacidad de volumen" helperText="Capacidad de volumen" number={7}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              {volume_capacity_field_form.fields.map((volumeCapacityItem, i) => {
                return (
                  <Couriers.VolumeCapacityFields
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
          <FormSection
            title="Jornada de trabajo general del source"
            helperText="Jornada de trabajo general del source"
            number={8}
          >
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              {working_time_field_form.fields.map((workingTimeItem, i) => {
                return (
                  <Couriers.WorkingTimeFields
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
          <FormSection title="Configuración del calendario" helperText="Configuración del calendario" number={9}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
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
