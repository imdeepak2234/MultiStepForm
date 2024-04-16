const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-inner bg-blue-700 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
        style={{ width: `${(100 / 7) * progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
