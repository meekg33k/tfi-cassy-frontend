"use strict";

import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";

import FieldValue from "../components/FieldValue"
import SearchProcessor from "../../apis/Helper"


var FormFieldList = React.createClass({

	render(){
    var searchString = "";
    var values = SearchProcessor.filterEvents(this.props.formFieldValues, searchString);
    var renderValues = () => {
      return this.props.formFieldValues.map((event) => {
        return (
          <FieldValue key={event.id} onEdit={this.props.onEditEvent} onDelete={this.props.onDeleteEvent}
          {...event}/>
        );
      });
    };

		var renderMessage = () => {
      if (this.props.selectedField == "--None--"){
				return(
					<div>
						<p>You did not select a valid option. Kindly use the dropdown above to select a field</p>
					</div>
				);
			}
      else{
          if (values.length == 0){
            return(
              <div>
                <p>No values for this field. Use on the Add New Value button to add a new value for this field</p>
              </div>
            );
          }
          else {
            return(
              <div>
                <div class="row">
                  <div class="col-sm-2 col-lg-2 col-md-2">
                    <p></p>
                  </div>
                  <div class="col-sm-4 col-lg-4 col-md-4">
                    <b>Field Value</b>
                  </div>
                  <div class="col-sm-6 col-lg-6 col-md-6">
                    <b>Actions</b>
                  </div>
                </div>
                <br />
                {renderValues()}
              </div>
              );
          }
      }
		};

		return(
			<div>
				<div class="container">
			        <br />
			        <div class="row row-header">
				        <div class="well width-well">
				        	{renderMessage()}
				        </div>
			        </div>
			    </div>
			</div>
		);
	}
});
module.exports = connect(
	(store) => {
		return {
      selectedField: store.selectedFiel,
			addSchool: store.addSchoolState,
      formFields: store.formFields,
      formFieldValues: store.formFieldValues
		};
	}
)(FormFieldList);
