import React from 'react';

import Therapist from "./Therapist";

export default React.createClass({

    getInitialState() {
        return {
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
      state.push({
        id: Date.now(),
        name: this.refs.therapist.value
      });
      this.setState({
        therapists: state
      });
      this.refs.therapist.value ='';
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
      }
    },

    render() {
      var {therapists} = this.state;
      console.log(therapists);

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
              <div class="col-sm-4 col-lg-4 col md-4">
                <select class="form-control" ref="therapist">
                    <option>Eve Johnson</option>
                    <option>John Doe</option>
                    <option>Jill Smith</option>
                </select>
              </div>
              <div class="col-sm-4 col-lg-4 col md-4">
                <button type="button" onClick={this.addTherapist} class="btn btn-sm btn-success">
                    <span class="fa fa-plus-circle" aria-hidden="true"> </span>
                    Add New Therapist
                </button>
              </div>
            </div>
          </div>
      );
    }
});
