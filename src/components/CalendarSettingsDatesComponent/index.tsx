
import { Fragment, useCallback, useRef, useState, useMemo, useEffect } from "react"
import { Modal, TextField } from "components/Core"
import { Datepicker } from "flowbite-react"
import { format_date } from "helpers/datetime_helper"
import { IoClose } from "react-icons/io5"

interface ICalendarSettingsDatesComponent {
  name: string
  setValue: any
}

const CalendarSettingsDatesComponent = ({ name, setValue }: ICalendarSettingsDatesComponent) => {
  const get_date_month = (date: Date) => format_date(date, "MM-dd")
  const [current_date, set_current_date] = useState<any>(format_date(new Date()))
  const [dates_selected, set_dates_selected] = useState<Array<string>>([])
  const [show_calendar_options, set_show_calendar_options] = useState<boolean>(false)
  const modal_ref = useRef<any>(null)

  const dates_listed = useMemo(() => dates_selected, [dates_selected])

  useEffect(() => {
    setValue(name, dates_listed)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dates_listed])

  const handleClickCalendar = useCallback(
    () => set_show_calendar_options(!show_calendar_options),
    [show_calendar_options, set_show_calendar_options],
  )

  const add_date_to_list = useCallback(() => {
    let dates = [...dates_selected, get_date_month(current_date)]
    dates = dates.filter((item, index) => dates.indexOf(item) === index)
    set_dates_selected(dates)
  }, [current_date, dates_selected, set_dates_selected])

  const remove_date_from_list = useCallback(
    (date: string) => {
      set_dates_selected(dates_selected.filter((current_date: string) => current_date !== date))
    },
    [dates_selected, set_dates_selected],
  )

  return (
    <Fragment>
      <div className="w-full flex flex-col">
        <TextField
          label="Fechas no laborales"
          disabled
          className="cursor-pointer"
          value={dates_listed.map((date: string) => date + "\t")}
        />
        <div className="w-full flex items-center justify-end">
          <p onClick={handleClickCalendar} className="text-[#F9004D] underline cursor-pointer">
            Modificar fechas
          </p>
        </div>
      </div>
      <Modal mounted={show_calendar_options} ref={modal_ref}>
        <div className="flex flex-col w-96">
          <div className="w-full text-center bg-[#F9004D] rounded-t-xl p-2">
            <h4 className="text-lg font-medium uppercase text-white">Fechas no laborales</h4>
          </div>
          <div className="w-full flex flex-col rounded-b-xl gap-4 px-4 py-6">
            <div className="w-full flex flex-col gap-2">
              <Datepicker
                language="es"
                value={format_date(current_date)}
                onSelectedDateChanged={(date: any) => set_current_date(date)}
                showClearButton={false}
                showTodayButton={false}
              />
              <div className="flex flex-row items-center justify-end">
                <button
                  onClick={add_date_to_list}
                  type="button"
                  className="py-2 px-4 text-center bg-[#F9004D] text-white font-medium rounded-lg hover:opacity-90"
                >
                  Agregar
                </button>
              </div>
              <hr />
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-lg">
                  Seleccionados:{" "}
                  {Boolean(!dates_selected.length) ? <span className="italic text-[#F9004D]">Ninguno</span> : null}
                </h4>
                {Boolean(dates_listed.length) ? (
                  <div className="w-full flex flex-row flex-wrap gap-2">
                    {dates_listed.map((date: string, i: number) => (
                      <div key={i} className="w-auto flex flex-row border border-[#F9004D] rounded-md">
                        <div className="w-full text-center py-1 px-2">
                          <p>{date}</p>
                        </div>
                        <div
                          onClick={() => remove_date_from_list(date)}
                          className="grid place-items-center bg-[#F9004D] p-1 cursor-pointer"
                        >
                          <IoClose className="text-lg text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  )
}

export default CalendarSettingsDatesComponent
