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

  const handleRestore = (id) => {
    focusWindow(id);
    // rimuovi minimized dallo state
    // lo gestiamo tramite un'azione dedicata nel hook
  };

  return (
    <div className="desktop">
      {/* Icone */}
      <div className="desktop-icons">
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
