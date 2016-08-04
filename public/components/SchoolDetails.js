import React from 'react';
import SiteCoordinator from "./SiteCoordinator"
import Therapist from "./Therapist"

export default React.createClass({

    getInitialState() {
        return {
            name: "Eve Johnson",
            gender: "Female",
            ethnicity: "Caucasian",
            grade: "5th Grade",
            school: "Ravenswood Elementary"
        }
    },
    render() {
        return (
            <div>
                <SiteCoordinator name={this.state.name}></SiteCoordinator>
                <Therapist></Therapist>
            </div>
        );
    }
});