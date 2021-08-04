import React from 'react'
import Hello from './Hello'
import Like from './Like'


export default class Good extends React.Component{

    render(){
        return(
            <>
            <Hello />
            <Like />
            </>
        )
    }
}