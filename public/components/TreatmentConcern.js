"use strict";

import React from "react";

import Util from "../../apis/Helper"


export default React.createClass({

	getInitialState(){
		return {
      id: this.props.id,
			name: this.props.name,
      resolved: false
		}
	},

	markResolved(){
		this.setState({
			resolved: true
		});
	},

  undoMarkAsResolved(){
    this.setState({
      resolved: false
    });
  },

	render(){

    var renderTreatmentConcern = () => {
      if (this.state.resolved){
        return(
          <div class="row">
  					<div class="col-xs-12 col-sm-6 col-lg-6 col-md-6">
              <p><strike>{this.state.name}</strike> </p>
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
            <p>{this.state.name} &emsp;
            <button type="button" onClick={this.markResolved} class="btn btn-sm btn-success">
                    <span class="glyphicon glyphicon-check" aria-hidden="true"></span>
                    &nbsp; Resolved
              </button>
            </p>
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
