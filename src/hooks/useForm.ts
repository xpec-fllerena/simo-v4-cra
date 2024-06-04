
import { useForm as useFormHook } from "react-hook-form"
import { ObjectSchema } from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

interface IUseForm {
  defaultValues?: any
  schema: ObjectSchema<any>
}

const useForm = ({ defaultValues = {}, schema }: IUseForm) => {
  const {
    control,
    reset,
    formState: { errors, isSubmitting },
    register,
    watch,
    setValue,
    handleSubmit,
  } = useFormHook({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  })
  return { control, reset, errors, isSubmitting, register, watch, setValue, handleSubmit }
}

export default useForm
