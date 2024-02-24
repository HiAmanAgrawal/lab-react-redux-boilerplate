import React from 'react';
import { createStore } from 'redux';
import reducer from './Reducer';
import { incrementLike, decrementLike } from './Actions';

class LikeCounter extends React.Component {
  constructor(props) {
    super(props);
    this.store = createStore(reducer);
    this.state = {
      likeCount: this.store.getState().likeCount
    };
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => {
      this.setState({
        likeCount: this.store.getState().likeCount
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleIncrement = () => {
    this.store.dispatch(incrementLike());
  };

  handleDecrement = () => {
    if (this.state.likeCount > 0) {
      this.store.dispatch(decrementLike());
    }
  };

  render() {
    return (
      <div>
        <h2>Like Counter</h2>
        <p>Count: {this.state.likeCount}</p>
        <button onClick={this.handleIncrement}>Like</button>
        <button onClick={this.handleDecrement}>Unlike</button>
      </div>
    );
  }
}

export default LikeCounter;
