import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      className={styles.FeedbackButton}
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      <span className="material-icons">star_outline</span>
      {option}
    </button>
  ));
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
