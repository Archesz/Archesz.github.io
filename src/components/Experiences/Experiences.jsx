import React, {useState} from 'react'

// Componentes 
import Experience from './Experience'

// Styles
import './Experiences.scss'

import experience from '../../Data/experiences.json'
const experiences = experience["Experiences"]

function Experiences() {

  const [value, setValue] = useState(1)


  function changeProject(id){
    setValue(id)
  }

  function nextValue(){
    let nextValue = value + 1
    if(nextValue <= experiences.length){
      setValue(nextValue);
    } else{
      setValue(1)
    }
  }

  return (
    <div id="experiences-container">
        
        <span className="experiences-title">Experiências</span>

        <div className="experiences">
          
          {experiences.map((experience) => {
            if(experience.id == value) {
              return(
                <Experience next={nextValue} title={experience.title} enterprise={experience.enterprise} resume={experience.resume} url={experience.url}/>
              )
            }
          })}
        </div>

        <div className="experiences-count">
          {experiences.map((experience) => {
            if(experience.id == value){
              return(
                <div className="count-mark"> </div>
              )
            } else{
              return(
                <div className="count-mark disable" id={experience.id} onClick={() => {changeProject(experience.id)}}></div>
              )
            }
          })}
        </div>

    </div>
  )
}

export default Experiences