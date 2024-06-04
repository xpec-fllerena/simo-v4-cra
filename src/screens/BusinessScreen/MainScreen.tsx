
import { Breadcrumb, ButtonGroup, Select, TitleScreen } from "components/Core"
import useForm from "hooks/useForm"
import schemaValidationBusiness from "utils/yup/business_schema"
import business_schema from "utils/forms_default/business_schema"
import { Controller } from "react-hook-form"
import polygon_img from "assets/img/polygon.svg"
import { GrDrag } from "react-icons/gr"

import { DndContext, closestCenter } from "@dnd-kit/core"

import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { useState } from "react"

import { CoverageRatio, DispatchPrice, Proximity, ServiceLevel } from "components/BussinesRules"

const example_items = [
  { id: 1, name: "Radio cobertura source", type: "coverage_ratio" },
  { id: 2, name: "Por proximidad", type: "proximity" },
  { id: 3, name: "Por nivel de servicio", type: "service_level" },
  { id: 4, name: "Por tiempo de entrega", type: "delivery_time" },
  { id: 5, name: "Por precio de despacho", type: "dispatch_price" },
]

const MainScreen = () => {
  const [items, set_items] = useState<any>(example_items)
  const { control, handleSubmit } = useForm({
    defaultValues: business_schema,
    schema: schemaValidationBusiness,
  })

  const handleDragEnd = async (e: any) => {
    const { active, over } = e
    const old_index = items.findIndex((rcd: any) => rcd?.id === active.id)
    const new_index = items.findIndex((rcd: any) => rcd?.id === over.id)
    const new_array = arrayMove(items, old_index, new_index).map((el: any, i: number) => ({ ...el, position: i + 1 }))
    set_items(new_array)
  }

  const render_rule_field: any = {
    coverage_ratio: <CoverageRatio control={control} />,
    proximity: <Proximity control={control} />,
    dispatch_price: <DispatchPrice control={control} />,
    service_level: <ServiceLevel control={control} />,
  }

  const on_submit = (data: any) => {
    console.log("data", data)
  }

  const Card = (_item: any) => {
    const { item, index } = _item
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
      id: item?.id,
    })

    const style = {
      transform: CSS.Translate.toString(transform),
      transition,
    }

    return (
      <div ref={setNodeRef} className="w-full flex flex-row items-center justify-start p-1 gap-4">
        <div style={style} {...attributes} {...listeners} className="flex flex-row items-center justify-center gap-4">
          <div className="border-2 rounded-lg py-2 px-4">
            <p>{index + 1}</p>
          </div>
          <GrDrag className="text-gray-500 cursor-pointer" />
        </div>
        <div className="lg:min-w-[70%] flex flex-row items-center justify-start gap-4 border-2 px-4 lg:px-20 py-4 rounded-lg">
          <div className="min-w-[250px] flex items-center justify-start h-14 border-2 py-2 px-4 rounded-md">
            <p>{item?.name}</p>
          </div>
          {render_rule_field[item?.type]}
        </div>
      </div>
    )
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="w-full h-full flex flex-col items-center justify-start">
        <Breadcrumb
          data={[
            { name: "Administración", href: "/business" },
            { name: "Reglas de negocio", href: "/business" },
          ]}
        />
        <div className="w-full flex flex-col justify-center items-center pt-4 px-6">
          <TitleScreen title="Reglas de negocio" />
        </div>
        <form onSubmit={handleSubmit(on_submit)} className="w-full flex flex-col pb-2 px-4 lg:px-10">
          <div className="w-full flex flex-row items-center justify-end py-2">
            <ButtonGroup />
          </div>
          <div className="w-full flex flex-col items-start gap-6">
            <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-start justify-start gap-6 border shadow-md rounded-lg py-4 px-6 bg-white">
              <div className="w-full flex flex-col items-start justify-center gap-2">
                <h4 className="font-medium">Canal</h4>
                <Controller
                  name="channel"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Select label="Canal" options={[]} onChange={onChange} value={value} />
                  )}
                />
              </div>
              <div className="w-full flex flex-col items-start justify-center gap-2">
                <h4 className="font-medium">Tipo de Despacho</h4>
                <Controller
                  name="shippingType"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Select label="Tipo de Despacho" options={[]} onChange={onChange} value={value} />
                  )}
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-6 border shadow-md rounded-lg py-4 px-6 bg-white">
              <div className="w-full flex">
                <h4 className="font-medium">Configuración de prioridades:</h4>
              </div>
              <div className="w-full flex flex-row gap-6">
                <div className="w-auto h-full flex flex-col items-center justify-center gap-2 lg:px-6">
                  <p className="text-xl">+</p>
                  <img src={polygon_img} alt="poligon" />
                  <p className="text-xl">-</p>
                </div>
                <div className="w-full grid grid-rows-5">
                  <SortableContext items={example_items} strategy={verticalListSortingStrategy}>
                    {items?.map((item: any, i: number) => {
                      return <Card key={i} item={item} index={i} />
                    })}
                  </SortableContext>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </DndContext>
  )
}

MainScreen.display_name = "MainScreen"

export default MainScreen
