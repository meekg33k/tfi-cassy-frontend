"use strict"

import uuid from "node-uuid";
import React from "react";
import ReactDOM from "react-dom";
import BreadCrumb from "react-breadcrumbs"

import AddEventForm from "../components/AddEventForm"
import EditEventForm from "../components/EditEventForm"
import EventList from "../components/EventList"
import Search from "../components/Searcher"
import SearchProcessor from "../../apis/Helper"



export default React.createClass({

	getInitialState(){
		return {
      addEvent: false,
			editingEvent: false,
			searchString: "",
			editEvent: {},
			events: [
				{
					id: 898091,
					name: "Ranswood Event",
					type: "Individual Session",
					school: "Ranswood Elementary",
					other:"",
					description:"A wonderful event",
					date: "03/18/2012",
					students: [
						"Marlon Jameson", "Cut Carr", "Yanzhang Yui"
					]
				}, {
					id: 777118,
					name: "Dopest Event",
					type: "Individual Session",
					school: "Loyola College",
					other: "",
					description:"A wonderful event",
					date: "03/25/2016",
					students: [
						  {
						    "id": 1,
						    "name": "Vinod Ep",
						  },
						  {
						    "id": 2,
						    "name": "Kay Jay"
						  },
						  {
						    "id": 3,
						    "name": "user"
						  }
						]
				},
			]
		};
	},

	//This is the method that actually adds a new event..will make API calls
	handleAddEvent(event, state){
		console.log(this.state.editingEvent);
		if (!this.state.editingEvent){
			this.setState({
				events: [
					...this.state.events,
					event
				]
			});
		}
		this.setState({
			addEvent: state
		});
	},

	//This method that actually deletes an event..will make API calls
	handleDeleteEvent(event){

		var victimId;
    if (confirm("Do you want to proceed to delete the event?") == true) {
	    	for(var i = 0;  i < this.state.events.length; i++) {
			    if (this.state.events[i].id === event.id) {
			        victimId = i;
			        break;
			    }
				}

				var updatedEvents = this.state.events.splice(victimId, 1);
				this.setState(updatedEvents);
    }

	},

	//Handles initial call to edit event from EventList... no API calls
	handleEditEvent(eventToBeEdited){
		if (!this.state.addEvent){
			this.setState({
				editingEvent: true,
				editEvent: eventToBeEdited
			});
			return true;
		}
		return false;
	},

	//State processing... no API calls
  handleExitAddEvent(){
    this.setState({
      addEvent: false
    });
  },

	//State processing... no API calls
	handleExitEditEvent(){

		var victimId;
		for(var i = 0;  i < this.state.events.length; i++) {
			if (this.state.events[i].id === this.state.editEvent.id) {
					victimId = i;
					break;
			}
		}

		var updatedEvents = this.state.events.splice(victimId, 1);

		this.setState(updatedEvents);
		this.setState({
			events: [
				...this.state.events,
				{
					id: Date.now(),
					name: this.state.editEvent.name,
					type: this.state.editEvent.type,
					school: this.state.editEvent.school,
					other: this.state.editEvent.other,
					description: this.state.editEvent.description,
					date: this.state.editEvent.date,
				}
			],
			editingEvent: false
		});
	},


	//this does to acutal editing of events... makes API calls
	handleSaveEditEvent(eventEdited){
		var victimId;
		console.log(eventEdited);

		for(var i = 0;  i < this.state.events.length; i++) {
			console.log("Comparing "+this.state.events[i].id + " and "+eventEdited.id);
			if (this.state.events[i].id === eventEdited.id) {
					victimId = i;
					break;
			}
		}

		var updatedEvents = this.state.events.splice(victimId, 1);

		this.setState(updatedEvents);
		this.setState({
			events: [
				...this.state.events,
				{
					id: Date.now(),
					name: eventEdited.name,
					type: eventEdited.type,
					school: eventEdited.school,
					other: eventEdited.other,
					description: eventEdited.description,
					date: eventEdited.date,

				}
			],
			editingEvent: false
		});
	},


  initiateAddEvent(){
		if (!this.state.editingEvent){
			this.setState({
	      addEvent: true
			});
		}
  },


	handleSearch(searchString){
		this.setState({
			searchString: searchString.toLowerCase()
		});
	},

  	render() {

  		var {events, searchString} = this.state;
  		var filteredEvents = SearchProcessor.filterEvents(events, searchString);

      var renderAddEditEvent = () =>{
  			if (this.state.addEvent){
					if (this.state.editingEvent){
						this.setState({
							addEvent: false
						});
					}
				else{
					return(
						<div>
							<AddEventForm onAddEvent={this.handleAddEvent} onExitAddEvent={this.handleExitAddEvent}/>
						</div>
					);
				}

  			}
				if (this.state.editingEvent){
					if (this.state.addEvent){
						this.setState({
							editingEvent: false
						});
					}
					else{
						return(
							<div>
								<EditEventForm onSaveEditEvent={this.handleSaveEditEvent} onExitEditEvent={this.handleExitEditEvent} event={this.state.editEvent}/>
							</div>
						);
					}
				}

  		};

	    return (
	    	<div>
				    <div class="container">
              <p class="line-breaker" />
              <BreadCrumb routes={this.props.routes} separator =" >> "/>
              <br />
              <br />
			        <div class="row row-header report-form">
          				{renderAddEditEvent()}
			            <br />
                  <div class="row row-header">
                    <div class="col-xs-12 col-sm-6 col-lg-6 col-md-6">
                        <p class="event-header">My Events List</p>
                    </div>
                    <div class="col-xs-12 col-sm-2 col-lg-2 col-md-2">
                      <div class="form-group">
                            <button type="submit" class="btn btn-warning" onClick={this.initiateAddEvent}>
                              <span class="glyphicon glyphicon-plus" aria-hidden="true">  </span>
                            &nbsp; Add Event
                          </button>
                      </div>
                    </div>
  			            <div class="col-xs-12 col-sm-4 col-lg-4 col-md-4">
  			            	<Search onSearch={this.handleSearch} placeholder = "Search by event name here"/>
  			            </div>
                  </div>
									<EventList events={filteredEvents} onEditEvent={this.handleEditEvent} onDeleteEvent={this.handleDeleteEvent}/>

			        </div>
			    </div>
			</div>
		);
  }
});
