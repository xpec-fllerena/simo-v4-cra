
import { ForwardedRef, forwardRef, useState } from "react"
import cn from "classnames"
import { TextInput } from "flowbite-react"
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi2"
import st from "components/Core/NumberField/NumberField.module.css"

interface INumberField {
  label: string
  value?: string | number
  onChange?: () => void
  textAdded?: string
  className?: string
  helperText: string
  [k: string]: any
}

const NumberField = forwardRef(
  (
    { className, label, onChange, value, helperText, textAdded, ...rest }: INumberField,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [val, set_val] = useState<number>(0)
    const button_styles = "text-[#F9004D] text-2xl cursor-pointer"

    const add = () => val < 100 && set_val(Number(val + 1))
    const subtract = () => val > 0 && set_val(Number(val - 1))

    const handle_manual_typing = (e: any) => {
      e.preventDefault()
      set_val(Number(e?.target?.value))
    }

    return (
      <div className="w-full h-14 flex flex-row justify-center items-center gap-4">
        <HiMinusCircle
          className={cn(button_styles, {
            "text-slate-600": Boolean(val === 0),
            "!cursor-not-allowed": Boolean(val === 0),
          })}
          onClick={subtract}
        />
        <div className="w-auto flex items-center justify-center gap-2">
          <TextInput
            {...rest}
            ref={ref}
            type="number"
            onChange={handle_manual_typing}
            value={val}
            min={0}
            className={cn(
              "max-w-[4rem] !focus:border-[#F9004D] !focus:ring-[#F9004D] shadow-none !bg-white",
              className,
              st["numer_text_core"],
            )}
            helperText={helperText}
            inputMode="numeric"
          />
          {textAdded ? <p className="text-lg font-medium">{textAdded}</p> : null}
        </div>
        <HiPlusCircle
          className={cn(button_styles, {
            "text-slate-600": Boolean(val === 100),
            "!cursor-not-allowed": Boolean(val === 100),
          })}
          onClick={add}
        />
      </div>
    )
  },
)

NumberField.displayName = "NumberField"

export default NumberField
