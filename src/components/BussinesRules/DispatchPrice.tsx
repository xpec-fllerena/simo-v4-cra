import { Controller } from "react-hook-form"
import { Select } from "components/Core"

const DispatchPrice = ({ control }: any) => {
  return (
    <div className="w-full flex flex-row gap-4">
      <Controller
        name="dispatch_price.type"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <Select label="Tipo" options={[]} value={value} onChange={onChange} className="!max-w-[15rem]" />
        )}
      />
    </div>
  )
}

export default DispatchPrice
