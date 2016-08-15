import React from "react";
import {connect} from "react-redux";

import Search from "../components/Searcher"

var AddFieldForm = React.createClass({
    getInitialState() {
        return {
            error: false,
            errorMessage:"",
            showFieldForm: false
        }
    },

    cancelAddField(){
      this.setState({
        showFieldForm: false,
        error: false,
        errorMessage: ""
      });
    },

    displayAddFieldValueForm(){
      this.setState({
        showFieldForm: true
      });
    },

    blankInputEntered(){
      var fieldValue = this.refs.fieldValue.value;
      if (fieldValue.length == 0){
        this.setState({
          error: true,
          errorMessage: "Kindly enter a value for the field to be added"
        });
        this.refs.fieldValue.focus();
        return true;
      }
      return false;
    },

    saveFieldValue(e){
      e.preventDefault();

      var error = this.blankInputEntered();
      console.log("Variable Error state ", error);
      if (!error){
        this.props.onSaveFieldValue(this.refs.fieldValue.value);
        this.setState({
          error: false,
          errorMessage: "",
          showFieldForm: false
        });
      }

    },

    render() {
      var displayError = () =>{
        console.log("State Error State", this.state.error);
        if (this.state.error){
          return(
  					<div>
  						<p class="error">{this.state.errorMessage}</p>
  					</div>
  				);
        }
        else{
          return(
            <p></p>
          );
        }
      }

        var renderAddFieldValueForm = () =>{
    			if (!this.state.showFieldForm){
    				return(
    					<div>
                  <div class="row row-header">
                    <div class="col-xs-12 col-sm-4 col-lg-6 col-md-4">
                    </div>
                    <div class="col-xs-12 col-sm-4 col-lg-2 col-md-2">
                        <div class="form-group">
                            <button type="submit" class="btn btn-form" disabled={this.props.addFieldButtonDisabled} onClick={this.displayAddFieldValueForm}>
                              <span class="glyphicon glyphicon-plus" aria-hidden="true">  </span>
                            &nbsp; Add New Value
                          </button>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-lg-4 col-md-4">
                      <Search onSearch={this.handleSearch} placeholder = "Search for field value here"/>
                    </div>
                  </div>
  					  </div>
    				);
    			}
    			else {
    				return(
    					<div>
    						<p></p>
    						<div class="row row-header">
                  <div class="col-xs-12 col-sm-5 col-lg-5 col-md-5">
                      {displayError()}
                  </div>
    							<div class="col-sm-4 col-lg-4 col md-4">
                    	<input type="text" ref="fieldValue" class="form-control" placeholder="Enter name of field value here"/>
    							</div>
    							<div class="col-sm-3 col-lg-3 col-md-3">
    								<button type="button" onClick={this.saveFieldValue} class="btn btn-sm btn-success">
                        <span class="glyphicon glyphicon-save" aria-hidden="true">  </span>
                        &nbsp; Save
                    </button>
                    &emsp;
                    &emsp;

    								<button type="button" onClick={this.cancelAddField} class="btn btn-sm btn-danger">
                        <span class="glyphicon glyphicon-remove" aria-hidden="true">  </span>
                        &nbsp; Cancel
                    </button>
    							</div>
    						</div>
    					</div>
    				);
    			}
    		};
        return (
            <div>
                {renderAddFieldValueForm()}
            </div>
        );
    }
});
module.exports = connect(
	(store) => {
		return {
			addFieldButtonDisabled: store.addFieldButtonState,
      formFields: store.formFields,
      formFieldValues: store.formFieldValues
		};
	}
)(AddFieldForm);
