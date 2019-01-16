import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Composition from './components/composition.js'
import Messages from './components/messages.js'
import Toolbar from './components/toolbar.js'

class App extends Component {

  state={
    messages:[]
  }

  // Compose=()=>{
  //   console.log("hello world")
  //   console.log(this.state.messages)
  // }

  async componentDidMount() {
  const response = await fetch('http://localhost:8082/api/messages')
  const json = await response.json()
  this.setState({messages: json})
  }


  render() {
    return (
      <div className="App">
      <Toolbar Compose={this.Compose}/>
      <Messages messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
