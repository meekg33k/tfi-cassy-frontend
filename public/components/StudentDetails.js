import React from 'react';

export default React.createClass({

    getInitialState() {
        return {
            name: "Kaycee Jones",
            gender: "Male",
            ethnicity: "Caucasian",
            grade: "5th Grade",
            school: "Ravenswood Elementary"
        }
    },
    render() {
        return (
            <div>
                <p></p>
                <div>
                  <p>Name: {this.state.name}</p>
                  <p>Gender: {this.state.gender}</p>
                  <p>Grade: {this.state.grade}</p>
                  <p>School: {this.state.school}</p>
                </div>
                <button type="button" class="btn btn-sm btn-warning" id ="record-event-btn">
                    <span class="glyphicon glyphicon-edit" aria-hidden="true">  </span>
                    Edit Details
                </button>
            </div>
        );
    }
});
