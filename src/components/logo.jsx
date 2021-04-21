import React from 'react'
import logo from '../assets/images/logo512.png'
export default class Logo extends React.Component{
    render(){
        return <div style={{width:'10vw',height:'20vh'}} className="border border-right border-bottom">
            <img src={logo} style={{width:'100%',height:'auto'}} />
            </div>
    }
}