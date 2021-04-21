import React from 'react'

function Sidebar({handleClick}){
   
        return <div style={{width:'10vw',height:'90vh',backgroundColor:'lightgoldenrodyellow'}} className="border border-right">
            Sidebar
            <div style={{border:'solid 2px',margin:20,height:50,textAlign:'center', textOverflow:'clip'}} onClick={()=>handleClick()} id="btn">Click Here</div>
            </div>
    
}
export default Sidebar