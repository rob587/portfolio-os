import React from "react";

const Taskbar = ({ windows, onRestore }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("it-IT", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="taskbar">
        <div className="taskbar-apps">
          {windows.map((w) => (
            <button
              key={w.id}
              className={`taskbar-btn ${w.minimized ? "minimized" : ""}`}
              onClick={() => onRestore(w.id)}
            >
              {w.icon} {w.label}
            </button>
          ))}
        </div>
        <div className="taskbar-clock">{time}</div>
      </div>
    </>
  );
};

export default Taskbar;
