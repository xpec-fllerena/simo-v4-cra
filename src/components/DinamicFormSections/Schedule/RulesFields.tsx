
import { Select, TextField, TrashButton } from "components/Core"
import { Controller } from "react-hook-form"
import { DAYS_OF_WEEK_NUMBER, HOURS_OF_DAY, UNIT_TIME } from "constants/FORM_CONSTANTS"

interface IRulesFields {
  index: number
  control: any
  rule: any
  errors: any
}

const RulesFields = ({ index, control, rule, errors }: IRulesFields) => {
  const remove_rule = () => rule.remove(index)

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row items-center justify-between p-2">
        <h4 className="">Regla {Number(index + 1)}</h4>
        <TrashButton onClick={remove_rule} />
      </div>
      <div className="w-full border-b border-[#919191]"></div>
      <div className="w-full flex flex-row items-center justify-start px-2">
        <h4 className="">Rango horario de productos para ser recogidos </h4>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <Controller
          name={`rules[${index}].from`}
          defaultValue={rule.fields[index].from}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select label="Inicio" options={HOURS_OF_DAY} onChange={onChange} value={value} />
          )}
        />
        <Controller
          name={`rules[${index}].to`}
          defaultValue={rule.fields[index].to}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select label="Fín" options={HOURS_OF_DAY} onChange={onChange} value={value} />
          )}
        />
      </div>
      <Controller
        name={`rules[${index}].daysOfWeek`}
        defaultValue={rule.fields[index].daysOfWeek}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select label="Dias de la semana" multi options={DAYS_OF_WEEK_NUMBER} onChange={onChange} value={value} />
        )}
      />
      <div className="w-full border-b border-[#919191]"></div>
      <div className="w-full flex flex-row items-center justify-start px-2">
        <h4 className="">Tiempo de entrega </h4>
      </div>
      <div className="w-full flex flex-row items-center justify-start px-2">
        <h4 className="">Offset </h4>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <Controller
          name={`rules[${index}].value`}
          defaultValue={rule.fields[index].value}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField label="Cantidad de tiempo" type="number" onChange={onChange} value={value} />
          )}
        />
        <Controller
          name={`rules[${index}].unit`}
          defaultValue={rule.fields[index].unit}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select label="Unidad de tiempo" options={UNIT_TIME} onChange={onChange} value={value} />
          )}
        />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <Controller
          name={`rules[${index}].to`}
          defaultValue={rule.fields[index].to}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select label="Hora fijada" options={HOURS_OF_DAY} onChange={onChange} value={value} />
          )}
        />
        <Controller
          name={`rules[${index}].value`}
          defaultValue={rule.fields[index].value}
          control={control}
          render={({ field: { onChange, value } }) => <TextField label="Etiqueta" onChange={onChange} value={value} />}
        />
      </div>
    </div>
  )
}

export default RulesFields
