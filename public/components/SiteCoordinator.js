"use strict"

import React from "react";

export default React.createClass({
  	render(){
		return (
			<div>
		     	<p><b>Site Coordinator</b> &emsp; &emsp; {this.props.name} &emsp; &emsp;  
		     	<button type="button" class="btn btn-sm btn-danger"> 
                    <span class="glyphicon glyphicon-edit" aria-hidden="true">  </span>
                    &nbsp;Edit Details
            	</button>
                </p>
		    </div>
		);
	}
});

	