import { Breadcrumb as BC } from "flowbite-react"
import { HiHome } from "react-icons/hi"
import cn from "classnames"

interface IBreadcrumb {
  data: Array<{ name: string; href: string }>
}

const Breadcrumb = ({ data }: IBreadcrumb) => {
  return (
    <div className="bg-white w-full h-[2.5rem] items-start justify-start py-2 px-6">
      <BC aria-label="home-breadcrumb" className="w-full">
        <BC.Item href="/dashboard" icon={HiHome}>
          Inicio
        </BC.Item>
        {data.map(({ href, name }, i, items) => {
          return (
            <BC.Item key={i} href={href} className="hidden lg:flex whitespace-nowrap">
              <p className={cn("lowercase first-letter:capitalize", { "text-[#F9004D]": Boolean(items.length === i + 1) })}>
                {name}
              </p>
            </BC.Item>
          )
        })}
      </BC>
    </div>
  )
}

export default Breadcrumb
