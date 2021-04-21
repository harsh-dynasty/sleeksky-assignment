import React from 'react'

function Footer({clickCount}){
   
        return <div style={{width:'90vw',height:'20vh',backgroundColor:'lightblue'}} className='row'>
          Footer
            <h1>You clicked {clickCount} times</h1>
            </div>
   
}

export default Footer