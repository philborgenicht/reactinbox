import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Composition from './components/composition.js'
import Messages from './components/messages.js'
import Toolbar from './components/toolbar.js'

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {

  state={
    messages:[]
  }
  async componentDidMount() {
  const response = await fetch('http://localhost:8082/api/messages')
  const json = await response.json()
  this.setState({messages: json})
  }



select=(e)=>{
  console.log(e.target.id)
  let id=e.target.id
  let messages=this.state.messages
  console.log(messages)
  let selected=messages[id-1]
  console.log(selected)
  let newmessages= {...selected, selected: (!selected.selected)}
  console.log(newmessages)
  let selectedindex=messages.indexOf(selected)
  console.log(selectedindex)
  this.setState({
    messages: [...this.state.messages.slice(0, selectedindex), newmessages ,...this.state.messages.slice(selectedindex+1)]
  })
}
star=(e)=>{
  console.log(e.target.id)
  let id=e.target.id
  let messages=this.state.messages
  console.log(messages)
  let starred=messages[id-1]
  console.log(starred)
  let newmessages= {...starred, starred: (!starred.starred)}
  console.log(newmessages)
  let starredindex=messages.indexOf(starred)
  console.log(starredindex)
  this.setState({
    messages: [...this.state.messages.slice(0, starredindex), newmessages ,...this.state.messages.slice(starredindex+1)]
  })
  fetch('http://localhost:8082/api/messages', {
    method: 'PATCH',
    body: JSON.stringify({
      "messageIds": [id],
      "command": "star",
      "starred": true
    }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}

readMessage=(e)=>{
  console.log(e.target.id)
  let id=e.target.id
  let messages=this.state.messages
  console.log(messages)
  let read=messages[id-1]
  console.log(read)
  let newmessages= {...read, read: (read.read? false: true)}
  console.log(newmessages)
  let readindex=messages.indexOf(read)
  console.log(readindex)
  this.setState({
    messages: [...this.state.messages.slice(0, readindex), newmessages ,...this.state.messages.slice(readindex+1)]
  })

  fetch('http://localhost:8082/api/messages', {
    method: 'PATCH',
    body: JSON.stringify({
      "messageIds": [id],
      "command": "read",
      "read": true
    }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}

unlight=(e)=>{

  fetch('http://localhost:8082/api/messages', {
    method: 'PATCH',
    body: JSON.stringify({
      "messageIds": this.state.messages.filter(message=>message.selected===true).map(message=>message.id),
      "command": "read",
      "read": false
    }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })

}

highlight=(e)=>{
  console.log("highlighted")
  console.log(e.target)
  fetch('http://localhost:8082/api/messages', {
    method: 'PATCH',
    body: JSON.stringify({
      "messageIds": this.state.messages.filter(message=>message.selected===true).map(message=>message.id),
      "command": "read",
      "read": true
    }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}

delete=(e)=>{
  console.log("deleted")
  console.log(e.target)
  fetch('http://localhost:8082/api/messages', {
    method: 'PATCH',
    body: JSON.stringify({
      "messageIds": this.state.messages.filter(message=>message.selected===true).map(message=>message.id),
      "command": "delete"
    }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}

selectAll=(e)=>{
  console.log("selectall")
  console.log(this.state.messages.map)
  fetch('http://localhost:8082/api/messages', {
    method: 'PATCH',
    body: JSON.stringify({
      "messageIds": this.state.messages.map(message=> message.id),
      "command": "select",
      "selected": true
    }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })


}

deselectAll=(e)=>{
  console.log("deselect all")
  console.log(e.target)
}

removeLabel=(e)=>{
  console.log('remove')
  console.log(e.target)
}

applyLabel=(e)=>{
  console.log('apply')
  console.log(e.target)
}




  render() {
    return (
      <div className="App container">


      <div className="row justify-content-center">
      <Toolbar sendMessage={this.sendMessage} removeLabel={this.removeLabel} applyLabel={this.applyLabel} selectAll={this.selectAll} deselectAll={this.deselectAll} delete={this.delete} highlight={this.highlight} unlight={this.unlight} Compose={this.Compose}/>
      </div>
      <Messages selected={this.state.messages.selected} messages={this.state.messages} readMessage={this.readMessage} select={this.select} star={this.star}/>
      </div>
    );
  }
}

export default App;
