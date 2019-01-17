import React, {Component} from 'react'
import Composition from './composition.js'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Toolbar extends Component{



render(){
  return(


    <div class="row toolbar">
      <div class="col-md-12">
        <p class="pull-right">
          <span class="badge badge">2</span>
          unread messages
        </p>
<Router>
<Route path="/composition" render={()=> <Composition sendMessage={this.props.sendMessage}/>}/>
</Router>
<Router>
<Link to="/composition">Compose new...</Link>
</Router>
        <a onClick={this.props.selectAll} class="btn btn-danger">
          <i class="fa fa-plus"></i>
        </a>

        <button onClick={this.props.deselectAll} class="btn btn-default">
          <i class="fa fa-minus-square-o"></i>
        </button>

        <button onClick={this.props.highlight} class="btn btn-default">Mark As Read</button>

        <button onClick={this.props.unlight} class="btn btn-default">Mark As Unread</button>

        <select class="form-control label-select">
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>
        <button onClick={this.props.applyLabel}>applylabel</button>

        <select class="form-control label-select">
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>
        <button onClick={this.props.removeLabel}>removelabel</button>

        <button onClick={this.props.delete} class="btn btn-default">
          <i class="fa fa-trash-o"></i>
        </button>
      </div>
    </div>


  )
}

}

export default Toolbar
