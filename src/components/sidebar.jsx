import React from 'react'

export default class Sidebar extends React.Component{
    render(){
        return <div style={{width:'10vw',height:'90vh',backgroundColor:'lightgoldenrodyellow'}} className="border border-right">
            Sidebar
            <div style={{border:'solid 2px',margin:20,height:50,textAlign:'center', textOverflow:'clip'}} onClick={()=>this.props.handleClick()} id="btn">Click Here</div>
            </div>
    }
}