import logo from './logo.svg';
import './App.css';
import Greet1 from './components/Greet'
import Welcome  from './components/Welcome';
import Hello from './components/TestJSX';
import Xyz from './components/UnderStandingProps';
import TestState from './components/TestSatate';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBinding';
import { Component } from 'react';
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter';

class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <Greet1 /> */}
      {/* <Welcome /> */}
     {/* <Hello /> */}
     
     {/* <Xyz name="Sumit" heroName="batman" >
       <button>Action</button>
     </Xyz>
     <Xyz name="Ravi" heroName="Superman" /> */}
    {/* < Counter /> */}
    {/* <FunctionClick/>
    <ClassClick/> */}
    {/* <EventBind /> */}
    <HookCounter/>
    </div>
  );
  }
}

export default App;
