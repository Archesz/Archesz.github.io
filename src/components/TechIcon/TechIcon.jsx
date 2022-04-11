import React from 'react'
import './TechIcon.scss'
import ReactTooltip from 'react-tooltip';


function TechIcon(props) {
  return (

    <div className="icon-container" style={{
        backgroundImage: `url(${props.url})`,
        backgroundColor: `#${props.color}`
    }}
    data-tip data-for={props.name}
    >
    <ReactTooltip id={props.name} place="bottom" effect="solid" type="info" className="icon-tooltip">
      {props.name}
    </ReactTooltip>

    </div>

    )
}

export default TechIcon