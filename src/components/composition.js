import React, {Component} from 'react'
import App from "../App.js"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Composition extends Component{
  render(){
    return(
      <form onSubmit={this.props.sendMessage} class="form-horizontal well">
        <div class="form-group">

<Link to="/App">return to inbox</Link>

          <div class="col-sm-8 col-sm-offset-2">
            <h4>Compose Message</h4>
          </div>
        </div>
        <div class="form-group">
          <label for="subject" id="subject" name="subject" class="col-sm-2 control-label">Subject</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="subject" placeholder="Enter a subject" name="subject"/>
          </div>
        </div>
        <div class="form-group">
          <label for="body" id="body" name="body" class="col-sm-2 control-label">Body</label>
          <div class="col-sm-8">
            <textarea name="body" id="body" class="form-control"></textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-8 col-sm-offset-2">
            <input type="submit" value="Send" class="btn btn-primary"/>
          </div>
        </div>
      </form>
    )
  }
}

export default Composition
