// @flow

import React, { Component } from 'react';

class NewPost extends Component<*> {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { body, title } = this.state;
    if (title.trim() && body.trim()) {
      // eslint-disable-next-line no-console
      console.log(this.state);

      const { onAddPost } = this.props;
      onAddPost(this.state);

      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      title: '',
      body: '',
    });
  };

  render() {
    const { body, title } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Title"
              className="form-control"
              name="title"
              onChange={this.handleInputChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="Body"
              className="form-control"
              name="body"
              onChange={this.handleInputChange}
              value={body}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Add Post
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={this.handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;
