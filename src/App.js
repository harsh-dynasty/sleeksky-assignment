import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Sidebar from './components/sidebar'
import Content from './components/content'
import Logo from './components/logo'
import React, { useState } from 'react';

function App(){
  
  const [clickCount, setCount] = useState(0);
  const [logs, setLogs] = useState([]);

  const handleClick = ()=>{
    var d = new Date();
    var hh = d.getHours()
    var mm = d.getMinutes()
    var ss = d.getSeconds()
    
    setCount(clickCount+1)
    setLogs([...logs,hh+":"+mm+":"+ss])
    updateScroll()
  }

  const updateScroll=()=>{
    var element = document.getElementById("logs");
    element.scrollTop = element.scrollHeight;
  }
 
    return (
      <div className='App'>
          <div className="row">
              <Logo/>
              <Header/>
          </div>
          <div className="row">
              <div className="col">
                  <Sidebar handleClick={handleClick}/>
              </div>
              <div className="col">
                <Content logs={logs}/>
                <Footer clickCount={clickCount}/>
              </div>
  
          </div>
  
      </div>
    );
  
  
}

export default App;
