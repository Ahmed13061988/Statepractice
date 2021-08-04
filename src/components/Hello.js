import React from "react"

export default class Hello extends React.Component{
    constructor(){
        super()
        this.state = {
            counter : 0
        }
    }
    handleChange=()=>{
        this.setState({
            counter: this.state.counter + 1 
        })
    }

    handleClick =()=>{
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render(){
        return(
            <>
            <button onClick = {this.handleChange}>+</button>
            <h1>{this.state.counter}</h1>
            <button onClick ={this.handleClick}>-</button> 
            </>
        )
    }
}




