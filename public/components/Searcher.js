"use strict";

import React from "react";
import ReactDOM from "react-dom";


export default React.createClass({

	handleSearch(){

		var searchText = this.refs.searchText.value;
		this.props.onSearch(searchText);

	},

	render(){
		return(
			<div>
            <div class="form-group has-feedback">
				    <input type="text" class="form-control" ref="searchText" placeholder={this.props.placeholder} onChange={this.handleSearch}/>
				    <i class="glyphicon glyphicon-search form-control-feedback"></i>
				</div>
			</div>
		);
	}

});
