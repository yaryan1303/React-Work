import { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("cancel the interval");
    };
  });
  return (
    <p>
      This is the current time:
      {time.toLocaleDateString()}-{time.toLocaleTimeString()}
    </p>
  );
}
export default Time;
