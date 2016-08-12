"use strict";

import React from "react";
import ReactDOM from "react-dom";
import uuid from "node-uuid";

import ApiRequester from "../../apis/ApiRequester"


export default React.createClass({

	getInitialState(){
		return {
			error: false,
			errorMessage: ""
		};
	},

	ensureInputEntered(){
		var name = this.refs.name.value;

		if (name.length == 0){
			this.setState({
				error: true,
				errorMessage: "Kindly enter school name"
			});

			this.refs.name.focus();
			return false;
		}
		return true;
	},

	validateInput(){

		var name = this.refs.name.value;

		var regex = /\d/;
		var regexTwo = /^[a-zA-Z]+$/;

		if ((name.match(regex) != null) || (name.match(regexTwo) == null)){
			this.setState({
				error: true,
				errorMessage: "Invalid input for school's name"
			});

			this.refs.name.focus();
			return false;
		}

		return true;
	},


	addSchool(e){

		e.preventDefault();

		if (this.ensureInputEntered() && this.validateInput()){
			this.props.onAddSchool({
				id: Date.now(),
				name: this.refs.name.value,
				address: this.refs.address.value,
				principal: this.refs.principal.value,
				contact: this.refs.contact.value,
				contactEmail: this.refs.contactEmail.value,
				district: this.refs.district.value,
				siteCoordinator: this.refs.siteCoordinator.value
			});
			this.refs.name.value = '';
			this.refs.address.value = '';
			this.refs.principal.value = '';
			this.refs.contact.value = '';
			this.refs.contactEmail.value = '';
		}
	},

	exitAddSchool(e){
		e.preventDefault();
		this.props.onExitAddSchool();
	},

	render(){
		var displayError = () =>{
			if (this.state.error){
				return(
					<div>
						<p class="error">{this.state.errorMessage}</p>
					</div>
				);
			}

		};

		return(
			<div class="well">
				<div class="row row-header">
					<div class="col-xs-12 col-sm-12 col-lg-12 col md-12">
						<p class="school-header">Add School</p>
					</div>
				</div>
				<br />
				{displayError()}
				<br />
				<form class="form-horizontal" role="form">
                <div class="form-group">
                    <label for="schoolName" class="col-sm-2 control-label">School Name</label>
                    <div class="col-sm-5">
                      <input type="text" class="form-control" ref="name" placeholder="" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="eventType" class="col-sm-2 control-label">Address</label>
                    <div class="col-sm-5">
                        <textarea class="form-control" ref="address" rows="5">
												</textarea>
                    </div>
                </div>
                <div class="form-group">
                    <label for="principal" class="col-sm-2 control-label">Principal</label>
                    <div class="col-sm-5">
                      <input type="text" class="form-control" ref="principal"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="contact" class="col-sm-2 control-label">Primary Contact</label>
                    <div class="col-sm-5">
                      <input type="text" class="form-control" ref="contact"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="contactEmail" class="col-sm-2 control-label">Primary Contact Email</label>
                    <div class="col-sm-5">
                      <input type="email" class="form-control" ref="contactEmail"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="district" class="col-sm-2 control-label">School District</label>
                    <div class="col-sm-5">
                        <select class="form-control" ref="district">
                            <option>Milpitas</option>
                            <option>Palo Alto</option>
                            <option>Cupertino</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="district" class="col-sm-2 control-label">Site Coordinator</label>
                    <div class="col-sm-5">
                        <select class="form-control" ref="siteCoordinator">
                            <option>Eve Johnson</option>
                            <option>John Doe</option>
                            <option>Jill Smith</option>
                        </select>
                    </div>
                </div>
                <p class="line-breaker"></p>
							<div class="form-group">
	                <div class="col-sm-offset-2 col-sm-10">
	                    <button type="submit" class="btn btn-success" onClick={this.addSchool}>
                        	<span class="glyphicon glyphicon-save" aria-hidden="true"></span>
	                    	&nbsp; Save
                    	</button>&nbsp; &nbsp; &nbsp;
											<button class="btn btn-danger" onClick={this.exitAddSchool}>
												<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
												&nbsp; Cancel
											</button>
	                </div>
                </div>
            </form>
			</div>
		);
	}

});
