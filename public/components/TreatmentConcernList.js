"use strict";

import React from "react";

import TreatmentConcern from "../components/TreatmentConcern"



export default React.createClass({

	getInitialState(){

		return {
			treatmentConcerns: [
				{
					id: 898091,
					name: "Anxiety"
				}, {
					id: 777118,
					name: "Health Issues"
				},
				{
					id: 111227,
					name: "Impulsivity"
				}
			]
		}
	},

	addNewConcern(){
		this.setState({
			treatmentConcerns: [
				...this.state.treatmentConcerns,
				{
					id: Date.now(),
					name: this.refs.concern.value
				}
			],
		});
	},

	render(){
		var renderTreatmentConcerns = () => {
			return this.state.treatmentConcerns.map((treatmentConcern) => {
				return (
					<TreatmentConcern key={treatmentConcern.id} {...treatmentConcern}></TreatmentConcern>
				);
			});
		};

		return (
			<div>
				{renderTreatmentConcerns()}
				<div class="row">
					<div class="col-xs-12 col-sm-6 col-lg-6 col-md-6">
							<select class="form-control" ref="concern">
								<option>Child Abuse</option>
								<option>Cyber Issues</option>
								<option>Depression</option>
								<option>Eating Disorder</option>
								<option>Legal Issues</option>
							</select>
					</div>
					<div class="col-xs-12 col-sm-4 col-lg-4 col-md-4">
							<div class="form-group">
									<button type="submit" class="btn btn-danger" onClick={this.addNewConcern}>
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
