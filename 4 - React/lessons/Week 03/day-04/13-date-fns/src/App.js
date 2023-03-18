import { format } from "date-fns";
import { useEffect, useState } from "react";

export const App = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const tick = () => {
      setDateTime(new Date());
    };

    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="jumbotron">
        <div className="title">TODAY</div>
        <div className="sub-title">
          {format(dateTime, "cccc, do LLLL, yyyy")}
        </div>
        <div className="code-block">
          <code>{format(dateTime, "HH:mm:ss")}</code>
        </div>
      </div>
    </div>
  );
};
