import { AnimatePresence } from "framer-motion";
import useWindowManager from "../hooks/useWindowManager";
import appsConfig from "../data/appsConfig";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import Taskbar from "./Taskbar";

const Desktop = () => {
  const {
    windows,
    openWindow,
    closeWindow,
    focusWindow,
    minimizeWindow,
    restoreWindow,
  } = useWindowManager();

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #c8a97e 0%, #e8c99a 30%, #d4956a 60%, #8b6f47 100%)",
      }}
    >
      {/* Icone */}
      <div className="absolute top-6 left-6 flex flex-col gap-6">
        {appsConfig.map((app) => (
          <DesktopIcon key={app.id} app={app} onClick={openWindow} />
        ))}
      </div>

      {/* Finestre */}
      <AnimatePresence>
        {windows
          .filter((w) => !w.minimized)
          .map((w) => (
            <Window
              key={w.id}
              app={w}
              onClose={closeWindow}
              onFocus={focusWindow}
              onMinimize={minimizeWindow}
            />
          ))}
      </AnimatePresence>

      {/* Taskbar */}
      <Taskbar windows={windows} onRestore={restoreWindow} />
    </div>
  );
};

export default Desktop;
