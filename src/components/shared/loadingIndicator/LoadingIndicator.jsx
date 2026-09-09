import "./LoadingIndicator.css";
const LoadingIndicator = () => {
 return (
    <div className="LoadingIndicator">
      <div className="BookSpinner">
        <div className="BookSpinnerPage"></div>
        <div className="BookSpinnerPage"></div>
        <div className="BookSpinnerPage"></div>
      </div>
      <p className="LoadingIndicatorText">Caricamento in corso...</p>
    </div>
  );

}

export default LoadingIndicator