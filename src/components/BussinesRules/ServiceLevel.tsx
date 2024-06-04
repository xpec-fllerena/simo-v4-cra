import { Controller } from "react-hook-form"
import { NumberField } from "components/Core"

const ServiceLevel = ({ control }: any) => {
  return (
    <div className="w-full flex flex-row gap-4">
      <Controller
        name="service_level.qty"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => <NumberField value={value} onChange={onChange} textAdded="%" />}
      />
    </div>
  )
}

export default ServiceLevel
