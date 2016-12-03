"use strict";

import React from "react";
import {connect} from "react-redux";
import moment from "moment";

import Util from "../../apis/Helper"

import * as actions from "../../actions/actions"


var TreatmentConcern = React.createClass({

	markResolved(){
		var {dispatch} = this.props;
		var dispatchMessage = this.props.name + " is marked as resolved";

    dispatch(actions.asyncUpdateStudentTreatment(this.props.student_id, 
        this.props.concern_id, this.props.concern_type, true));

    //This is next stage
		dispatch(actions.addToTimeLine({
			id: Date.now(),
			date: moment().format("MM/DD/YY"),
			activity: "Progress Update",
			description: "Treatment Concern resolution",
			comments: dispatchMessage,
		}));
		this.setState({
			resolved: true
		});
	},

  undoMarkAsResolved(){
		var {dispatch} = this.props;

    dispatch(actions.asyncUpdateStudentTreatment(this.props.student_id, 
        this.props.concern_id, this.props.concern_type, false));

		var dispatchMessage = this.props.name + " is no longer marked as resolved";
		dispatch(actions.addToTimeLine({
			id: Date.now(),
			date: moment().format("MM/DD/YY"),
			activity: "Progress Update",
			description: "Treatment Concern resolution",
			comments: dispatchMessage
		}));
    this.setState({
      resolved: false
    });
  },

	render(){

    var renderTreatmentConcern = () => {
      if (this.props.resolved == 1){
        return(
          <div class="row">
  					<div class="col-xs-12 col-sm-6 col-lg-6 col-md-6">
              <p><strike>{this.props.concern_type}</strike> </p>
            </div>
            <div class="col-xs-12 col-sm-4 col-lg-4 col-md-4">
                <button type="button" onClick={this.undoMarkAsResolved} class="btn btn-sm btn-warning">
                      <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                      &nbsp; Undo Resolved
                </button>
  					</div>
  				</div>
        );
      }
      else{
        return (
    			<div>
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-lg-6 col-md-6">
                    <p>{this.props.concern_type}</p>
                  </div>
                  <div class="col-xs-12 col-sm-4 col-lg-4 col-md-4">
                      <button type="button" onClick={this.markResolved} class="btn btn-sm btn-success">
                            <span class="glyphicon glyphicon-check" aria-hidden="true"></span>
                            &nbsp; Mark as Resolved
                      </button>
                  </div>
              </div>
          </div>
    		);
      }
    };

    return(
      <div>
        {renderTreatmentConcern()}
      </div>

    );
	}
});
module.exports = connect(
	(store) => {
		return {
			timelines: store.timelineState
		};
	}
)(TreatmentConcern);
