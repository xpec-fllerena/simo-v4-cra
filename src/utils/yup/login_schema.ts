import * as yup from "yup"

const schemaValidationLogin = yup.object().shape({
  user: yup.string().required("required-field"),
  password: yup.string().required("required-field")
})

export default schemaValidationLogin