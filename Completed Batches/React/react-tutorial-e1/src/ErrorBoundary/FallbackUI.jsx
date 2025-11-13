import { Component } from 'react'

class FallbackUI extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        } else {
            return this.props.children
        }
    }
}
export default FallbackUI