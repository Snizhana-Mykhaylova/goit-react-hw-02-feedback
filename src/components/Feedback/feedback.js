import React, { Component } from 'react';

class Feedback extends Component {
  static defaultProps = {
    total: 0,
    procentage: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    return this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleIncrementNeutral = () => {
    return this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleIncrementBad = () => {
    return this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const defaultTotal = this.props.total;
    const defaultProcentage = this.props.procentage;
    const total = this.state.good + this.state.neutral + this.state.bad;
    const procentage = Math.round((this.state.good * 100) / total);

    return (
      <div className="feedback">
        <h1>Please leave feedback</h1>
        <button onClick={this.handleIncrementGood}>Good</button>
        <button onClick={this.handleIncrementNeutral}>Neutral</button>
        <button onClick={this.handleIncrementBad}>Bad</button>
        <h2>Statistics</h2>
        <p>
          Good: <span>{this.state.good}</span>
        </p>
        <p>
          Neutral: <span>{this.state.neutral}</span>
        </p>
        <p>
          Bad: <span>{this.state.bad}</span>
        </p>
        <p>
          Total:
          <span>{total ? total : defaultTotal}</span>
        </p>
        <p>
          Positive Feedback:
          <span>{procentage ? procentage : defaultProcentage}</span>%
        </p>
      </div>
    );
  }
}

export default Feedback;
