import React, {useState} from 'react'

// Componentes
import TechIcon from '../TechIcon/TechIcon'

// Styles
import { BiMap } from 'react-icons/bi'
import './Perfil.scss'

import perfil from '../../Data/infos.json'
const infos = perfil["Perfil"]

function Perfil() {

    return (
        <div id="perfil-container" className={`expand`}>

            <div className="perfil-photo">
                <img src="https://pbs.twimg.com/profile_images/1379173808880431104/JlD-51H2_400x400.jpg" className="photo" alt="" />
            </div>

            <span className="perfil-name">{infos.Nome}</span>
            <span className="perfil-nick">{infos.Apelido}</span>
            <span className="perfil-student">{infos.Curso}</span>

            <div className="perfil-address">
                <BiMap />
                <span className="address">{infos.Residencia}</span>
            </div>

            <div className="perfil-divisor"></div>

            <div className="perfil-skills">

                <span className="title">Main Techs</span>

                <div className="main-skills">

                    <TechIcon url="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" name="Python" />
                    <TechIcon url="https://cdn-icons-png.flaticon.com/512/919/919851.png" name="React" />
                    <TechIcon url="https://symbols.getvecta.com/stencil_85/53_julia-language-icon.47d1f49cdd.png" name="Julia" />

                </div>

                <span className="title">Contato</span>

                <div className="perfil-contatos">

                    <div className="contato-field">
                        <span className="contato-label">Email</span>
                        <span className="contato-value">{infos.Email}</span>
                    </div>

                    <div className="contato-field">
                        <span className="contato-label">Celular</span>
                        <span className="contato-value">{infos.Celular}</span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Perfil