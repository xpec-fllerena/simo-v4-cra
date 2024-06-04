
import { ForwardedRef, forwardRef, useState } from "react"
import cn from "classnames"
import { FloatingLabel } from "flowbite-react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

interface ITextField {
  label: string
  type?: "text" | "email" | "password" | "number"
  value?: string | number
  onChange?: () => void
  className?: string
  helperText: string
  [k: string]: any
}

const TextField = forwardRef(
  (
    { className, label, onChange, value, type = "text", helperText, ...rest }: ITextField,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [is_password_visible, set_is_password_visible] = useState<boolean>(false)
    const icon_password_styles = "absolute top-4 right-4 text-gray-600 text-lg z-40 cursor-pointer"

    function togglePasswordVisibility() {
      set_is_password_visible((prevState: boolean) => !prevState)
    }

    if (type === "password")
      return (
        <div className="relative w-full h-14">
          <FloatingLabel
            {...rest}
            ref={ref}
            type={is_password_visible ? "text" : "password"}
            label={label}
            onChange={onChange}
            value={value}
            variant="outlined"
            className={cn("focus:border-[#F9004D] peer-focus:text-[#F9004D]", className)}
            helperText={helperText}
          />
          <button type="button" onClick={togglePasswordVisibility}>
            {is_password_visible ? (
              <AiOutlineEye className={icon_password_styles} />
            ) : (
              <AiOutlineEyeInvisible className={icon_password_styles} />
            )}
          </button>
        </div>
      )

    return (
      <div className="w-full h-14">
        <FloatingLabel
          {...rest}
          ref={ref}
          type={type}
          label={label}
          onChange={onChange}
          value={value}
          variant="outlined"
          className={cn("focus:border-[#F9004D] peer-focus:text-[#F9004D] z-0 first-letter:capitalize", className)}
          helperText={helperText}
        />
      </div>
    )
  },
)

TextField.displayName = "TextField"

export default TextField
