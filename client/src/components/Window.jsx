import { useRef, useState } from "react";
import { motion } from "framer-motion";

const Window = () => {
  const [position, setPosition] = useState(app.defaultPosition);
  const [size] = useState(app.defaultSize);
  const dragRef = useRef(null);

  const AppComponent = app.component;
  return (
    <>
      <motion.div
        ref={dragRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        drag
        dragMomentum={false}
        dragElastic={0}
        onDragStart={() => onFocus(app.id)}
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          width: size.width,
          height: size.height,
          zIndex: app.zIndex,
        }}
        className="window"
        onClick={() => onFocus(app.id)}
      >
        {/* Titlebar */}
        <div className="window-titlebar">
          <span className="window-title">
            {app.icon} {app.label}
          </span>
          <div className="window-controls">
            <button className="btn-minimize" onClick={() => onMinimize(app.id)}>
              −
            </button>
            <button className="btn-close" onClick={() => onClose(app.id)}>
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="window-body">
          <AppComponent />
        </div>
      </motion.div>
    </>
  );
};

export default Window;
