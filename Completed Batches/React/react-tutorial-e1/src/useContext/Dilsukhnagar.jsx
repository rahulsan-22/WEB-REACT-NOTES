import { useContext } from 'react'
import Chaitanyapuri from './Chaitanyapuri'
import { SoftDrinks } from './Instamart'

const Dilsukhnagar = () => {
    let product2 = useContext(SoftDrinks)
  return <>
    <p>{product2}</p>
    <Chaitanyapuri/>
  </>
}

export default Dilsukhnagar