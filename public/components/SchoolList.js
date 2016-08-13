"use strict";

import React from "react";
import ReactDOM from "react-dom";

import School from "../components/School"


export default React.createClass({

	getInitialState(){
		return {
			schools: this.props
		};
	},


	render(){

		var {schools} = this.props;

		console.log(schools);

		var renderMessage = () => {
			if (schools.length == 0){
				return(
					<div>
						<p>No school found. You can use the form above to add the school</p>
					</div>
				);
			}
			else {
				return(
					<div>
        		<div class="row">
							<div class="col-sm-2 col-lg-2 col md-2">
								<b>School Name</b>
							</div>
							<div class="col-sm-3 col-lg-3 col md-3">
								<b>Contact Email</b>
							</div>
							<div class="col-sm-1 col-lg-1 col md-1">
								<b>District</b>
							</div>
							<div class="col-sm-6 col-lg-6 col md-6">
								<b>Site Coordinator</b>
							</div>
						</div>
						<br />
      			{renderSchools()}
    			</div>
      		);
			}
		};

		var renderSchools = () => {
			return schools.map((school) => {
				return (
					<School key={school.id} onEdit={this.props.onEditSchool} onDelete={this.props.onDeleteSchool}
					{...school}/>
				);
			});
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
