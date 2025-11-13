import Hoc from './Hoc'
import Son from './Son'

const Father = ({data1}) => {
  return <>
  <h1>{data1}</h1>
    <Son/>
  </>
}

export default Hoc(Father)