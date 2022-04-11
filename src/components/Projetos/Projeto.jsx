import React from 'react'
import './Projetos.scss'

function Projeto(props) {
    return (
        <div className="projeto-container">
            <div className="projeto-infos">
                <span className="projeto-name">{props.name}</span>
                <span className="projeto-data">{props.data}</span>

                <span className="projeto-descript">{props.descript}</span>
            </div>
            

            <div className="projeto-skills">
                
                <span className="projeto-utility">Utilizado</span>

                {props.skills.map((skill) => {
                    return(
                        <span className="li-skill">{skill}</span>
                    )
                })}

            </div>



        </div>
    )
}

export default Projeto