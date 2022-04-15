import React from 'react'
import './Disciplinas.scss'
import Checkbox from './Checkbox'

import academico from '../../Data/academico.json'
const disciplinas = academico["Disciplinas"]

function Disciplinas() {
    return (
        <div id="academico-container">
            
            <span className="academico-title">Disciplinas da Graduação</span>
            
            <div className="academico-disciplinas">
                {disciplinas.map((disciplina) => {
                    return(
                        <Checkbox name={disciplina.nome} status={disciplina.status}/>
                    )
                })}
            </div>

        </div>
    )
}

export default Disciplinas