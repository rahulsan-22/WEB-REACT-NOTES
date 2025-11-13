const Hoc = (Component) => {
  console.log(Component)
  return ()=>{
    return <Component data1="Javascript"/>
  }
}

export default Hoc