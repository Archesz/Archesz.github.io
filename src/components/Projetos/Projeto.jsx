import React from 'react'
import './Projetos.scss'
import Badge from '../Badge/Badge'
import {AiOutlineRight} from 'react-icons/ai'

function Projeto(props) {
    return (
        <div className="projeto-container" onClick={props.next}>

            <div className="projeto-infos">
                <span className="projeto-data">Repositório: <a className="link-repository" href={props.repository}> {props.name}</a></span>
                <span className="projeto-data">Tipo de Projeto: {props.tipo}</span>
                <span className="projeto-label">Descrição:</span>
                <span className="projeto-descript">{props.descript}</span>
            </div>

            <AiOutlineRight className="icon-next" onClick={props.next}/>

        </div>
    )
}

export default Projeto