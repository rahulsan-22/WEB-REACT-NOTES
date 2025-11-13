import { PureComponent } from 'react'

class Pure extends PureComponent {
  constructor(){
    super()
    this.state={
      name:"Pavan"
    }
  }
  render() {
    console.log("Pure Component Rendering....")
    return (
      <>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Pavan"})}>Click to change State</button>
      </>
    )
  }
}
export default Pure