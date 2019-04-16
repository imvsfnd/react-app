import React from 'react'

const ProgressBar = (props) => { 
    const {value} = props;
    return (
        <div>
          <div className="bar-outer">
              <div className="bar-inner" style={{width:`${value}%`}}></div>
              <span className="bar-info">{value}%</span>
          </div>
        </div>
      
    )
  }
  export default ProgressBar;