import React, {Component} from 'react';

class CommentBox extends Component {
    state = { comment: ''};

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment}/>
                <div>
                    <button>Submit a comment</button>
                </div>
            </form>
        )
    }

    handleChange = (event) => {
        this.setState({comment: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ comment: ''})

    }
}

export default CommentBox;