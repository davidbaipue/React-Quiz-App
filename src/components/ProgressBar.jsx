import PropTypes from "prop-types";
const ProgressBar = ({ time }) => {
  const [remainingHours, remainingMinutes, remainingSeconds, hours, seconds] =
    time;
  return (
    <div className="progress">
      <p>
        <span>Time Remaining: </span>
        <span>{`${remainingHours}:${remainingMinutes
          .toString()
          .padStart(2, "0")}:${remainingSeconds
          .toString()
          .padStart(2, "0")}`}</span>
      </p>
      <progress value={seconds} max={hours * 3600}></progress>
    </div>
  );
};
ProgressBar.propTypes = {
  time: PropTypes.array.isRequired,
};
export default ProgressBar;
