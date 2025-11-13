import { memo } from "react"

const Btn = ({fun,children}) => {
  console.log(`${children} Component Rendering....`)
  return (
    <button onClick={fun}>{children}</button>
  )
}

export default memo(Btn)