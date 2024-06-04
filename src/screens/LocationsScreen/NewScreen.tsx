
import { AddButton, Breadcrumb, ButtonGroup, FormSection, TextField, TitleScreen } from "components/Core"
import useForm from "hooks/useForm"
import location_values from "utils/forms_default/location_values"
import schemaValidationLocations from "utils/yup/locations_schema"
import { Controller, useFieldArray } from "react-hook-form"
import { Locations } from "components/DinamicFormSections"

const NewScreen = () => {
  const { control, errors, handleSubmit, setValue, watch } = useForm({
    defaultValues: location_values,
    schema: schemaValidationLocations,
  })
  const criterias_field_form = useFieldArray({ control, name: "criterias" })

  const add_new_criteria = () =>
    criterias_field_form.append({
      type: "",
      value: "",
    })

  return (
    <div className="w-full h-full flex flex-col items-start justify-start pb-10">
      <Breadcrumb
        data={[
          { name: "Listado de ubicaciones", href: "/locations" },
          { name: "Creación de ubicación", href: "/locations/new" },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center pt-4 px-6">
        <TitleScreen title="creación de ubicación" />
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
                  <TextField label="Id Ubicación" onChange={onChange} value={value} />
                )}
              />
              <Controller
                name="criteria0"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField label="criteria0" onChange={onChange} value={value} />
                )}
              />
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <Controller
                  name="criteria1"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField label="criteria1" onChange={onChange} value={value} />
                  )}
                />
                <Controller
                  name="criteria2"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField label="criteria2" onChange={onChange} value={value} />
                  )}
                />
              </div>
            </div>
          </FormSection>
          <FormSection title="Criterias adicionales" helperText="Criterias adicionales" number={2}>
            <div className="w-full flex flex-col gap-4 lg:px-16 lg:py-10">
              {criterias_field_form.fields.map((criteriaItem, i) => {
                return (
                  <Locations.CriteriasFields
                    key={criteriaItem.id}
                    index={i}
                    criterias={criterias_field_form}
                    control={control}
                    errors={errors}
                    watch={watch}
                  />
                )
              })}
              <div className="flex flex-row items-center justify-start">
                {criterias_field_form.fields.length >= 2 ? null : <AddButton onClick={add_new_criteria} />}
              </div>
            </div>
          </FormSection>
        </div>
      </form>
    </div>
  )
}

export default NewScreen
