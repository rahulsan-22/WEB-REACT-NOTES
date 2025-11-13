import Hoc from "./Hoc"

const Son = ({ data1 }) => {
  return (
    <div>Son - {data1}</div>
  )
}

export default Hoc(Son)