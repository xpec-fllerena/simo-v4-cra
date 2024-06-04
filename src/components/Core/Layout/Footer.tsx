import cn from "classnames"
import logo_omnix_white from "img/logo_omnix_white.svg"

interface IFooter {
  className?: string
}

const Footer = ({ className }: IFooter) => {
  return (
    <div className={cn("w-full h-16 flex items-center justify-center p-4 bg-[#F9004D]", className)}>
      <img src={logo_omnix_white} alt="logo" />
    </div>
  )
}

export default Footer
