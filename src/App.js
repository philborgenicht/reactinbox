import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Composition from './components/composition.js'
import Messages from './components/messages.js'
import Toolbar from './components/toolbar.js'
import Read from './components/read.js'

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



select=(id)=>{

  let messages=this.state.messages
  console.log(messages)
  let chosen=messages[id-1]
  console.log("chosen", chosen)
  let selected=messages.filter(message=> message.id===id)[0]
  console.log(selected)
  let newmessages= {...selected, selected: (!selected.selected)}
  console.log(newmessages)
  let selectedindex=messages.indexOf(selected)
  console.log(selectedindex)
  this.setState({
    messages: [...this.state.messages.slice(0, selectedindex), newmessages ,...this.state.messages.slice(selectedindex+1)]
  })
}
star=(elid)=>{

  let messages=this.state.messages
  console.log(messages)
  let starred=messages.filter(message=>message.id===elid)[0]
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
      "messageIds": [elid],
      "command": "star",
      "starred": true
    }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}

readMessage=(messId)=>{

  let messages=this.state.messages

  let read=messages.filter(message=>message.id===messId)[0]
  console.log(read)
  let newmessages= {...read, read: (read.read? false: true)}

  let readindex=messages.indexOf(read)

  this.setState({
    messages: [...this.state.messages.slice(0, readindex), newmessages ,...this.state.messages.slice(readindex+1)]
  })

fetch('http://localhost:8082/api/messages', {
  method: 'PATCH',
  body: JSON.stringify({
    "messageIds": [messId],
    "command": "read",
    "read": !read.read
  }),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
}


unlight=(e)=>{
  const newState={...this.state}
  newState.messages.filter(message=>message.selected===true).map(message=>{
    if(message.read){
      message.read = false
    }
  })
  this.setState(newState)
  console.log(e.target.id)
  let id=e.target.id
  let currentMess=this.state.messages
  console.log(id, currentMess)
  let didNotRead=currentMess.filter(message=>message.read===true)
  console.log("not read", didNotRead)
  let didRead=currentMess.filter(message=>message.read===false)
  console.log("did read", didRead)


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
  const newState={...this.state}
  newState.messages.filter(message=>message.selected===true).map(message=>{
    if(!message.read){
      message.read = true
    }
  })
  this.setState(newState)
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

delete=async (e)=>{

  await fetch('http://localhost:8082/api/messages', {
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

  const response = await fetch('http://localhost:8082/api/messages')
  const json = await response.json()
  this.setState({messages: json})
  }







removeLabel=(e)=>{
  const newState={...this.state}
  let newLabel=e.target.value
  let selectedMessages=newState.messages.filter(message=>message.selected===true)
  console.log(selectedMessages)

  selectedMessages.map(message=> message.labels.splice(message.labels.indexOf(newLabel),1))
  this.setState(selectedMessages)

  console.log('remove')
  console.log(e.target)
  fetch('http://localhost:8082/api/messages', {
    method: 'PATCH',
    body: JSON.stringify({
      "messageIds": this.state.messages.filter(message=>message.selected===true).map(message=>message.id),
      "command": "removeLabel",
      "label": e.target.value
    }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}

applyLabel=(e)=>{
  const newState={...this.state}
  let newLabel=e.target.value
  let selectedMessages=newState.messages.filter(message=>message.selected===true)
  console.log(selectedMessages)

  selectedMessages.map(message=> message.labels.push(newLabel))
  this.setState(selectedMessages)

  console.log('apply')
  console.log(e.target)
  fetch('http://localhost:8082/api/messages', {
    method: 'PATCH',
    body: JSON.stringify({
      "messageIds": this.state.messages.filter(message=>message.selected===true).map(message=>message.id),
      "command": "addLabel",
      "label": e.target.value
    }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}

sendMessage=(e)=>{

  console.log('apply')
  console.log(e.target)
  let subject=e.target.subject.value
  let body=e.target.body.value
  console.log(e.target.subject.value)
  console.log(e.target.body.value)
  fetch('http://localhost:8082/api/messages', {
    method: 'POST',
    body: JSON.stringify({
      subject: e.target.subject.value,
      body: e.target.body.value,
      selected: false,
      read: false,
      starred: false,
      labels: [],
    }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}

selectAll=()=>{
  console.log('hello')
  let checkboxes=[...document.getElementsByClassName("phil")]
  checkboxes.map(checkbox=>checkbox.checked="checked")
  console.log(checkboxes)
  let highLightedMessages=this.state.messages.map(message=>message.selected=true)
  this.setState(highLightedMessages)
}

deselectAll=()=>{
  console.log('hello')
  let checkboxes=[...document.getElementsByClassName("phil")]
  checkboxes.map(checkbox=>checkbox.checked="")
  console.log(checkboxes)
  console.log('hello')
  let unHighLightedMessages=this.state.messages.map(message=>message.selected=false)
  this.setState(unHighLightedMessages)
}



  render() {
    return (
      <Router>

      <Switch>

      <Route path="/App" render={()=>
        <div className="App container">
          <div className="row justify-content-center">
            <Toolbar currentMessages={this.state.messages} sendMessage={this.sendMessage} removeLabel={this.removeLabel} applyLabel={this.applyLabel} selectAll={this.selectAll} deselectAll={this.deselectAll} delete={this.delete} highlight={this.highlight} unlight={this.unlight} Compose={this.Compose}/>
            </div>
            <Messages selected={this.state.messages.selected} messages={this.state.messages} readMessage={this.readMessage} select={this.select} star={this.star}/>
            </div>}/>
      <Route path="/composition" render={()=> <Composition
         sendMessage={this.sendMessage}/>}/>
         <Route exact path="/" render={()=> <div className="App container">
           <div className="row justify-content-center">
             <Toolbar currentMessages={this.state.messages} sendMessage={this.sendMessage} removeLabel={this.removeLabel} applyLabel={this.applyLabel} updateMessage={this.updateMessage} selectAll={this.selectAll} deselectAll={this.deselectAll} delete={this.delete} highlight={this.highlight} unlight={this.unlight} Compose={this.Compose}/>
             </div>
             <Messages selected={this.state.messages.selected} messages={this.state.messages} readMessage={this.readMessage} select={this.select} star={this.star}/>
             </div>}/>
      </Switch>




      </Router>
    );
  }
}

export default App;
