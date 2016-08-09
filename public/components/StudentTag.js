import React from 'react';
import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';

const StudentTag = React.createClass({

    getInitialState() {
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
        let tags = this.state.tags;
        let suggestions = this.state.suggestions;
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

export default StudentTag;
