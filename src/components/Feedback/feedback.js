import React, { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';

import styles from './feedback.module.css';

class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    procentage: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleIncrement = option => {
    return this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const procentage = Math.round((good * 100) / total);
    const options = Object.keys(this.state);

    return (
      <div className={styles.feedbackContainer}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleIncrement}
          ></FeedbackOptions>
        </Section>

        {total ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={good + neutral + bad}
              positivePercentage={procentage}
            ></Statistics>
          </Section>
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </div>
    );
  }
}

export default Feedback;
