import { Controller } from "react-hook-form"
import { Button, Chip, NumberField, Select } from "components/Core"

const SourceSafety = ({ control }: any) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-col gap-2">
        <h4 className="text-lg">Source</h4>
        <div className="w-full flex flex-col lg:flex-row flex-wrap gap-2">
          <Chip label="Source" onDelete={() => console.log("")} />
        </div>
        <Controller
          name="sources"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <Select label="Sources" options={[]} onChange={onChange} value={value} multi />
          )}
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <h4 className="text-lg">Stock de seguridad</h4>
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
              render={({ field: { onChange, value } }) => (
                <NumberField value={value} onChange={onChange} textAdded="%" />
              )}
            />
          </div>
          <Button label="Aplicar" />
        </div>
      </div>
    </div>
  )
}
export default SourceSafety
