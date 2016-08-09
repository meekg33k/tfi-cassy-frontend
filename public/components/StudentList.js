"use strict";

import React from "react";
import ReactDOM from "react-dom";

import Student from "../components/Student"


export default React.createClass({

	getInitialState(){
		return {
			students: this.props
		};
	},


	render(){

		var {students} = this.props;

		var renderMessage = () => {
			if (students.length == 0){

				return(
					<div>
						<p>No student details found. You can click on the Add Student button to add the student</p>
					</div>
				);

			}
			else {
				return(
					<div>
				        <div class="row">
							<div class="col-sm-2 col-lg-2 col md-2">
								<b>First Name</b>
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								<b>Last Name</b>
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								<b>Grade</b>
							</div>
							<div class="col-sm-6 col-lg-6 col md-6">
								<b>School</b>
							</div>
						</div>
						<br />
			            {renderStudents()}
		            </div>
	            );
			}
		};

		var renderStudents = () => {
			return students.map((student) => {
				return (
					<Student key={student.id} onEdit={this.props.onEditStudent} onDelete={this.props.onDeleteStudent}
					{...student}/>
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
