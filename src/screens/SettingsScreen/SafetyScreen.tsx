
import cn from "classnames"
import { Breadcrumb, TitleScreen } from "components/Core"
import { Suspense, useState } from "react"

import {
  ChannelItemSafety,
  ChannelSafety,
  GlobalSafety,
  ItemSafety,
  SourceItemSafety,
  SourceSafety,
} from "components/SafetyForms"
import useForm from "hooks/useForm"
import safety_values from "utils/forms_default/safety_values"
import schemaValidationSafety from "utils/yup/safety_schema"

const SafetyScreen = () => {
  const { control, errors, handleSubmit, setValue } = useForm({
    defaultValues: safety_values,
    schema: schemaValidationSafety,
  })

  const [active_form, set_active_form] = useState<string>("global")

  const handle_form_type = (type: string) => set_active_form(type)

  const Card = ({ name, id }: any) => {
    return (
      <div
        onClick={() => handle_form_type(id)}
        className={cn(
          "w-full lg:w-60 flex items-center justify-center p-4 text-center border-2 hover:border hover:border-[#F9004D] hover:text-[#F9004D] text-[#4C4C4C] bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer",
          {
            "border-[#F9004D]": Boolean(active_form === id),
            "text-[#F9004D]": Boolean(active_form === id),
          },
        )}
      >
        <p className="font-semibold">{name}</p>
      </div>
    )
  }

  const items_form = [
    { id: "global", name: "Stock de seguridad global", component: <GlobalSafety control={control} /> },
    { id: "channel", name: "Stock de seguridad por canal", component: <ChannelSafety control={control} /> },
    { id: "source", name: "Stock de seguridad por source", component: <SourceSafety control={control} /> },
    { id: "items", name: "Stock de seguridad de artículos", component: <ItemSafety control={control} /> },
    {
      id: "channel_items",
      name: "Stock de seguridad de artículos por canal",
      component: <ChannelItemSafety control={control} />,
    },
    {
      id: "source_items",
      name: "Stock de seguridad de artículos por source",
      component: <SourceItemSafety control={control} />,
    },
  ]

  const on_submit = (data: any) => {
    console.log("data", data)
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <Breadcrumb
        data={[
          { name: "Configuraciones", href: "/settings" },
          { name: "Stock de seguridad", href: "/settings/safety" },
        ]}
      />
      <div className="w-full flex flex-col justify-center items-center py-4 px-6">
        <TitleScreen title="Stock de seguridad" />
      </div>
      <form onSubmit={handleSubmit(on_submit)} className="w-full flex flex-col pb-2 px-4 lg:px-10 gap-4">
        {/* <div className="w-full flex flex-row items-center justify-end">
          <ButtonGroup />
        </div> */}
        <div className="w-full flex flex-col justify-center items-start gap-4 lg:gap-6">
          <h3 className="text-lg font-medium">Seleccione el tipo de stock que desea asignar</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-4 lg:gap-6">
            {items_form.map((item: any, i: number) => (
              <Card key={i} id={item?.id} name={item?.name} />
            ))}
          </div>
        </div>
        <div className="w-full h-auto py-4 gap-4">
          <div className="w-full bg-white border rounded-lg shadow-md p-4">
            <Suspense fallback={null}>{items_form.find((el) => el.id === active_form)?.component}</Suspense>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SafetyScreen
