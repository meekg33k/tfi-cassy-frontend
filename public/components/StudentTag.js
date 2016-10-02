import React from 'react';
import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';
import {connect} from "react-redux";



const StudentTag = React.createClass({

    getInitialState() {

        console.log(this.props.suggestions);

        return {
            tags: [ ],
            suggestions: this.props.suggestions,
            placeholder:"Enter student name here"
        }
    },

    handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
        this.props.onDeleteStudent(i);
    },

    handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({tags: tags});
        this.props.onAddStudent(tag);
    },

    handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;

        // mutate array
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: tags });
    },

    render() {
        console.log("Suggestionslk;jklj", this.props.suggestions);
        let tags = this.state.tags;
        let suggestions = this.props.suggestions;
        let placeholder = this.state.placeholder;
        return (
            <div>
                <ReactTags tags={tags}
                    suggestions={suggestions}
                    placeholder={placeholder}
                    handleDelete={this.handleDelete.bind(this)}
                    handleAddition={this.handleAddition.bind(this)}
                    handleDrag={this.handleDrag.bind(this)} />
            </div>
        )
    }
});

module.exports = connect(
  (store) => {
    return {
        formFields: store.formFields,
        schools: store.schools,
        students: store.students
    };
  }
)(StudentTag);
