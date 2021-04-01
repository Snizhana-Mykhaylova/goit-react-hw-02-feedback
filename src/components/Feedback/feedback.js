import React, { Component } from 'react';
import Statistics from '../Statistics/statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

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

  handleIncrement = event => {
    const option = event.target.outerText;

    return this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  // handleIncrementNeutral = () => {
  //   return this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };

  // handleIncrementBad = () => {
  //   return this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const procentage = Math.round((this.state.good * 100) / total);
    const options = Object.keys(this.state);

    return (
      <div className="feedback">
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleIncrement}
        ></FeedbackOptions>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.good + this.state.neutral + this.state.bad}
          positivePercentage={procentage}
        ></Statistics>
      </div>
    );
  }
}

export default Feedback;
