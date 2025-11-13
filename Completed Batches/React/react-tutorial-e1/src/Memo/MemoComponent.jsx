import { memo } from "react"

const MemoComponent = ({holiday}) => {
  console.log("Memo Component Rendering.....")
  return (
    <div>MemoComponent - {holiday}</div>
  )
}

export default memo(MemoComponent)