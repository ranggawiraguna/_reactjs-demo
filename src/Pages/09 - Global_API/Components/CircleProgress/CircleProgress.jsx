import React from 'react';
import './CircleProgress.css';

function CircleProgress(props) {
  return (
    <div className="circle-progress">
      <svg className="ratio" height="100%" viewBox="0 0 1 1" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="1" height="1" fill="none" /> </svg>
      <svg  className="bar" viewBox="0 0 100 100">
        <circle className="bar-bg" cx="50%" cy="50%" r="42.5%" strokeDasharray="0" />
        <circle className="bar-content" cx="50%" cy="50%" r="37.5%" />
        <circle className="bar-color" cx="50%" cy="50%" r="42.5%" strokeDasharray={`calc(42.5% * 2 * ${Math.PI} * ${props.value / 100}), calc(42.5% * 2 * ${Math.PI})`} />
      </svg>
      <span className="icon">
        <span> <img src={props.icon} alt="" height="100%"/> </span>
      </span>
    </div>
  )
}

export default CircleProgress