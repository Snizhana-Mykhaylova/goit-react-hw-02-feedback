const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button key={option} onClick={onLeaveFeedback}>
      {option}
    </button>
  ));
};
export default FeedbackOptions;
