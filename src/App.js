import React from 'react';

import './App.css';
import KeyPad from './components';
import Result from './result';


class App extends React.Component{
  
  constructor(props)
  {
    super(props);
    this.state={
      result:'',
      cal:false
    }
  }
  calculate(){
  try{
     this.setState({
      result:(eval(this.state.result)||"")+"",
      cal:true
     })
  }
  catch(e){
    this.setState({result:"ERROR"});
  }

  }
  reset(){
    this.setState({result:""});

  }
  backspace()
  {
    this.setState({
      result:this.state.result.slice(0,-1)
    })
  }

  onClick=x=>{
    if(x==="C")this.reset();
    else if(x==="CE")this.backspace();
    else if(x==="=")this.calculate();
    else{
      
        if(this.state.cal==true)
        this.setState({result:x   , cal:false})
        else
        this.setState({result: (this.state.result==="ERROR"? "":this.state.result) +x});
      
    }

  }
  render(){
    return(
      <div>
        
        
      <div className="APP">
        
      <div >
      <div className="text1">CALCULATOR</div>
        <div className="resullt">{this.state.result}</div>
        <KeyPad onClick={this.onClick}/>
      </div>
      </div>
      </div>

    );
  }
}

export default App;
