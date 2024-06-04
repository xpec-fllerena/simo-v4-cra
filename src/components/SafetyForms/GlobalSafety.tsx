import { Controller } from "react-hook-form"
import { Button, NumberField, Select } from "components/Core"

const GlobalSafety = ({ control }: any) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <h4 className="text-lg">Stock de seguridad global</h4>
      <div className="w-full flex flex-row items-center justify-start gap-4">
        <div className="w-1/2 flex flex-row gap-4">
          <Controller
            name="type"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <Select label="Tipo" options={[]} onChange={onChange} value={value} />
            )}
          />
          <Controller
            name="qty"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => <NumberField value={value} onChange={onChange} textAdded="%" />}
          />
        </div>
        <Button label="Aplicar" />
      </div>
    </div>
  )
}

export default GlobalSafety
