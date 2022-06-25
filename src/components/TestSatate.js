import React , {Component} from 'react'

class TestState extends Component{
    constructor(){
        super();// base class constructor
        this.state ={
            message : 'Hello There...please click on button'
        } 
    }
    changeMessage(){
        this.setState({
            message :'thanks for subscribing'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default TestState