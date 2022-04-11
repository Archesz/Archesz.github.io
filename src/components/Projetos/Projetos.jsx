import React, { useState } from 'react'
import Projeto from './Projeto'
import './Projetos.scss'

import projeto from '../../Data/experiences.json'
const projetos = projeto["Projetos"]

function Projetos() {

    const [value, setValue] = useState(1)

    function nextValue(){
      let nextValue = value + 1
      if(nextValue <= projetos.length){
        setValue(nextValue);
      } else{
        setValue(1)
      }
    }

    function changeProject(id){
        setValue(id)
    }
  

    return (
        <div className="projetos-container">
            
            <span className="projetos-title">Projetos</span>

            <div className="projetos-area">

                {projetos.map((projeto) => {
                    if(projeto.id == value){
                        return(
                            <Projeto name={projeto.name} data={projeto.data} skills={projeto.skills} descript={projeto.descript}/>
                        )
                    }
                })}                
                
            </div>

            <div className="experiences-count">
              {projetos.map((projeto) => {
                if(projeto.id == value){
                  return(
                    <div className="count-mark"></div>
                  )
                } else{
                  return(
                    <div className="count-mark disable" id={projeto.id} onClick={() => {changeProject(projeto.id)}}></div>
                  )
                }
              })}
            </div>

        </div>
    )
}

export default Projetos