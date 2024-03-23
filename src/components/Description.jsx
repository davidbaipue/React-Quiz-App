import PropTypes from "prop-types";
const Description = ({ courseDetail }) => {
  const [courseName, hours, direction, timeElapsed] = courseDetail;
  const { remainingHours, remainingMinutes, remainingSeconds } = hours;
  return (
    <div className="title">
      <h1>
        <span>CourseName: </span>
        {courseName}
      </h1>
      <p>
        <span>Duration: </span>
        {remainingHours}hrs {remainingMinutes}Mins {remainingSeconds}Sec
      </p>
      <p>
        <span>Description: </span>
        {direction}
      </p>
      {timeElapsed && <p>Time&apos;s up!</p>}
    </div>
  );
};

Description.propTypes = {
  courseDetail: PropTypes.array.isRequired,
  timeElapsed: PropTypes.bool.isRequired,
};

export default Description;
