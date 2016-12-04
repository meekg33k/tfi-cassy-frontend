"use strict"

import React from "react";
import {connect} from "react-redux"

var SiteCoordinator = React.createClass({

    getInitialState(){
  		return {
    		editing: false,
        name: ""
  		}
  	},

    startEdit(e){
      e.preventDefault();
      this.setState({
        editing: true
      });
    },

    saveEdit(e){
      e.preventDefault();
      //make api call to set sitecoordinator with--->this.refs.sitecoordinator.value;
      //on success, save state
      this.setState({
        editing: false,
        name: this.refs.name.value
      });
    },

    cancelEdit(e){
      e.preventDefault();
      this.setState({
        editing: false
      });
    },

  	render(){

      var renderSiteCoordinators = () => {
        return this.props.siteCoordinators.map((staffOption) => {
          var staffName = staffOption.first_name+" "+staffOption.last_name;
          return (
            <option key={staffOption.user_id} value={staffOption.user_id}>{staffName}</option>
          );
        });
      };

      var renderMessage = () => {
        if (!this.state.editing){
      		return (
            <div>
      		     	<p><b>Site Coordinator</b> &emsp; &emsp; {this.state.name} &emsp; &emsp;
        		     	<button type="button" onClick={this.startEdit} class="btn btn-sm btn-warning">
                        <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
                        &nbsp;Edit Details
                	</button>
                </p>
      		  </div>
          );
        }
        else {
          return(
      			<div class="row">
              <div class="col-sm-2 col-lg-2 col md-2">
                <p><b>Site Coordinator</b> &emsp; &emsp; </p>
              </div>
              <div class="col-sm-3 col-lg-3 col md-3">
                <select class="form-control" ref="sitecoordinator" onChange={this.printId}>
                    {renderSiteCoordinators()}
                </select>
              </div> &emsp; &emsp;
              <div class="col-sm-6 col-lg-6 col md-6">
                <button type="button" onClick={this.saveEdit} class="btn btn-sm btn-success">
                    <span class="glyphicon glyphicon-save" aria-hidden="true"></span>
                    &nbsp; Save
                </button>
                &emsp;
                &emsp;

                <button type="button" onClick={this.cancelEdit} class="btn btn-sm btn-danger">
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                    &nbsp; Cancel
                </button>
              </div>
            </div>
          );
        }
      };
      return(
        <div>
          {renderMessage()}
        </div>
      );
	}
});

module.exports = connect(
  (store) => {
    return {
      siteCoordinators: store.siteCoordinators
    };
  }
)(SiteCoordinator);
