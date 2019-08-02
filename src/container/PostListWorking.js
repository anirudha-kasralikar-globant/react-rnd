/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Post from '../component/Post';
import { fetchProducts } from '../action/postAction';

class PostList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { error, loading, products } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!products || !products.length) {
      return <div>No Posts</div>;
    }

    return (
      <ul>
        {products.map(product =>
          <li key={product.id}>{product.title}</li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  products: state.post.items,
  loading: state.post.loading,
  error: state.post.error
});

export default connect(
  mapStateToProps
)(PostList);
