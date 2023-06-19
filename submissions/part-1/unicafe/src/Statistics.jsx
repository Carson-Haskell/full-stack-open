const Statistics = ({
  good,
  neutral,
  bad,
  total,
  average,
  positiveFeedback,
}) => {
  return (
    <>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total Ratings: {total}</p>
      <p>Average Rating: {average.toFixed(2)}</p>
      <p>
        Positive Ratings:{" "}
        {positiveFeedback > 0
          ? `${positiveFeedback.toFixed(2)}%`
          : "No ratings given"}
      </p>
    </>
  );
};

export default Statistics;
