import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Sidebar from './components/sidebar'
import Content from './components/content'
import Logo from './components/logo'
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      clickCount:0,
      logs:[]
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
    var d = new Date();
    var hh = d.getHours()
    var mm = d.getMinutes()
    var ss = d.getSeconds()
    
   
    this.setState({
      clickCount:this.state.clickCount+1,
      logs:[...this.state.logs,hh+":"+mm+":"+ss]
    })
    this.updateScroll()
  }
  updateScroll(){
    var element = document.getElementById("logs");
    element.scrollTop = element.scrollHeight;
  }
  render(){
    return (
      <div className='App'>
          <div className="row">
              <Logo/>
              <Header/>
          </div>
          <div className="row">
              <div className="col">
                  <Sidebar handleClick={this.handleClick}/>
              </div>
              <div className="col">
                <Content logs={this.state.logs}/>
                <Footer clickCount={this.state.clickCount}/>
              </div>
  
          </div>
  
      </div>
    );
  }
  
}

export default App;
