import React from 'react'

export default class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render(){
        return <div style={{width:'90vw',height:'20vh',backgroundColor:'lightblue'}} className='row'>
          Footer
            <h1>You clicked {this.props.clickCount} times</h1>
            </div>
    }
}