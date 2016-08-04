"use strict"

import React from "react";

export default React.createClass({
  	render(){
		return (
			<div>
		     	<p><b>Therapists</b></p> 
		     	<p> Therapist 1 </p>
		     	<p> Therapist 2 </p>
		     	<p> Therapist 3 </p>
		     	<p> <input type="text" placeholder="Enter name of therapist" /> &emsp; &emsp; 
		     	<button type="button" class="btn btn-sm btn-success"> 
                    <span class="fa fa-plus-circle" aria-hidden="true"> </span>
                    Add New Therapist
            	</button>
            	</p>
                
		    </div>
		);
	}
});

	