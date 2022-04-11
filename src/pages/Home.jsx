import React from 'react'
import Main from '../components/Main/Main'
import Perfil from '../components/Perfil/Perfil'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'

import '../styles/home.scss'
import Experiences from '../components/Experiences/Experiences'
import Projetos from '../components/Projetos/Projetos'

function Home() {
  return (
    <div className="home-container">

        <div className="side">
          <Perfil />
        </div>

        <div className="main">
          <h2 className="apresentation">Hello, i am jovi :)</h2>

          <About />
          <Skills/>
          <Experiences/>
          <Projetos />

          <div id="modal-area"></div>

        </div>

    </div>
  )
}

export default Home