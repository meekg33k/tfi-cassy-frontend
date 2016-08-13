"use strict"

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory } from "react-router";
import BreadCrumb from "react-breadcrumbs";


export default React.createClass({

	render(){
		return(
			    <div>
			        <div class="container">
			            <div class="row row-header">
			                <div class="col-xs-12 col-sm-12 col-lg-12 col md-12">
                        <p ></p>
												<br />
												<BreadCrumb routes={this.props.routes} separator =" >> "/>
												<br />
                        <img src="../assets/images/reports.jpg" class="img-responsive"></img>
                        <p ></p>
			                </div>
			            </div>
			        </div>
			    </div>
		);
	}
});
