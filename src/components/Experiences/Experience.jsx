import React from 'react'
import './Experiences.scss'
import {AiOutlineRight} from 'react-icons/ai'

function Experience(props) {
  return (
    <div className="experience-container" onClick={props.next}>
      
      <div className="experience-logo" style={{backgroundImage: `url(${props.url})`}}>

      </div>

      <div className="experience-infos">
        <span className="experience-title">{props.title}</span>
        <span className="experience-enterprise">{props.enterprise}</span>
        <span className="experience-descript">
          {props.resume}
        </span>
      </div>

      <AiOutlineRight className="icon-next" onClick={props.next}/>

    </div>
  )
}

export default Experience