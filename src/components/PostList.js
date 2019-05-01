import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import React, { Component } from 'react';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return ( 
      <div>
        <h1>Post List</h1>
      </div>
    )
  }
}

export default connect(null, { fetchPosts })(PostList)
