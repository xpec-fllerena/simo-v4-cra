
import { Select, TrashButton } from "components/Core"
import { Controller } from "react-hook-form"
import { DAYS_OF_WEEK_NUMBER, HOURS_OF_DAY } from "constants/FORM_CONSTANTS"

interface IWorkingTimeFields {
  index: number
  control: any
  working_time: any
  errors: any
}

const WorkingTimeFields = ({ index, control, working_time, errors }: IWorkingTimeFields) => {
  const remove_working_time = () => working_time.remove(index)

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row items-center justify-between p-2">
        <h4 className="">Disponibilidad de cobertura {Number(index + 1)}</h4>
        <TrashButton onClick={remove_working_time} />
      </div>
      <div className="w-full border-b border-[#919191]"></div>
      <Controller
        name={`workingTime[${index}].daysOfWeek`}
        defaultValue={working_time.fields[index].daysOfWeek}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select label="Dias de la semana" multi options={DAYS_OF_WEEK_NUMBER} onChange={onChange} value={value} />
        )}
      />
      <div className="w-full flex flex-row items-center justify-start px-2">
        <h4 className="">Horario de la jornada </h4>
      </div>
      <div className="w-full border-b border-[#919191]"></div>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <Controller
          name={`workingTime[${index}].from`}
          defaultValue={working_time.fields[index].from}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select label="Inicio" options={HOURS_OF_DAY} onChange={onChange} value={value} />
          )}
        />
        <Controller
          name={`workingTime[${index}].to`}
          defaultValue={working_time.fields[index].to}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select label="Fín" options={HOURS_OF_DAY} onChange={onChange} value={value} />
          )}
        />
      </div>
    </div>
  )
}

export default WorkingTimeFields
