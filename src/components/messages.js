import React, {Component} from 'react'
import Message from './message.js'

const Messages = (props) => {
  return (
    <div className="container">
      <h1>Inbox</h1>

      <div className="list-group">

        <div className="list-group-item">

          <div className="row">

            <div className="col-lg-2 columnheading">read/starred</div>

            <div className="col-lg-3 columnheading">subject</div>
            <div className="col-lg-3 columnheading">body</div>
            <div className="col-lg-2 columnheading">labels</div>
            <div classname="col-lgl-2 columnheading">id</div>


          </div>
        </div>
        <div>
        {props.messages.map(message =>
          <Message
          subject={message.subject}
          read={message.read}
          starred={message.starred}
          body={message.body}
          labels={message.labels}
          id={message.id}
            />)}

        </div>
      </div>
    </div>
  )
}

export default Messages
