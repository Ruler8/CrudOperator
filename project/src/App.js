import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Crud from './prototype/Crud';


class App extends Component{
  render(){
    return(
<div className="App">
      <Crud></Crud>
    </div>
    )
  }
}


export default App;
