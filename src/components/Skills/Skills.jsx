import React from 'react'
import ReactDOM from 'react-dom'
import './Skills.scss'

import ModalSkill from '../ModalSkill/ModalSkill'
import Skill from '../Skill/Skill'
import Badge from '../Badge/Badge'

import skills from '../../Data/skills.json'
const hard_skills = skills["Hard"]
const soft_skills = skills["Soft"]

function Skills() {

  function openSkill(area) {

    let home = document.querySelector("#modal-area")
    let modal = ModalSkill({"area": area})
    ReactDOM.render(modal, home)

  }

  return (
    <div className="skills-container">

      <div className="skills-area">
        <div className="skills-header">

          <div className="skills-left">
            <span className="skills-title">Tecnologias | Hard Skills </span>
            <span className="skills-help">Passe o mouse sobre o icone para ler mais.</span>
          </div>

          <div className="skills-right">
            <span onClick={() => {openSkill("hard")}}>Ver outras</span>
          </div>

        </div>

        <div className="skills-field">

          {hard_skills.map((skill) => {
            return (
              <Skill name={skill.name} url={skill.url} color={skill.color} descript={skill.descript} />
            )
          })}

        </div>

        <div className="skills-header">

          <div className="skills-left">
            <span className="skills-title">Competências e Habilidades</span>
            <span className="skills-help">Habilidades e campos que possuo experiência ou contato.</span>

          </div>

          <div className="skills-right">
            <span onClick={() => {openSkill("soft")}}>Ver outras</span>
          </div>

        </div>
        <div className="skills-field">

          {soft_skills.map((skill) => {
            return (
              <Badge name={skill} type="skill" />
            )
          })}

        </div>

      </div>

    </div>
  )
}

export default Skills