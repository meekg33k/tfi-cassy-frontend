"use strict";

import React from "react";

export default React.createClass({

	render(){
		return (
			<div>
				<div>
			     	<p>Anxiety &emsp; 
			     	<button type="button" class="btn btn-sm btn-success"> 
	                    <span class="glyphicon glyphicon-check" aria-hidden="true">  </span>
	                    Mark as Resolved
	            	</button>
	                </p>
	                <p>Anger &emsp;
			     	<button type="button" class="btn btn-sm btn-success"> 
	                    <span class="glyphicon glyphicon-check" aria-hidden="true">  </span>
	                    Mark as Resolved
	            	</button>
	                </p>
			    </div>
			</div>
		);
	}

});