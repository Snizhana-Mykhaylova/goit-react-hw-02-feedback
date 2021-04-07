import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.statContainer}>
      <p>
        <span className="material-icons" style={{ marginRight: '10px' }}>
          sentiment_very_satisfied
        </span>{' '}
        Good: <span>{good}</span>
      </p>
      <p>
        <span className="material-icons" style={{ marginRight: '10px' }}>
          sentiment_neutral
        </span>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        <span className="material-icons" style={{ marginRight: '10px' }}>
          sentiment_very_dissatisfied
        </span>{' '}
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total:
        <span>{total ? total : 0}</span>
      </p>
      <p>
        Positive Feedback:
        <span>{positivePercentage ? positivePercentage : 0}</span>%
      </p>
    </div>
  );
};

export default Statistics;

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
