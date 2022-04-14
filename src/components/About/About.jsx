import React from 'react'

// Componentes
import Badge from '../Badge/Badge'

// Styles
import './About.scss'
import { AiFillLinkedin, AiFillGithub, AiOutlineFileSearch, AiOutlineTwitter } from 'react-icons/ai'

import perfil from '../../Data/infos.json'
const infos = perfil["Bio"]

const contatos = [
    { "Social": "Linkedin", "Link": "https://www.linkedin.com/in/jovit", "Icon": <AiFillLinkedin/>},
    { "Social": "Twitter", "Link": "https://twitter.com/jovarch", "Icon": <AiOutlineTwitter/>},
    { "Social": "Lattes", "Link": "http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K9002807Z3&tokenCaptchar=03AGdBq248fa9NYeaH4QTjKuJVaG3Ayon71o9qjH4vIi34vTWBCQuvcL6KcDIPWXVix_6hg1-Hug36vUAiCDPvzbPYQ-un2VCg21sPgSv5uCHv6jbQQ8RZ0MBn3BSFe2u9ktV17xarH2wmGsjDLQu5ci5SkPRCFvBs6VW3eVca5LFumVxEpqQay8x15aRFhr1SMuSojCuBZn0jr8CoBXQOjbL5UUF6SvSb4qUCMneCYHj8COP1njrs1idEuxTwQKXd-B38rW3Y7zvQ1dZWbV15uUn-mcti0DF6X2IZqJBFB08Z2AiB_EGmJXTFhQPlBIwXEWjkIlTttrzG3samQ-rcrzRy78dKNRLztaB5fMOqTh_Et2TZn62I9F0qRfz__gA-wml2H7pwTaOlti9cq78I7q0HQkqx9edFbsySBv7NSjmp55TEHnMo37dpZ6sI1wauYB0XDbQ6nyd9D9PV-l30qNpJybkhHfyf9E1DxtAuXW4hSXLomEBKUGiRA_3Dv-HTxkf4EdpgLawJgPC7VJoTd5BxcG50ORpkVQ", "Icon": <AiOutlineFileSearch/>},
    { "Social": "Github", "Link": "https://github.com/Archesz", "Icon": <AiFillGithub/>},
]

function About() {
    return (
        <div className="about-container">
            
            <div className="about-area">

                <span className="about-title">Sobre</span>

                <span className="about-text">{infos.Sobre}</span>

                <div className="about-socials">
                    {contatos.map((social) => {
                        return(
                            <Badge name={social["Social"]} icon={social["Icon"]} link={social["Link"]} type="social"/>
                        )
                    })}
                </div>
                
                <div className="about-more">

                    <div className="about-interess">
                        <span className="about-interesse-label">Interesses</span>
                    </div>
                    
                    <div className="interesses">
                        <Badge type="skill" name="Machine Learning"/>
                        <Badge type="skill" name="Computer Vision"/>
                        <Badge type="skill" name="Image Processing"/>
                        <Badge type="skill" name="Data Science"/>
                        <Badge type="skill" name="Web Development"/>
                        <Badge type="skill" name="Education"/>
                        <Badge type="skill" name="Science"/>
                    </div>

                </div>

            </div>


            
        </div>
    )
}

export default About
