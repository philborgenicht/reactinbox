import React, {Component} from 'react'
import Message from './message.js'

const Messages = (props) => {
  return (
    <div className="container">
      <h1>Inbox</h1>

      <div className="list-group">

        <div className="list-group-item">

          <div className="row">

            <div className="col-lg-1 columnheading">selected</div>
            <div className="col-lg-1 columnheading">starred</div>
            <div className="col-lg-1 columnheading">read</div>
            <div className="col-lg-7 columnheading">subject</div>

            <div className="col-lg-2 columnheading">labels</div>



          </div>
        </div>
        <div>
        {props.messages.map(message =>
          <Message
          key={message.id}
          subject={message.subject}
          read={message.read}
          readMessage={props.readMessage}
          starred={message.starred}
          body={message.body}
          labels={message.labels}
          id={message.id}
          select={props.select}
          star={props.star}
          selected={message.selected}
          seeMessage={props.seeMessage}
            />)}

        </div>
      </div>
    </div>
  )
}

export default Messages
