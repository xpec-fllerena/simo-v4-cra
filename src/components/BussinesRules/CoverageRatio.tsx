import { Controller } from "react-hook-form"
import { Select, TextField } from "components/Core"

const CoverageRatio = ({ control }: any) => {
  return (
    <div className="w-full h-full flex flex-row items-center justify-start gap-4">
      <Controller
        name="coverage_ratio.value"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextField label="Valor" onChange={onChange} value={value} helperText="" className="!max-w-[15rem]" />
        )}
      />
      <Controller
        name="coverage_ratio.type"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <Select label="Tipo" options={[]} value={value} onChange={onChange} className="!max-w-[15rem]" />
        )}
      />
    </div>
  )
}

export default CoverageRatio
