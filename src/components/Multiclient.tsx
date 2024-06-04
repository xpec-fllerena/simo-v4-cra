import { Suspense } from "react"
// import useMulticlient from "hooks/useMulticlient"
import { lazy } from "react"

interface IMulticlient {
  path_override: string
  children?: React.ReactNode
  has_children?: boolean
  [k: string]: any
}

const Multiclient = ({ path_override, has_children, children, ...props }: IMulticlient) => {
  // let Component = useMulticlient().get_component(path_override)
  let Component: any = lazy(() => import(`./../${path_override}`))

  return (
    <Suspense fallback={null}>
      {has_children ? <Component {...props}>{children}</Component> : <Component {...props} />}
    </Suspense>
  )
}

export default Multiclient
