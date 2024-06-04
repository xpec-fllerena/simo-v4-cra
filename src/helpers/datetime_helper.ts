import { format } from "date-fns"
import { es } from "date-fns/locale"

export const format_date = (date: Date, formatString: string = "yyyy-MM-dd") => {
  try {
    let dateTemp: Date = date
    return format(dateTemp, formatString, { locale: es })
  } catch (error) {
    return "invalidDate"
  }
}
