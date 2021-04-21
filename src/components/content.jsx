import React,{useState} from 'react'

function Content(props){
    
    const [logs,setLogs] = useState(props.logs)

    
    if(logs != props.logs){ //getDerivedStateFromProps
        setLogs(props.logs)
    }
    
        return <div style={{width:'90vw',height:'60vh',overflowX:'hidden',paddingBottom:10}} className="border border-bottom" id="logs">
            Logs
            {
                logs.length==0?
                    <p>Please click the button</p>
                :
                <ol>
                {
                logs.map(log=>
                    <li style={{marginBottom:10}}>You clicked at {log}</li>
                )
                }
                </ol>
            }
            
            </div>
    
}
export default Content