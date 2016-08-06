"use strict"

import React from "react";
import ReactDOM from "react-dom";


export default React.createClass({
  	render() {
	    return (
	    	<div>
				<div class="container">
			        <p class="line-breaker" />
			        <div class="row row-header">
			            <div class="col-xs-12 col-sm-12 col-lg-12 ccol md-12">
			                <p class="student-header">Add Student</p>
			            </div>
			        </div>
			        <div class="row row-header report-form">
			            <p>Use this form to add new student to the CASSY system</p>
			            <p class="line-breaker" />
			            <form class="form-horizontal" role="form">
			                <div class="form-group">
			                    <label for="studentName" class="col-sm-2 control-label">Student Name</label>
			                    <div class="col-sm-5">
			                      <input type="text" class="form-control" id="studentName" placeholder="" />
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="grade" class="col-sm-2 control-label">Grade</label>
			                    <div class="col-sm-5">
			                        <select class="form-control" id="grade">
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
			                        <select class="form-control" id="eventType">
			                            <option>Ranswood Elementary</option>
			                            <option>ABC HighSchool</option>
			                            <option>XYZ College</option>
			                        </select>
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="gender" class="col-sm-2 control-label">Gender</label>
			                    <div class="col-sm-5">
			                        <select class="form-control" id="gender">
			                            <option>Male</option>
			                            <option>Female</option>
			                            <option>Not specified</option>
			                        </select>
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="ethnicity" class="col-sm-2 control-label">Ethnicity</label>
			                    <div class="col-sm-5">
			                        <select class="form-control" id="ethnicity">
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
			                    <label for="referral" class="col-sm-2 control-label">Referral Source</label>
			                    <div class="col-sm-5">
			                        <select class="form-control" id="referral">
			                            <option>Self</option>
			                            <option>Peer</option>
			                            <option>Parent</option>
			                            <option>School Staff</option>
			                            <option>Other Adult</option>
			                            <option>Seen Last Year</option>
			                            <option>Classroom Presentation</option>
			                        </select>
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="presentingIssue" class="col-sm-2 control-label">Presenting Issue</label>
			                    <div class="col-sm-5">
			                        <select class="form-control" id="referral">
			                            <option>Academic Stress</option>
			                            <option>Anger</option>
			                            <option>Anxiety</option>
			                            <option>Bullying (aggressor)</option>
			                            <option>...</option>
			                            <option>Substance Abuse/Family</option>
			                            <option>Suicidality</option>
			                        </select>
			                    </div>
			                </div>
	                        <div class="form-group">
	                            <label class="col-sm-2 control-label">Free / Reduced Lunch</label>
	                              <div class="checkbox col-sm-5">
	                                <label>
	                                  <input type="checkbox" />
	                                </label>
	                            </div>
	                        </div>
			                <p class="line-breaker"></p>
                      <div class="form-group">
    	                    <div class="col-sm-offset-2 col-sm-10">
    	                        <button type="submit" class="btn btn-success">
    	                        	<span class="glyphicon glyphicon-plus" aria-hidden="true">  </span>
    		                    	&nbsp; Add Student
    	                    	</button>
    	                    </div>
    	                </div>
			            </form>
			        </div>
			    </div>
			</div>
		);
  }
});
