"use strict";

import React from "react";

export default React.createClass({

	render(){
		return (
			<div>
				<div>
			     	<p>Academic Stress &emsp; &emsp; 
			     	<button type="button" class="btn btn-sm btn-success"> 
	                    <span class="glyphicon glyphicon-check" aria-hidden="true">  </span>
	                    Mark as Resolved
	            	</button>
	                </p>
	                <p>Anger &emsp; &emsp; 
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