import React from 'react'
import './Badge.scss'

function Badge(props) {
  if(props.type == 'social'){
    return (
      <a className="badge-container" href={props.link}>
          <div className="badge-icon">{props.icon}</div>
          <span className="badge-name">{props.name}</span>
      </a>
    )
  } else if(props.type == "skill"){
    return (
      <a className="badge-container badge-skill">
          <span className="badge-name">{props.name}</span>
      </a>
    )
  }
}

export default Badge