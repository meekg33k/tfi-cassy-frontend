"use strict";

import React from "react";

import Util from "../../apis/Helper"


export default React.createClass({

	getInitialState(){

		return {
			problems: [
				{
					id: 898091,
					name: "Academic Stress"
				}, {
					id: 777118,
					name: "Anger"
				},
				{
					id: 111227,
					name: "Anxiety"
				},
				{
					id: 898081,
					name: "Bullying"
				}
			]
		}
	},

	addNewProblem(){
		this.setState({
			problems: [
				...this.state.problems,
				{
					id: Date.now(),
					name: this.refs.problem.value
				}
			],
		});
	},

	render(){

		var renderProblems = () => {
			return this.state.problems.map((problem) => {
				return (
					<p key={problem.id}> {problem.name}</p>
				);
			});
		};
		return (
			<div>
				{renderProblems()}
				<div class="row">
					<div class="col-xs-12 col-sm-6 col-lg-6 col-md-6">
							<select class="form-control" ref="problem">
								<option>Child Abuse</option>
								<option>Cyber Issues</option>
								<option>Depression</option>
								<option>Eating Disorder</option>
								<option>Legal Issues</option>
							</select>
					</div>
					<div class="col-xs-12 col-sm-4 col-lg-4 col-md-4">
							<div class="form-group">
									<button type="submit" class="btn btn-danger" onClick={this.addNewProblem}>
										<span class="glyphicon glyphicon-plus" aria-hidden="true">  </span>
									&nbsp; Add New Value
								</button>
							</div>
					</div>
				</div>
			</div>
		);
	}

});
