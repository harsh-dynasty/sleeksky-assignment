import React,{useEffect, useState} from 'react'

function Header(){
    
    const [currentTime, setCurrentTime] = useState('');

    useEffect(()=>getTime())
    
    const getTime=()=>{
        
       
        setInterval(()=>{
            var d = new Date();
            var hh = d.getHours()
            var mm = d.getMinutes()
            var ss = d.getSeconds()
           
            setCurrentTime(hh+":"+mm+":"+ss)
        },1000)
        
        
    }
    
        
        return <div style={{width:'90vw',height:'20vh',backgroundColor:'lightgreen'}} className="border border-bottom row">
            Header
            <h1>Current time is {currentTime}</h1>
            </div>
    
}

export default Header