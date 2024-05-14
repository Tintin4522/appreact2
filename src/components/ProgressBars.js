export const ProgressBar = ({ skill, percentage, color }) => {
    return (
      <div className="progressBar">
        <label>{skill}</label>
        <div className="progressBarContainer">
          <div 
            className="progressBarFill"
            style={{ width: `${percentage}%`, backgroundColor: color }}
          />
        </div>
      </div>
    );
};
  
  export const ProgressBars = () => {
    return (
      <div className="progressBars">
        <ProgressBar skill="HTML 90%" percentage={90} color="red" />
        <ProgressBar skill="CSS 80%" percentage={80} color="turquoise" />
        <ProgressBar skill="JAVASCRIPT 70%" percentage={70} color="yellow" />
        <ProgressBar skill="PHP 60%" percentage={60} color="green" />
        <ProgressBar skill="React 50%" percentage={50} color="blue" />
      </div>
    );
};