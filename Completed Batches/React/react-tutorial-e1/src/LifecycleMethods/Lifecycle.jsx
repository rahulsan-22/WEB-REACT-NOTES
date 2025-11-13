import { Component } from 'react'
import Unmount from './Unmount'
class Lifecycle extends Component {
    constructor() {
        super()
        console.log("Constructor Method Running...")
        this.state = {
            movie:"War-2"
        }
    }
    componentDidMount() {
        console.log("ComponentDidMount Method is running...")
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate Method is running...")
    }
    render() {
        console.log("Render Method is running...")
        return (
            <>
                <h1>{this.state.movie}</h1>
                <button onClick={()=>this.setState({movie:"Coolie"})}>Click to change the movie</button>
                {this.state.movie=="War-2" && <Unmount/>}
            </>
        )
    }
}
export default Lifecycle