import React from 'react'
import {unmountComponentAtNode} from 'react-dom';
import './ModalSkill.scss'
import {AiOutlineClose} from 'react-icons/ai'

import competencia from '../../Data/skills.json'
const competenciasHard = competencia["CompetenciasHard"]
const competenciasSoft = competencia["CompetenciasSoft"]


function ModalSkill(props) {

  function closeSkill(){
    let home = document.querySelector("#modal-area")
    unmountComponentAtNode(home)
  }

  if(props.area == "hard"){
    return (
      <div id="modal-field" onClick={closeSkill}>
  
          <div className="modal-container">
            
              <div className="modal-header">
                <div className="modal-explain">
                  <span className="modal-title">Competências</span>
                  <span className="modal-legend">Outras tecnologias, bibliotecas e ferramentas que possuo conhecimento.</span>
                </div>
                <AiOutlineClose className="modal-close" onClick={closeSkill}/>
              </div>
              <div className="modal-body">
  
                <div className="modal-content">
                
                  {competenciasHard.map((competencia) => {
                    return(
                      <span className="modal-skill">{competencia}</span> 
                    )
                  })}
  
                </div>
  
              </div>
  
          </div>
  
      </div>
    )
  } else if(props.area == "soft"){
      return (
    <div id="modal-field" onClick={closeSkill}>

        <div className="modal-container">
          
            <div className="modal-header">
              <div className="modal-explain">
                <span className="modal-title">Competências</span>
                <span className="modal-legend">Outras tecnologias, bibliotecas e ferramentas que possuo conhecimento.</span>
              </div>
              <AiOutlineClose className="modal-close" onClick={closeSkill}/>
            </div>
            <div className="modal-body">

              <div className="modal-content">
              
                {competenciasSoft.map((competencia) => {
                  return(
                    <span className="modal-skill">{competencia}</span> 
                  )
                })}

              </div>

            </div>

        </div>

    </div>
  )
  }

}

export default ModalSkill