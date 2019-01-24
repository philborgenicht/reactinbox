import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Read from './read.js'



const Message = (props) => {
  console.log(props.id)
  return (



    <div >

    <div   class={`row message ${props.read? "read": "unread"} ${props.selected? "selected": ""}`} >
      <div class="col-xs-3">
        <div class="row ">
          <div class="col-xs-4">
            <input className="phil" id={props.id} onClick={(e)=> props.select(props.id)} type="checkbox" />
          </div>
          <div class="col-xs-4">
            <i id={props.id} onClick={(e)=> props.star(props.id)} class={props.starred? "star fa fa-star" : "star fa fa-star-o"} ></i>
          </div>

          <div class="col-xs-4">
            <input id={props.id}  onClick={(e)=> props.readMessage(props.id)}type="checkbox" disabled={props.id.read===true? "disabled": ""} />
          </div>



        </div>
      </div>
      <div class="col-xs-9">
            <div class="row">

            <div class="col-xs-6">
                {props.subject}
            </div>
            <div class="col-xs-3">
                {props.labels? props.labels.includes("dev") ? <span class="label label-warning">dev</span> : "" :""}
                {props.labels? props.labels.includes("gschool")?<span class="label label-warning">gschool</span> : "" : ""}
                {props.labels? props.labels.includes("personal")?<span class="label label-warning">personal</span> : "" : ""}
            </div>



            </div>
      </div>
    </div>

    </div>

  )
}

export default Message
