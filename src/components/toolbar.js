import React, {Component} from 'react'
import Composition from './composition.js'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";





class Toolbar extends Component{




render(){

  return(


    <div class="row toolbar">
      <div class="col-md-12">
        <p class="pull-right">
          <span class="badge badge">{this.props.currentMessages.filter(message=>message.read===false).length}</span>
          unread messages
        </p>
        <Link to="/composition">Compose new...</Link>


        <button onClick={this.props.selectAll} class="btn btn-default" disabled={this.props.currentMessages.filter(message=>message.selected===false).length===0? "disabled": ""}>
          <i class="fa fa-square-o"></i>
        </button>

        <button onClick={this.props.deselectAll} className="btn btn-default" disabled={this.props.currentMessages.filter(message=>message.selected===true).length===0? "disabled": ""}>
          <i class="fa fa-minus-square-o"></i>
        </button>

        <button onClick={this.props.highlight} class="btn btn-default" disabled={this.props.currentMessages.filter(message=>message.selected===true).length===0? "disabled": ""}>Mark As Read</button>

        <button onClick={this.props.unlight} class="btn btn-default" disabled={this.props.currentMessages.filter(message=>message.selected===true).length===0? "disabled": ""}>Mark As Unread</button>

        <select onChange = {this.props.applyLabel}
class="form-control label-select" disabled={this.props.currentMessages.filter(message=>message.selected===true).length===0? "disabled": ""}>
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select onChange = {this.props.removeLabel}
 class="form-control label-select" disabled={this.props.currentMessages.filter(message=>message.selected===true).length===0? "disabled": ""}>
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button onClick={this.props.delete} class="btn btn-default" disabled={this.props.currentMessages.filter(message=>message.selected===true).length===0? "disabled": ""}>
          <i class="fa fa-trash-o"></i>
        </button>
      </div>
    </div>


  )
}

}

export default Toolbar
