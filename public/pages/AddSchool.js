"use strict"

import React from "react";
import ReactDOM from "react-dom";
import Search from "../components/Search"


export default React.createClass({
  	render() {
	    return (
	    	<div>
				<div class="container">
			        <p class="line-breaker" />
			        <div class="row row-header">
			            <div class="col-xs-12 col-sm-12 col-lg-12 ccol md-12">
			                <p class="school-header">Add School</p>
			            </div>
			        </div>
			        <div class="row row-header report-form">
			            <p>Use this form to add a new school to the system</p>
			            <p class="line-breaker" />
			            <form class="form-horizontal" role="form">
			                <div class="form-group">
			                    <label for="schoolName" class="col-sm-2 control-label">School Name</label>
			                    <div class="col-sm-5">
			                      <input type="text" class="form-control" id="schoolName" placeholder="" />
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="eventType" class="col-sm-2 control-label">Address</label>
			                    <div class="col-sm-5">
			                        <textarea class="form-control" id="address" rows="10" placeholder="">
                        			</textarea>
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="principal" class="col-sm-2 control-label">Principal</label>
			                    <div class="col-sm-5">
			                      <input type="text" class="form-control" id="principal" />
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="contact" class="col-sm-2 control-label">Primary Contact</label>
			                    <div class="col-sm-5">
			                      <input type="text" class="form-control" id="contact" />
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="contactEmail" class="col-sm-2 control-label">Primary Contact Email</label>
			                    <div class="col-sm-5">
			                      <input type="email" class="form-control" id="contactEmail" />
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="schoolDistrict" class="col-sm-2 control-label">School District</label>
			                    <div class="col-sm-5">
			                        <select class="form-control" id="schoolDistrict">
			                            <option>Milpitas</option>
			                            <option>Palo Alto</option>
			                            <option>Cupertino</option>
			                        </select>
			                    </div>
			                </div>
			                <p class="line-breaker"></p>
			                <div class="form-group">
			                    <div class="col-sm-offset-2 col-sm-10">
			                        <button type="submit" class="btn btn-primary">Add School</button>
			                    </div>
			                </div>
			            </form>
			        </div>
			    </div>
			</div>
		);
  }
});

	