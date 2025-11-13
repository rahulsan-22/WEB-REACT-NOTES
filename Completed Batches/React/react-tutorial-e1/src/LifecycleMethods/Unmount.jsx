import { Component } from 'react'

class Unmount extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount Method is running...")
    }
  render() {
    return (
      <h1><mark>Unmount</mark></h1>
    )
  }
}
export default Unmount