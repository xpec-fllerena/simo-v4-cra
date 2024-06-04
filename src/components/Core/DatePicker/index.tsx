
import { Datepicker } from "flowbite-react"
import { format_date } from "helpers/datetime_helper"
import { useState, useMemo } from "react"

interface IDatePicker {
  label: string
  // handle_datepicker_value: (date: string) => void
}

const DatePicker = ({ label }: IDatePicker) => {
  const [current_date, set_current_date] = useState<any>(format_date(new Date()))

  const date_selected = useMemo(() => format_date(current_date), [current_date])

  // useEffect(() => handle_datepicker_value(current_date), [current_date])

  return (
    <div className="w-full flex flex-col items-start justify-center">
      <h4>{label}</h4>
      <Datepicker
        className="w-full bg-white"
        language="es"
        value={date_selected}
        onSelectedDateChanged={(date: any) => set_current_date(date)}
        showClearButton={false}
        showTodayButton={false}
      />
    </div>
  )
}

export default DatePicker
