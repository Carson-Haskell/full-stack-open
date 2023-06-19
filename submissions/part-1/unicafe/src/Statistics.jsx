import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total / 3;
  const positiveRatings = (good / (total - neutral)) * 100;

  if (total === 0) return <p>No feedback given</p>;

  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />

          <StatisticLine text="Neutral" value={neutral} />

          <StatisticLine text="Bad" value={bad} />

          <StatisticLine text="Total Ratings" value={total} />

          <StatisticLine text="Average Rating" value={average.toFixed(2)} />

          <StatisticLine
            text="Positive Ratings"
            value={
              positiveRatings > 0
                ? `${positiveRatings.toFixed(2)}%`
                : "No positive reviews"
            }
          />
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
