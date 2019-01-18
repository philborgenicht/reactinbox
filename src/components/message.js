import React, {Component} from 'react'

const Message = (props) => {
  return (
    <div class={props.selected? "row message selected" : "row message unread"&&  props.read? "row message read" : "row message unread"} >
      <div class="col-xs-3">
        <div class="row">
          <div class="col-xs-4">
            <input id={props.id} onClick={props.select} type="checkbox" />
          </div>
          <div class="col-xs-4">
            <i id={props.id} onClick={props.star} class={props.starred? "star fa fa-star" : "star fa fa-star-o"} ></i>
          </div>
          <div class="col-xs-4">
            <input id={props.id} onClick={props.readMessage} type="checkbox" />
          </div>

        </div>
      </div>
      <div class="col-xs-9">
            <div class="row">

            <div class="col-xs-9">

                {props.subject}
            </div>
            <div class="col-xs-3">
                {props.labels? props.labels[0] ? <span class="label label-warning">dev</span> : "" :""}
                {props.labels? props.labels[1]?<span class="label label-warning">gschool</span> : "" : ""}
            </div>


            </div>
      </div>
    </div>
  )
}

export default Message
