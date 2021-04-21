import React from 'react'

export default class Content extends React.Component{
    constructor(props){
        super(props)
        this.state={
            logs:this.props.logs
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
         logs: nextProps.logs,
        };
    }
    render(){
        return <div style={{width:'90vw',height:'60vh',overflowX:'hidden',paddingBottom:10}} className="border border-bottom" id="logs">
            Logs
            {
                this.state.logs.length==0?
                    <p>Please click the button</p>
                :
                <ol>
                {
                this.state.logs.map(log=>
                    <li style={{marginBottom:10}}>You clicked at {log}</li>
                )
                }
                </ol>
            }
            
            </div>
    }
}