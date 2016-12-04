import React from 'react';

import Therapist from "./Therapist";
import {connect} from "react-redux"

var SchoolTherapists = React.createClass({

    getInitialState() {
        return {
            error: false,
            errorMessage: "Kindly select a therapist using the dropdown",
            therapists: [
              {
                id: 123,
                name: "Eve Johnson"
              },
              {
                id: 677,
                name: "Antonio Lewark"
              },
              {
                id: 900,
                name: "Lionel Messi"
              },
            ]
        }
    },

    addTherapist(e){
      e.preventDefault();
      var state = this.state.therapists;
      var therapistName = this.refs.therapist.value;

      if (therapistName == "--None--"){
        this.setState({
          error: true
        });
      }
      else{
        state.push({
          id: Date.now(),
          name: therapistName
        });
        this.setState({
          error: false,
          therapists: state
        });
        this.refs.therapist.value = "--None--"
      }
    },

    handleDeleteTherapist(therapistId) {
      var victimId;

      if (confirm("Do you want to proceed to delete the therapist?") == true) {
        	for(var i = 0;  i < this.state.therapists.length; i++) {
    		    if (this.state.therapists[i].id === therapistId) {
    		        victimId = i;
    		        break;
    		    }
    			}
          var therapists = this.state.therapists.splice(victimId, 1);
          this.setState(therapists);
          this.setState({
            error: false
          });
      }
    },

    render() {
      var {therapists} = this.state; //Change this to render from the store

      var renderTherapistOptions = () => {
        return this.props.siteCoordinators.map((staffOption) => {
          var staffName = staffOption.first_name+" "+staffOption.last_name;
          return (
            <option key={staffOption.user_id} value={staffOption.user_id}>{staffName}</option>
          );
        });
      };


      var displayErrorMessage = () =>{
        if (this.state.error){
          return(
            <div>
              <p class="error">{this.state.errorMessage}</p>
            </div>
          );
        }
      };

      var renderTherapists = () => {
        return therapists.map((therapist) => {
          return (
            <Therapist key={therapist.id} onDelete={this.handleDeleteTherapist}
  					{...therapist}/>
          );
        });
      };

      return (
          <div>
            <br />
            <p><b>Therapists</b> &emsp; &emsp; </p>
            {renderTherapists()}
            <br />
            <div class="row">
              <div class="col-sm-4 col-lg-4 col-md-4">
                <select class="form-control" ref="therapist" required>
                    <option>--None--</option>
                    <option>Eve Johnson</option>
                    <option>John Doe</option>
                    <option>Jill Smith</option>
                </select>
              </div>
              <div class="col-sm-3 col-lg-3 col-md-3">
                <button type="button" onClick={this.addTherapist} class="btn btn-sm btn-success">
                    <span class="fa fa-plus-circle" aria-hidden="true"> </span>
                    Add New Therapist
                </button>
              </div>
            <div class="col-sm-5 col-lg-5 col-md-5">
              {displayErrorMessage()}
            </div>
          </div>
          </div>
      );
    }
});
module.exports = connect(
  (store) => {
    return {
      therapists: store.therapists
    };
  }
)(SchoolTherapists);
