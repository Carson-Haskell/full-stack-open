const Statistics = ({
  good,
  neutral,
  bad,
  total,
  average,
  positiveFeedback,
}) => {
  if (total === 0) return <p>No feedback given</p>;
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
          : "No positive reviews"}
      </p>
    </>
  );
};

export default Statistics;
