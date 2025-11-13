import { memo } from "react"

const Count = ({text,val}) => {
  console.log(`${text} Component Rendering....`)
  return (
    <h1>{text} - {val}</h1>
  )
}

export default memo(Count)