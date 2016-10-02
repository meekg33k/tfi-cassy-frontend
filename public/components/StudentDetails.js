import React from 'react';
import { Link } from "react-router";
import {connect} from "react-redux";

import ApiRequester from "../../apis/ApiRequester.js";
import Util from "../../apis/Helper"

import * as actions from "../../actions/actions"



var StudentDetails = React.createClass({

    getInitialState() {
      return {
          id: this.props.id,
          isEditing: false,
          error: false,
          errorMessage: ""
      }
    },


    ensureInputEntered(){

  		var firstName = this.refs.firstName.value;
  		var lastName = this.refs.lastName.value;

  		if (firstName.length == 0 && lastName.length == 0){
  			this.setState({
  				error: true,
  				errorMessage: "Kindly enter student's first and last names"
  			});

  			this.refs.firstName.focus();
  			return false;
  		}
  		else if (firstName.length == 0){
  			this.setState({
  				error: true,
  				errorMessage: "Kindly enter student's first name"
  			});

  			this.refs.firstName.focus();
  			return false;
  		}
  		else if (lastName.length == 0){
  			this.setState({
  				error: true,
  				errorMessage: "Kindly enter student's last name"
  			});

  			this.refs.lastName.focus();
  			return false;
  		}
  		return true;
  	},

    exitEditStudent(e){
      e.preventDefault();
      this.setState({
        error: false,
        isEditing: false
      });
    },

    initiateEditStudent(e){
      e.preventDefault();
      this.setState({
        isEditing: true
      });
    },

    saveEditStudent(e){
      e.preventDefault();
      var test = this.ensureInputEntered();
      var {dispatch} = this.props;

      if (test) {
        var inputValidator = Util.validateUserInput(this.refs.firstName.value, this.refs.lastName.value);
        console.log("Value of special xter check", inputValidator.state);

        if (!inputValidator.state){
          this.setState({
            error: true,
            errorMessage: inputValidator.errorMessage
          });
          if ((inputValidator.field == "both")){
    					this.refs.firstName.focus();
    			}
    			if (inputValidator.field == "firstName"){
    					this.refs.firstName.focus();
    			}
    			if ((inputValidator.field == "lastName")){
    					this.refs.lastName.focus();
    			}
        }
        else{

          var editedStudent = {
            id: this.state.id,
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            ethnicity: this.refs.ethnicity.value,
            gender: this.refs.gender.value,
            grade: this.refs.grade.value,
            /*  gender: this.state.grade,
            lunchOption: this.state.lunchOption,
            presentingIssue: this.state.presentingIssue,
            referral: this.state.referral,*/
            school: this.refs.school.value
          };

          //Call to server-side API
          ApiRequester.editStudent(editedStudent).then(function(res){
            alert("Changes saved successfully"); //<============ Change all alerts to modals
            dispatch(actions.asyncFetchStudentById(editedStudent.id));

          }, function(err){
            console.log(err);
          });

          this.setState({
            isEditing: false
          });

          return {
            state: true,
            field: ""
          };
        }
      }
    },

    render() {

      var displayError = () =>{
  			if (this.state.error){
  				return(
  					<div>
  						<p class="error">{this.state.errorMessage}</p>
  					</div>
  				);
  			}
  		};

      var renderSchools = () => {
        return this.props.schools.map((school) => {
          var schoolName = school.school_name
          return (
            <option key={school.school_id}>{schoolName}</option>
          );
        });
      };

      var renderProfile= () =>{
  			if (this.state.isEditing){
  				return(
  					<div>
              <br />
      				{displayError()}
      				<br />
              <form class="form-horizontal" role="form" onSubmit={this.saveEditStudent}>
                  <div class="form-group">
                      <label for="firstName" class="col-sm-2 control-label">First Name</label>
                      <div class="col-sm-5">
                        <input type="text" class="form-control" ref="firstName" defaultValue = {this.props.selectedStudent.first_name}/>
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="lastName" class="col-sm-2 control-label">Last Name</label>
                      <div class="col-sm-5">
                        <input type="text" class="form-control" ref="lastName" defaultValue = {this.props.selectedStudent.last_name}/>
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="ethnicity" class="col-sm-2 control-label">Ethnicity</label>
                      <div class="col-sm-5">
                          <select class="form-control" ref="ethnicity">
                            <option>Caucasian</option>
                            <option>Hispanic/Latino</option>
                            <option>Asian</option>
                            <option>African American</option>
                            <option>Pacific Islander</option>
                            <option>Native American</option>
                            <option>Asian Indian</option>
                            <option>Mixed Race</option>
                          </select>
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="gender" ref="gender" class="col-sm-2 control-label">Gender</label>
                      <div class="col-sm-5">
                          <select class="form-control" ref="gender">
                              <option>Male</option>
                              <option>Female</option>
                              <option>Not specified</option>
                          </select>
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="grade" class="col-sm-2 control-label">Grade</label>
                      <div class="col-sm-5">
                          <select class="form-control" ref="grade">
                              <option>Kindergarten</option>
                              <option>1st</option>
                              <option>2nd</option>
                              <option>3rd</option>
                              <option>4th</option>
                              <option>5th</option>
                              <option>6th</option>
                              <option>7th</option>
                              <option>8th</option>
                              <option>9th</option>
                              <option>10th</option>
                              <option>11th</option>
                              <option>12th</option>
                          </select>
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="school" class="col-sm-2 control-label">School</label>
                      <div class="col-sm-5">
                          <select class="form-control" ref="school">
                            {renderSchools()}
                          </select>
                      </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-success">
                            <span class="glyphicon glyphicon-save" aria-hidden="true"></span>
                          &nbsp; Save Changes
                        </button>&nbsp; &nbsp; &nbsp;
                        <button type="submit" class="btn btn-danger" onClick={this.exitEditStudent}>
                          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                        &nbsp; Discard Changes
                      </button>
                    </div>
                  </div>
              </form>
  					</div>
  				);
  			}
        else{
          if (this.props.selectedStudent.first_name){
            return(
              <div>
                  <p></p>
                  <div>
                    <p><b>Name</b>: {this.props.selectedStudent.first_name} {this.props.selectedStudent.last_name}</p>
                    <p><b>Ethnicity</b>: {this.props.selectedStudent.ethnicity}</p>
                    <p><b>Gender</b>: {this.props.selectedStudent.gender}</p>
                    <p><b>Grade</b>: {this.props.selectedStudent.grade}</p>
                    <p><b>School</b>: {this.props.selectedStudent.school}</p>
                  </div>
                  <button type="button" onClick={this.initiateEditStudent} class="btn btn-sm btn-warning" id ="record-event-btn">
                      <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
                      Edit Details
                  </button>
              </div>
            );
          }
          else{
            return(
              <div>
                  <p>Details for student not found. Please return to Students page to select valid student</p>
              </div>
            );
          }
        }
      }
      return (
          <div>
            {renderProfile()}
          </div>
      );
    }
});
module.exports = connect(
  (store) => {
    return {
      schools: store.schools,
      selectedStudent: store.selectedStudent
    };
  }
)(StudentDetails);
