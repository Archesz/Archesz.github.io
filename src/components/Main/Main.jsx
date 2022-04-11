import React from 'react'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Perfil from '../Perfil/Perfil'

import './Main.scss'

function Main() {
  return (
    <div className="main-container" id="main">
        
        <span>Hello, i am Jovi</span>

        <div className="content">

          <About />  
          <Skills />

        </div>

    </div>
  )
}

export default Main