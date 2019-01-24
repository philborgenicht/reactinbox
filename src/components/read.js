import React, {Component} from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const Read=(props)=>{
  return(

    <div className="container list-group">

    <Link to="/App">return to inbox</Link>
    <div className="list-group-item">
    {props.messages.filter(message=>message.id===props.chosenMessage.id).body}
    </div>
    </div>

  )
}







export default Read
