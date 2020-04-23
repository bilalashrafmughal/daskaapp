import React, { Component } from 'react';
import './App.css';
import Routes from './Components/Routes/Routes';
import Navbar from './Components/Navbar/Navbar';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Navbar/>
        <Routes />
      </div>
    )
  }
}

export default App;
