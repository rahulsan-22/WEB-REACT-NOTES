const WishIndependeceDay = ({name}) => {
    if(name=="Monty"){
        throw new Error("Something went wrong")
    }
  return (
    <h1>Happy <del>Independence</del> Day - {name}</h1>
  )
}

export default WishIndependeceDay