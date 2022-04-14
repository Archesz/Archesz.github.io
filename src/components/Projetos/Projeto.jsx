import React from 'react'
import './Projetos.scss'
import Badge from '../Badge/Badge'
import {AiOutlineRight} from 'react-icons/ai'

function Projeto(props) {
    return (
        <div className="projeto-container">

            <div className="projeto-infos">
                <span className="projeto-name">Nome: {props.name}</span>
                <span className="projeto-data">Repositório: <a className="link-repository" href={props.repository}>{props.repository}</a></span>
                <span className="projeto-data">Tipo de Projeto:</span>
                <Badge type="type" name={props.tipo}/>
                <Badge type="type" name={props.tipo}/>
                <span className="projeto-label">Descrição:</span>
                <span className="projeto-descript">{props.descript}</span>
            </div>

            <AiOutlineRight className="icon-next" onClick={props.next}/>

        </div>
    )
}

export default Projeto