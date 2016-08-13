import React from 'react';

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

    render() {

      var {therapists} = this.state;
      console.log(therapists);

      var renderTherapists = () => {
        return therapists.map((therapist) => {
          return (
            <p key={therapist.id}>{therapist.name}</p>
          );
        });
      };

      return (
          <div>
            <br />
            <p><b>Therapists</b> &emsp; &emsp; </p>
              {renderTherapists()}
              <p> <input type="text" ref="therapist" placeholder="Enter name of therapist" /> &emsp; &emsp;
                <button type="button" onClick={this.addTherapist} class="btn btn-sm btn-success">
                    <span class="fa fa-plus-circle" aria-hidden="true"> </span>
                    Add New Therapist
                </button>
              </p>
          </div>
      );
    }
});
