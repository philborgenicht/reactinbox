import React, {Component} from 'react'

const Message = (props) => {
  return (
    // <div classNameName="list-group-item">
    //   <div className="row">
    //     <div className="col-lg-2">{props.subject}</div>
    //     <div className="col-lg-2"><input type="checkbox"/></div>
    //     <div className="col-lg-2"><input type="checkbox"/></div>
    //     <div className="col-lg-2">{props.body}</div>
    //     <div className="col-lg-2">{props.labels}</div>
    //     <div className="col-lg-2">{props.id}</div>
    //   </div>
    // </div>
    <div class="row message unread">
      <div class="col-xs-1">
        <div class="row">
          <div class="col-xs-6">
            <input type="checkbox" />
          </div>
          <div class="col-xs-6">
            <i class="star fa fa-star-o"></i>
          </div>
        </div>
      </div>
      <div class="col-xs-11">
      <div class="row">
        <div class="col-xs-3">
                            <div>
                              {props.subject}
                            </div>
        </div>
        <div class="col-xs-3">
                            <div>
                              {props.body}
                            </div>
        </div>
        <div class="col-xs-3">
        {props.labels}
        </div>
        <div class="col-xs-3">
        {props.id}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Message
