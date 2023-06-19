import { useState } from "react";

import Button from "./Button";
import Statistics from "./Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = total / 3;
  const positiveFeedback = (good / (total - neutral)) * 100;

  return (
    <div>
      Give Feedback
      <br />
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positiveFeedback={positiveFeedback}
      />
    </div>
  );
}

export default App;
