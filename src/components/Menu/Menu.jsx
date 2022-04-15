import React, { useState } from 'react'
import {RiMenu5Fill} from 'react-icons/ri'
import './Menu.scss'

function Menu() {

    const [size, setSize] = useState("reduce")

    function changeMenu(){
        if(size == "reduce"){
            setSize("expand")
        } else{
            setSize("reduce")
        }
    }
    
    return (
        <div id={`menu-container`} className={`${size}`} onClick={changeMenu}>
            
            <RiMenu5Fill className="menu-icon"/>

            <div className="menu-items">
                <a href="#">Home</a>
                <a href="#">Habilidades</a>
                <a href="#">Projetos</a>
                <a href="#">Experiências</a>
                <a href="#">Projetos</a>
            </div>

        </div>
    )
}

export default Menu