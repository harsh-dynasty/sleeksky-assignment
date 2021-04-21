import React from 'react'

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentTime:""
        }
        this.getTime=this.getTime.bind(this)
    }
    componentDidMount(){
        this.getTime()
    }
    getTime(){
        
       
        setInterval(()=>{
            var d = new Date();
            var hh = d.getHours()
            var mm = d.getMinutes()
            var ss = d.getSeconds()
            this.setState({
                currentTime : hh+":"+mm+":"+ss
            })
        },1000)
        
        
    }
    render(){
        
        return <div style={{width:'90vw',height:'20vh',backgroundColor:'lightgreen'}} className="border border-bottom row">
            Header
            <h1>Current time is {this.state.currentTime}</h1>
            </div>
    }
}