
import { RefObject, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import cn from "classnames"
import { Checkbox } from "flowbite-react"

interface ISelect {
  label: string
  value?: string | number
  onChange?: any
  multi?: boolean
  className?: string
  helperText?: string
  trigger?: string
  options: Array<{ id: string | number; label: string; value: string | number }>
}

const Select = ({ className, label, multi, onChange, options, trigger = "click" }: ISelect) => {
  const [open_dropdown, set_open_dropdown] = useState<boolean>(false)
  const [selection, set_selection] = useState<any>({})
  const [multiselections, set_multiselections] = useState<any>([])
  const wrapperRef: RefObject<HTMLDivElement> = useRef(null)

  const handle_dropdown = useCallback(() => set_open_dropdown(!open_dropdown), [open_dropdown, set_open_dropdown])

  const _options_dropdown = useMemo(() => {
    return options || []
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [multiselections, options])

  const handle_check = useCallback(
    (filtered: any) => {
      const new_selection = multiselections.filter((item: any) => item.id !== filtered.id)
      if (Boolean(multiselections.find((it: any) => it.id === filtered.id))) {
        set_multiselections(new_selection)
      } else {
        set_multiselections([...new_selection, { ...filtered, checked: true }])
      }
    },
    [multiselections, set_multiselections],
  )

  const handle_select = useCallback(
    (item: any) => {
      set_selection(item)
      set_open_dropdown(false)
    },
    [set_selection, set_open_dropdown],
  )

  const handleMouseOver = () => {
    if (trigger === "hover") {
      set_open_dropdown(true)
    }
  }

  const handleMouseLeft = () => {
    if (trigger === "hover") {
      set_open_dropdown(false)
    }
  }

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        set_open_dropdown(false)
      }
    }

    if (open_dropdown) {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [open_dropdown, wrapperRef])

  useEffect(() => {
    if (multi) {
      onChange(multiselections)
    } else {
      onChange(selection)
    }
  }, [multi, selection, multiselections, onChange])

  const label_box = multi
    ? multiselections.length
      ? multiselections.map((sel: any, i: number) => `${sel?.label}` + (multiselections.length - 1 === i ? "." : ", "))
      : null
    : selection?.label

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeft}
      className={cn("relative w-full h-12", className)}
    >
      <div
        onClick={handle_dropdown}
        className={cn(
          "w-full h-full flex flex-row items-center justify-between border border-1 peer appearance-none rounded-lg bg-transparent px-2.5 pb-2.5 pt-3 text-sm cursor-pointer",
          {
            "border-gray-300": !open_dropdown,
            "border-[#F9004D]": open_dropdown,
            "rounded-b-none": open_dropdown,
            "border-b-0": open_dropdown,
          },
        )}
      >
        <p className={cn("overflow-hidden whitespace-nowrap text-ellipsis", { "text-gray-500": !Boolean(label_box) })}>
          {label_box ?? label}
        </p>
        <div>
          {open_dropdown ? (
            <IoMdArrowDropup className="text-lg text-gray-500" />
          ) : (
            <IoMdArrowDropdown className="text-lg text-gray-500" />
          )}
        </div>
      </div>
      {open_dropdown ? (
        <div className="absolute w-full h-auto max-h-60 flex flex-col overflow-y-auto z-20 top-12 bg-white border border-[#F9004D] rounded-b-lg scroll-smooth">
          {_options_dropdown.length ? (
            _options_dropdown.map((item: any, i: number) => (
              <div
                key={i}
                onClick={() => (multi ? handle_check(item) : handle_select(item))}
                className="w-full flex flex-row items-center justify-between py-2 px-3 cursor-pointer hover:bg-gray-200 hover:opacity-70"
              >
                <p className="text-black">{item?.label}</p>
                {multi ? (
                  <Checkbox checked={Boolean(multiselections.find((_item: any) => _item.id === item.id)?.checked)} />
                ) : null}
              </div>
            ))
          ) : (
            <div className="w-full flex flex-row items-center justify-center py-2 px-3">
              <p className="text-gray-500 italic cursor-default">Sin opciones</p>
            </div>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default Select
