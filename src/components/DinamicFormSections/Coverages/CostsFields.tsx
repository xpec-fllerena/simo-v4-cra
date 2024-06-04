import { TextField, TrashButton } from "components/Core"
import { Controller } from "react-hook-form"

interface ICostsFields {
  index: number
  control: any
  cost: any
  errors: any
}

const CostsFields = ({ index, control, cost, errors }: ICostsFields) => {
  const remove_cost = () => cost.remove(index)

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row items-center justify-between p-2">
        <h4 className="">Costo {Number(index + 1)}</h4>
        <TrashButton onClick={remove_cost} />
      </div>
      <div className="w-full border-b border-[#919191]"></div>
      <Controller
        control={control}
        name={`cost[${index}].key`}
        defaultValue={cost.fields[index].key}
        render={({ field: { onChange, value } }) => <TextField label="Clave" onChange={onChange} value={value} />}
      />
      <div className="flex flex-row gap-4">
        <Controller
          control={control}
          name={`cost[${index}].value`}
          defaultValue={cost.fields[index].value}
          render={({ field: { onChange, value } }) => <TextField label="Valor" onChange={onChange} value={value} />}
        />
      </div>
    </div>
  )
}

export default CostsFields
