import React, {useState} from 'react'
import './Disciplinas.scss'

function Checkbox(props){

    return (
        <div className="academico-materias"> 
            <div className={`checkbox ${props.status}`}></div>
            <span className={`checkbox-text text_${props.status}`}>{props.name}</span>
        </div>
    )
}

export default Checkbox