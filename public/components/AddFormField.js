import React from 'react';

import Search from "../components/Searcher"

export default React.createClass({

    getInitialState() {
        return {
            showFieldForm: false
        }
    },

    cancelAddField(){
      this.setState({
        showFieldForm: false
      });
    },

    displayAddFieldValueForm(){
      this.setState({
        showFieldForm: true
      });
    },

    saveField(){
      this.setState({
        showFieldForm: true
      });
    },

    render() {

        var renderAddFieldValueForm = () =>{
    			if (!this.state.showFieldForm){
    				return(
    					<div>
                  <div class="row row-header">
                    <div class="col-xs-12 col-sm-6 col-lg-6 col-md-6">
                        <p></p>
                    </div>
                    <div class="col-xs-12 col-sm-2 col-lg-2 col-md-2">
                        <div class="form-group">
                            <button type="submit" class="btn btn-form" onClick={this.displayAddFieldValueForm}>
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
    						<div class="row">
                  <div class="col-xs-12 col-sm-5 col-lg-5 col-md-5">
                      <p></p>
                  </div>
    							<div class="col-sm-4 col-lg-4 col md-4">
                    	<input type="text" ref="firstName" class="form-control" placeholder="Enter name of field value here"/>
    							</div>
    							<div class="col-sm-3 col-lg-3 col-md-3">
    								<button type="button" onClick={this.saveField} class="btn btn-sm btn-success">
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
