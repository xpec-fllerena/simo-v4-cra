import cn from "classnames"

interface ITitleScreen {
  title: string
  className?: string
}

const TitleScreen = ({ title, className }: ITitleScreen) => {
  return (
    <div className={cn("w-full h-auto flex flex-row items-center justify-start gap-3 md:whitespace-nowrap", className)}>
      <h3 className=" text-2xl font-semibold text-[#4C4C4C] lowercase first-letter:capitalize">{title}</h3>
      <div className="w-full h-full">
        <div className="h-1/2 border-b border-b-[#4C4C4C]"></div>
      </div>
    </div>
  )
}

export default TitleScreen
