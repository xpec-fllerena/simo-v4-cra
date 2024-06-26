
import { Select, Switch, TextField, TrashButton } from "components/Core"
import { Controller } from "react-hook-form"
import { HOURS_OF_DAY } from "constants/FORM_CONSTANTS"

interface IWorkingSessionsFields {
  index: number
  control: any
  working_session: any
  errors: any
}

const WorkingSessionsFields = ({ index, control, working_session, errors }: IWorkingSessionsFields) => {
  const remove_working_session = () => working_session.remove(index)

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row items-center justify-between p-2">
        <h4 className="">Jornada de trabajo {Number(index + 1)}</h4>
        <TrashButton onClick={remove_working_session} />
      </div>
      <div className="w-full border-b border-[#919191]"></div>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <Controller
          name={`workingSessions[${index}].productType`}
          defaultValue={working_session.fields[index].productType}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField label="Tipo de producto" onChange={onChange} value={value} />
          )}
        />
      </div>
      <div className="w-full flex flex-row items-center justify-start px-2">
        <h4 className="">Horario regular de la jornada </h4>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <Controller
          name={`workingSessions[${index}].from`}
          defaultValue={working_session.fields[index].from}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select label="Inicio" options={HOURS_OF_DAY} onChange={onChange} value={value} />
          )}
        />
        <Controller
          name={`workingSessions[${index}].to`}
          defaultValue={working_session.fields[index].to}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select label="Fín" options={HOURS_OF_DAY} onChange={onChange} value={value} />
          )}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <Controller
          name="enable_locktime"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <Switch label="Habilitar horario de bloqueo" onChange={onChange} checked={value} />
          )}
        />
      </div>
      <div className="w-full flex flex-row items-center justify-start px-2">
        <h4 className="">Horario de bloqueo dentro de la jornada </h4>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <Controller
          name={`workingSessions[${index}].lockTime.from`}
          defaultValue={working_session.fields[index].lockTime?.from}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select label="Inicio" options={HOURS_OF_DAY} onChange={onChange} value={value} />
          )}
        />
        <Controller
          name={`workingSessions[${index}].lockTime.to`}
          defaultValue={working_session.fields[index].lockTime?.to}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select label="Fín" options={HOURS_OF_DAY} onChange={onChange} value={value} />
          )}
        />
      </div>
    </div>
  )
}

export default WorkingSessionsFields
