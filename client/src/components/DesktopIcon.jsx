const DesktopIcon = ({ app, onClick }) => {
  return (
    <div className="desktop-icon" onDoubleClick={() => onClick(app)}>
      <span className="desktop-icon-emoji">{app.icon}</span>
      <span className="desktop-icon-label">{app.label}</span>
    </div>
  );
};

export default DesktopIcon;
