import React from 'react'
import ModalSkill from '../ModalSkill/ModalSkill'
import ReactDOM from 'react-dom'
import ReactTooltip from 'react-tooltip';
import './Skill.scss'

function Skill(props) {

  return (
    <div className="skill-container" style={{
        backgroundImage: `url(${props.url})`,
        backgroundColor: `#${props.color}`
    }}
    data-tip data-for={props.name}
    >
    <ReactTooltip id={props.name} place="bottom" effect="solid" type="info" className="skill-tooltip">
      {props.name}
    </ReactTooltip>

    </div>
  )
}

export default Skill