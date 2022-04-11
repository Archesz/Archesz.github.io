import React from 'react'
import './Competencias.scss'

const competencias = ["Pesquisa Científica", "Estratégia", "Aprendizado de Máquina", "Matemática", "Computação Científica", "Didática"]

function Competencias() {
  return (
    <div id="competencias-container">
        
        <span className="competencias-title">Competências</span>

        {competencias.map((competencia) => {
            return(
                <span className="competencia">
                    {competencia}
                </span>
            )
        })}

    </div>
  )
}

export default Competencias