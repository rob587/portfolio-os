import { useState } from "react";

const useWindowManager = () => {
  const [windows, setWindows] = useState([]);

  const openWindow = (app) => {
    setWindows((prev) => {
      const exists = prev.find((w) => w.id === app.id);
      if (exists) {
        return prev.map((w) =>
          w.id === app.id
            ? { ...w, minimized: false, zIndex: getMaxZ(prev) + 1 }
            : w,
        );
      }
      return [
        ...prev,
        {
          ...app,
          minimized: false,
          zIndex: getMaxZ(prev) + 1,
        },
      ];
    });
  };

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const focusWindow = (id) => {
    setWindows((prev) => {
      const maxZ = getMaxZ(prev);
      return prev.map((w) => (w.id === id ? { ...w, zIndex: maxZ + 1 } : w));
    });
  };

  const minimizeWindow = (id) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: true } : w)),
    );
  };

  return { windows, openWindow, closeWindow, focusWindow, minimizeWindow };
};

const getMaxZ = (windows) =>
  windows.reduce((max, w) => Math.max(max, w.zIndex || 1), 1);

export default useWindowManager;
